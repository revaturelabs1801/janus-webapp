import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { SessionService } from './services/session.service';
import { UsersService } from './services/users.service';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
import { CurriculumService } from './services/curriculum.service';
import { DragDropModule } from 'primeng/dragdrop';

@NgModule({
  imports: [
    DragDropModule,
    CommonModule,
    BamRoutingModule
  ],

  declarations: [BamComponent, HomeComponent, MainCurriculumViewComponent, TopicPoolComponent],
  providers: [SessionService, UsersService, CurriculumService]
})
export class BamModule { }
