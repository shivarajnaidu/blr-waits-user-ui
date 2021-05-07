import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'check-status',
        loadChildren: () => import('./pages/check-status/check-status.module').then(m => m.CheckStatusModule)
      },
      {
        path: 'raise-request',
        loadChildren: () => import('./pages/raise-request/raise-request.module').then(m => m.RaiseRequestModule)
      },
    ]
  },
  { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
