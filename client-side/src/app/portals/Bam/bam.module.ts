import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { BatchProgressBarComponent } from './components/dashboard/batch-progress-bar/batch-progress-bar.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/dashboard/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { BatchService } from './services/batch.service';
import { LoadingSpinnerComponent } from './components/dashboard/ui/loading-spinner/loading-spinner.component';
import { ListService } from './services/dashboard/list.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule,
    FormsModule
  ],
  declarations: [BamComponent, HomeComponent, BatchProgressBarComponent, LoadingSpinnerComponent, WelcomeComponent],
  providers: [BatchService, ListService]
})
export class BamModule { }
