import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-type',
  },
  {
    path: 'customer',
    component: LayoutComponent,
    loadChildren: () =>
      import('./routes/customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'user-type',
    loadChildren: () =>
      import('./routes/home/user-type/user-type.module').then(
        (m) => m.UserTypePageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./routes/home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: 'registration',
    loadChildren: () =>
      import('./routes/users/registration/registration.module').then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./routes/users/verify-email/verify-email.module').then(
        (m) => m.VerifyEmailPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./routes/users/login/login.module').then(
        (m) => m.LoginPageModule
      ),
    ...canActivate(redirectLoggedInToDashboard),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./routes/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./routes/home/home.module').then((m) => m.HomePageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    LayoutModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
