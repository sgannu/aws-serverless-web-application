import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list.component';

const componentRoutes: Routes = [
  { path: '', redirectTo: '/foods', pathMatch: 'full' },

  { path: 'foods', component: ListComponent }
];

const appRoutes: Routes = [
  ...componentRoutes
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
