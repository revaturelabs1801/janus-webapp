import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { MyBatchesComponent } from './components/batches/my-batches/my-batches.component';
import { AllBatchesComponent } from './components/batches/all-batches/all-batches.component';

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
        path: 'myBatches',
        component: MyBatchesComponent
      },
      {
        path: 'batchesAll',
        component: AllBatchesComponent
      }
      // {
      //   path: '**',
      //   pathMatch: 'full',
      //   redirectTo: '/Bam/home'
      // }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BamRoutingModule { }
