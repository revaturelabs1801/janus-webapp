import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { BatchProgressBarComponent } from './components/dashboard/batch-progress-bar/batch-progress-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingSpinnerComponent } from './components/dashboard/ui/loading-spinner/loading-spinner.component';
import { BatchService } from './services/batch.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
  declarations: [BamComponent, HomeComponent, BatchProgressBarComponent, LoadingSpinnerComponent],
  providers: [BatchService]
})
export class BamModule { }
