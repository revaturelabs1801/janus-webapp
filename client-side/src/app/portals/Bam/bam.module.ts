import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { CourseStructureComponent } from './components/curriculum-editor/course-structure/course-structure.component';
import { CurriculumService } from './services/curriculum.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
  providers: [CurriculumService],
  declarations: [BamComponent, HomeComponent, MainCurriculumViewComponent, CourseStructureComponent]
})
export class BamModule { }
