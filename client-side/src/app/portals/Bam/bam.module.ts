import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule} from 'primeng/accordion';
import { DragDropModule} from 'primeng/dragdrop';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
import { CurriculumService } from './services/curriculum.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule,
    AccordionModule,
    DragDropModule
  ],
  declarations: [BamComponent, HomeComponent, MainCurriculumViewComponent, TopicPoolComponent],
  providers: [CurriculumService]
})
export class BamModule { }
