import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '/home', component: HomeComponent },
    { path: '/expense', component: ExpenseComponent },
    { path: '/budget', component: BudgetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
