import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { SessionService } from './services/session.service';
import { UsersService } from './services/users.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule
  ],
  declarations: [BamComponent, HomeComponent],
  providers: [
    SessionService,
    UsersService]
})
export class BamModule { }
