import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckStatusComponent } from './check-status.component';

const routes: Routes = [{ path: '', component: CheckStatusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckStatusRoutingModule { }
