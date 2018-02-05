import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './services/pipe.filter';
import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAssociatesComponent } from './components/view-associates/view-associates.component';


@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
  declarations: [BamComponent, HomeComponent, ViewAssociatesComponent, FilterPipe]
})
export class BamModule { }
