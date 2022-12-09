import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailExpenseComponent } from './detail-expense/detail-expense.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ExpenseComponent } from './expense.component';

const routes: Routes = [
  { path: '', component: ExpenseComponent },
  { path: 'details/:uid', component: DetailExpenseComponent },
  { path: 'add', component: AddExpenseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseRoutingModule {}
