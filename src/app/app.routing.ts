import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard/dashboard.component';
import { StockDetailComponent } from './stockDetails/stockDetails.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'details/:symbol',
    component: StockDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
