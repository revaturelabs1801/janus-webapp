import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumWeekComponent } from './components/curriculum-editor/curriculum-week/curriculum-week.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
import { CourseStructureComponent } from './components/curriculum-editor/course-structure/course-structure.component';
import { CurriculumService } from './services/curriculum.service';
import { DragDropModule } from 'primeng/dragdrop';
import { DragNDropDirective } from './drag-n-drop.directive';

@NgModule({
  imports: [
    DragDropModule,
    CommonModule,
    BamRoutingModule
  ],
  declarations: [ BamComponent, HomeComponent, CurriculumWeekComponent,
    MainCurriculumViewComponent, TopicPoolComponent, CourseStructureComponent, DragNDropDirective],
  providers: [ CurriculumService, CurriculumWeekComponent, MainCurriculumViewComponent, CourseStructureComponent ]

})
export class BamModule { }
