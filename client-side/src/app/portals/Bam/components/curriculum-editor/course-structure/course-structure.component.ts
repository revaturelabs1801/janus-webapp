import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../../../models/curriculum.model';
import { CurriculumService } from '../../../services/curriculum.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-course-structure',
  templateUrl: './course-structure.component.html',
  styleUrls: ['./course-structure.component.css']
})
export class CourseStructureComponent implements OnInit {

  allCurriculums: Curriculum[];
  allCurriculumNames: string[] = [];
  uniqCurrNames: string[];
  allCurrVersions: Array<Curriculum[]> = new Array<Curriculum[]>();
  uniqCurrVersions: Array<Curriculum[]> = new Array<Curriculum[]>();

  constructor(private curriculumService: CurriculumService) { }

  ngOnInit() {
    this.getAllCurriculums();
  }

  /**
   * get all curriculum names (including duplicates)
   * @author Carter Taylor, Olayinka Ewumi, James Holzer (1712-Steve)
   */
  getCurriculumNames() {
    for (let i = 0; i < this.allCurriculums.length; i++) {
      this.allCurriculumNames.push(this.allCurriculums[i].curriculumName);
    }
  }

  /**
   * filters out all duplicate curriculum names
   * @author Carter Taylor, Olayinka Ewumi, James Holzer (1712-Steve)
   */
  getUniqueCurrNames() {
    this.uniqCurrNames = this.allCurriculumNames.filter(this.onlyUnique);
  }

  /**
   * get all versions of a curriculum (including duplicates).
   * loops through all curriculums (including duplicates), and once the filter finds a match to
   *  the current unique curriculum name, we add it back into all curriculums while ignoring
   *  the rest. This array is then pushed into allCurrVersions. Once iteration is complete,
   *  the process repeats for the next curriculum type
   * @author Carter Taylor, Olayinka Ewumi, James Holzer (1712-Steve)
   */
  getCurriculumVersions() {
    for (let i = 0; i < this.uniqCurrNames.length; i++) {
      this.allCurrVersions.push(this.allCurriculums.filter(e => this.uniqCurrNames[i] === e.curriculumName));
    }
  }

  /**
   * taking our array of nested curriculum arrays, we want to filter all duplicate versions
   * for each of those nested arrays
   * currs - temp array that will contain all unique versions of a specific curriculum type for
   * each iteration
   * loops through all curriculum grouped types
   *  sets our version variable equal to the max version number of the
   *  current curriculum grouped types
   * loops through all elements within the current grouped type
   *  grabs the first instance of a curriculum object if its version is equal to
   *  the current value of our version variable and then pushes it
   *  into our temp currs array
   * once our version variable hits 0, inner loop is complete and our temp
   *  currs array is pushed into an array of unique curriculum versions.
   *  Then  we clear our temp array and start the next iteration of our outer loop to
   *  repeat the process for the next curriculum grouped type.
   * @author Carter Taylor, Olayinka Ewumi, James Holzer (1712-Steve)
   */
  getUniqCurrVersions() {
    let currs: Curriculum[] = [];
    for (let i = 0; i < this.allCurrVersions.length; i++) {
      let version = 1;
      this.allCurrVersions[i].forEach(e => {
        if (e.curriculumVersion > version) {
          version = e.curriculumVersion;
        }
      });
      for (let j = 0; j < this.allCurrVersions[i].length; j++) {
        if (this.allCurrVersions[i][j].curriculumVersion === version) {
          currs.push(this.allCurrVersions[i][j]);
          version--;
          if (version !== 0) {
            j = -1;
          }
        } else if (j === this.allCurrVersions[i].length - 1 && version !== 0) {
          version--;
          j = -1;
        }
      }
      this.uniqCurrVersions.push(currs);
      currs = [];
    }

  }

  /**
   * automagical function used in conjunction with the filter method to return only unique values
   * @author Carter Taylor, Olayinka Ewumi (1712-Steve)
   */
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  /**
   * requests all curriculums by calling apporopiate API endpoint.
   * Then calls all methods associated with getting
   * the unique list of curriculum types & their versions
   * @author Carter Taylor, Olayinka Ewumi (1712-Steve)
   */
  getAllCurriculums() {
    this.curriculumService.getAllCurriculums().subscribe(
      data => {
        this.allCurriculums = data;
        this.getCurriculumNames();
        this.getUniqueCurrNames();
        this.getCurriculumVersions();
        this.getUniqCurrVersions();
      }
    );
  }

  viewSchedule(curId: number) {
    this.curriculumService.getSchedualeByCurriculumId(curId).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * makes the curriculum object, passed as a parameter, the
   * master version of its curriculum type.
   * @author Carter Taylor, Olayinka Ewumi (1712-Steve)
   * @param currVersion - curriculum object selected from view.
   * @param typeIndex - index of curriculum type, allows for faster navigation
   *    through uniqCurrVersions 2D array.
   */
  makeMaster(currVersion, typeIndex: number) {
    for (let j = 0; j < this.uniqCurrVersions[typeIndex].length; j++) {
      if (this.uniqCurrVersions[typeIndex][j].isMaster === 1) {
        this.uniqCurrVersions[typeIndex][j].isMaster = 0;
      }
    }
    currVersion.isMaster = 1;
    console.log(currVersion);
    this.curriculumService.markCurriculumAsMaster(currVersion.curriculumId).subscribe(
    data => {
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

}
