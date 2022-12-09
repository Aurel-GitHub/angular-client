import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      {
        path: 'expense',
        loadChildren: () =>
          import('./expense/expense.module').then(m => m.ExpenseModule),
      },
      {
        path: 'budget',
        loadChildren: () =>
          import('./budget/budget.module').then(m => m.BudgetModule),
      },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
