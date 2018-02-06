import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumWeekComponent } from './components/curriculum-editor/curriculum-week/curriculum-week.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
<<<<<<< HEAD
import { CurriculumWeeksViewComponent } from './components/curriculum-weeks-view/curriculum-weeks-view.component';
import { CourseStructureComponent } from './components/curriculum-editor/course-structure/course-structure.component';
import { CurriculumService } from './services/curriculum.service';
import { DragNDropDirective } from './drag-n-drop.directive';
=======
import { CurriculumService } from './services/curriculum.service';
>>>>>>> 9ac7049c9a15413a6de7ce30f69ecfe90ed287c9

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
<<<<<<< HEAD
  declarations: [ BamComponent, HomeComponent, CurriculumWeekComponent,
    MainCurriculumViewComponent, TopicPoolComponent, CurriculumWeeksViewComponent, CourseStructureComponent, DragNDropDirective ],
  providers: [ CurriculumService, CurriculumWeekComponent ]

=======
  declarations: [BamComponent, HomeComponent, MainCurriculumViewComponent, TopicPoolComponent],
  providers: [CurriculumService]
>>>>>>> 9ac7049c9a15413a6de7ce30f69ecfe90ed287c9
})
export class BamModule { }
