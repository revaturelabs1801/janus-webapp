import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { EditBatchComponent } from './components/edit-batch/edit-batch.component';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
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
        path: 'editBatch',
        component: EditBatchComponent
      },
      {
        path: 'curriculum-view',
        component: MainCurriculumViewComponent
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
