import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./private/private.module').then(m => m.PrivateModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./core/authentication/authentication.module').then(
        m => m.AuthenticationModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
