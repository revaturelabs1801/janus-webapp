import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumWeekComponent } from './components/curriculum-editor/curriculum-week/curriculum-week.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
import { CurriculumWeeksViewComponent } from './components/curriculum-weeks-view/curriculum-weeks-view.component';
import { CurriculumService } from './services/curriculum.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
  declarations: [ BamComponent, HomeComponent, CurriculumWeekComponent,
    MainCurriculumViewComponent, TopicPoolComponent, CurriculumWeeksViewComponent ],
  providers: [ CurriculumService ]

})
export class BamModule { }
