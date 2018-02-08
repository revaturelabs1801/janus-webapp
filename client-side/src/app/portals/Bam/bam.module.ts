import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumWeekComponent } from './components/curriculum-editor/curriculum-week/curriculum-week.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
import { CourseStructureComponent } from './components/curriculum-editor/course-structure/course-structure.component';
import { CurriculumService } from './services/curriculum.service';
import { DragDropModule } from '../../../../node_modules/primeng/components/dragdrop/dragdrop';
import { DragNDropDirective } from './drag-n-drop.directive';
import { DragndropService } from './services/dragndrop.service';

@NgModule({
  imports: [
    DragDropModule,
    CommonModule,
    BamRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [ BamComponent, HomeComponent, CurriculumWeekComponent,
    MainCurriculumViewComponent, TopicPoolComponent, CourseStructureComponent, DragNDropDirective],
  providers: [ CurriculumService, CurriculumWeekComponent, DragndropService ]

})
export class BamModule { }
