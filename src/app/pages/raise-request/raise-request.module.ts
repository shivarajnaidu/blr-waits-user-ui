import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaiseRequestRoutingModule } from './raise-request-routing.module';
import { RaiseRequestComponent } from './raise-request.component';


@NgModule({
  declarations: [
    RaiseRequestComponent
  ],
  imports: [
    CommonModule,
    RaiseRequestRoutingModule
  ]
})
export class RaiseRequestModule { }
