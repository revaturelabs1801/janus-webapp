import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumWeekComponent } from './components/curriculum-editor/curriculum-week/curriculum-week.component';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
  declarations: [BamComponent, HomeComponent, CurriculumWeekComponent]
})
export class BamModule { }
