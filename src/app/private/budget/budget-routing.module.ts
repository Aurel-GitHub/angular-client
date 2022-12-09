import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBudgetComponent } from './detail-budget/detail-budget.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { BudgetComponent } from './budget.component';

const routes: Routes = [
  { path: '', component: BudgetComponent },
  { path: 'details/:uid', component: DetailBudgetComponent },
  { path: 'add', component: AddBudgetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetRoutingModule {}
