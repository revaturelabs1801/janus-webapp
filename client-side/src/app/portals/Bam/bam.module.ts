import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './services/pipe.filter';
import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAssociatesComponent } from './components/view-associates/view-associates.component';
import { SortPipe } from './services/pipe.sort';
import { UsersService } from './services/users.service';
import { SessionService } from './services/session.service';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
import { CurriculumService } from './services/curriculum.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],

  declarations: [
    BamComponent,
    HomeComponent,
    MainCurriculumViewComponent,
    TopicPoolComponent,
    FilterPipe,
    SortPipe,
    ViewAssociatesComponent],
  providers: [SessionService, UsersService, CurriculumService]
})
export class BamModule { }
