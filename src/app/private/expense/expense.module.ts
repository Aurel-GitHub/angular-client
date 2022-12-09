import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DetailExpenseComponent } from './detail-expense/detail-expense.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [AddExpenseComponent, DetailExpenseComponent],
  imports: [CommonModule, ExpenseRoutingModule, MaterialModule],
})
export class ExpenseModule {}
