import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAssociatesComponent } from './components/view-associates/view-associates.component';
import { EditBatchComponent } from './components/edit-batch/edit-batch.component';
import { MyBatchesComponent } from './components/batches/my-batches/my-batches.component';
import { AllBatchesComponent } from './components/batches/all-batches/all-batches.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AddSubtopicComponent } from './components/calendar-view/add-subtopic/add-subtopic.component';

const routes: Routes = [
  {
    path: '',
    component: BamComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {

        path: 'view-associates',
        component: ViewAssociatesComponent
      },
      {
        path: 'mybatches',
        component: MyBatchesComponent
      },
      {
        path: 'allbatches',
        component: AllBatchesComponent
      },
      {
        path: 'editBatch',
        component: EditBatchComponent
      },
      {
        path: 'curriculum-view',
        component: MainCurriculumViewComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'add-subtopic',
        component: AddSubtopicComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/Bam/home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BamRoutingModule { }
