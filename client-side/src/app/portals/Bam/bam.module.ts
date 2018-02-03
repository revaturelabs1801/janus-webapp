import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
  declarations: [BamComponent, HomeComponent, MainCurriculumViewComponent]
})
export class BamModule { }
