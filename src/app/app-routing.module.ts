import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./routes/customer/customer.module').then((m) => m.CustomerModule),
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
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./routes/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
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
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
