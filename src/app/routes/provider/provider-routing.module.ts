import { LayoutComponent } from './../../layout/layout.component';
import { ProfilePageModule } from './profile/profile.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../provider/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProviderRoutingModule {}
