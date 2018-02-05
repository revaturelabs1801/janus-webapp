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
    // calls the function that calls all other functions
    this.getAllCurriculums();
  }

  // get all curriculum names (including duplicates)
  getCurriculumNames() {
    for (let i = 0; i < this.allCurriculums.length; i++) {
      this.allCurriculumNames.push(this.allCurriculums[i].curriculumName);
    }
  }

  // filters out all duplicate curriculum names
  getUniqueCurrNames() {
    this.uniqCurrNames = this.allCurriculumNames.filter(this.onlyUnique);
  }

  // get all versions of a curriculum (including duplicates)
  getCurriculumVersions() {
    // loop through each curriculum type
    for (let i = 0; i < this.uniqCurrNames.length; i++) {
      // loops through all curriculums (including duplicates), and once the filter finds a match to
      // the current unique curriculum name, we add it back into all curriculums while ignoring
      // the rest. This array is then pushed into allCurrVersions.
      this.allCurrVersions.push(this.allCurriculums.filter(e => this.uniqCurrNames[i] === e.curriculumName));
      // once iteration is complete, the process repeats for the next curriculum type
    }
    // once for loop is complete, allCurrVersions is an array of curriculum arrays containing all versions,
    // including duplicate versions
  }

  // now that we have our array of nested curriculum arrays, we want to filter all duplicate versions
  // for each of those nested arrays
  getUniqCurrVersions() {
    // this is a temp array that will contain all unique versions of a specific curriculum type for
    // each iteration
    let currs: Curriculum[] = [];

    // loops through all curriculum grouped types
    for (let i = 0; i < this.allCurrVersions.length; i++) {
      let version = 1;
      // sets our version variable equal to the max version number of the
      // current curriculum grouped types
      this.allCurrVersions[i].forEach(e => {
        if (e.curriculumVersion > version) {
          version = e.curriculumVersion;
        }
      });
      // loops through all elements within the current grouped type
      for (let j = 0; j < this.allCurrVersions[i].length; j++) {
        // grabs the first instance of a curriculum object if its version is equal to
        // the current value of our version variable and then pushes it
        // into our temp currs array
        if (this.allCurrVersions[i][j].curriculumVersion === version) {
          currs.push(this.allCurrVersions[i][j]);
          version--;
          if (version !== 0) {
            // restart loop if version is not yet at 0
            j = -1;
          }
        } else if (j === this.allCurrVersions[i].length - 1 && version !== 0) {
          version--;
          // restart loop if version is not yet at 0
          j = -1;
        }
      }
      // once our version variable hits 0, inner loop is complete and our temp
      // currs array is pushed into an array of unique curriculum versions.
      // Then  we clear our temp array and start the next iteration of our outer loop to
      // repeat the process for the next curriculum grouped type.
      this.uniqCurrVersions.push(currs);
      currs = [];
    }

  }

  // automagical function used in conjunction with the filter function to return only unique values
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  // calls everything
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

  crownMe(currVersion: Curriculum, i) {
    console.log('crown me! ' + i);
    for (let j = 0; j < this.uniqCurrVersions[i].length; j++) {
      console.log('j= ' + j);
      if (this.uniqCurrVersions[i][j].isMaster === 1) {
        this.uniqCurrVersions[i][j].isMaster = 0;
      }
    }
    
    currVersion.isMaster = 1;
    this.curriculumService.markCurriculumAsMaster(i);
  }


  // logic for CSS. Currently selected curriculum version
  shiftSelectedCurriculum() {

  }
}
