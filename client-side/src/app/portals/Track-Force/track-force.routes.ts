import { Routes } from '@angular/router';
import { TrackForceComponent } from './track-force.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientMappedComponent } from './components/client-mapped/client-mapped.component';
import { AssociateListComponent } from './components/associate-list/associate-list.component';
import { BatchListComponent } from './components/batch-list/batch-list.component';
import { BatchDetailsComponent } from './components/batch-details/batch-details.component';
import { FormComponent } from './components/form-component/form.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { RootComponent } from './components/root/root.component';
import { SkillsetComponent } from './components/skillset/skillset.component';
import { AssociateViewComponent } from './components/associate-view/associate-view.component';

export const routes: Routes = [
  {
    path: '',
    component: TrackForceComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/TrackForce/home'
      }
    ]
  }
];
