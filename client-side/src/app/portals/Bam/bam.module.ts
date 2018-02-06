import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './services/pipe.filter';
import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAssociatesComponent } from './components/view-associates/view-associates.component';
import { SortPipe } from './services/pipe.sort';
import { UsersService } from './services/users.service';


@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
  declarations: [BamComponent,
                HomeComponent,
                FilterPipe,
                SortPipe,
                ViewAssociatesComponent],
  providers: [
    UsersService
  ]
})
export class BamModule { }
