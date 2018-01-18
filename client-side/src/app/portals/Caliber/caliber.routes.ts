import { Routes } from '@angular/router';

// components
import { CaliberComponent } from './caliber.component';
import { HomeComponent } from './components/home/home.component';
import { AssessComponent } from './components/assess/assess.component';
import { ManageComponent } from './components/manage/manage.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CategoriesComponent } from './components/settings/categories/categories.component';
import { LocationsComponent } from './components/settings/locations/locations.component';
import { TrainersComponent } from './components/settings/trainers/trainers.component';
import { DeactivateTrainerComponent } from './components/settings/trainers/deactivatetrainer/deactivatetrainer.component';
import { QualityComponent } from './components/quality/quality.component';
import { PanelComponent } from './components/panel/panel/panel.component';
import { TrainerProfilesComponent } from './components/settings/trainer-profile/trainer-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: CaliberComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'manage',
        component: ManageComponent
      },
      {
        path: 'assess',
        component: AssessComponent,
      },
      {
        path: 'quality',
        component: QualityComponent
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'panel',
        component: PanelComponent
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: 'categories',
            component: CategoriesComponent
          },
          {
            path: 'locations',
            component: LocationsComponent
          },
          {
            path: 'trainers',
            component: TrainersComponent
          },
          {
            path: 'trainer-profile',
            component: TrainerProfilesComponent,
          }
        ]
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/Caliber/home'
      }
    ]
  }
];
