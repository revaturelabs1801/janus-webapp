import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';

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
