import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell.component';
import { RouterModule } from '@angular/router';
import { TopnavModule } from '../topnav/topnav.module';



@NgModule({
  declarations: [
    AppShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TopnavModule,
  ],
  exports: [
    AppShellComponent,
  ]
})
export class AppShellModule { }
