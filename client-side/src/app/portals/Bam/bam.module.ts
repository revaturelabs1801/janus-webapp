import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumWeekComponent } from './components/curriculum-editor/curriculum-week/curriculum-week.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
  declarations: [BamComponent, HomeComponent, CurriculumWeekComponent, MainCurriculumViewComponent, TopicPoolComponent]

})
export class BamModule { }
