import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/dashboard/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { BatchService } from './services/batch.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule,
    FormsModule
  ],
  declarations: [BamComponent, HomeComponent, WelcomeComponent],
  providers: [BatchService]
})
export class BamModule { }
