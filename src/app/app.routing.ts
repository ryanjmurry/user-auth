import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'private',
    canActivate: [AuthGuard],
    component: PrivateComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);