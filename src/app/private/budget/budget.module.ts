import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBudgetComponent } from './add-budget/add-budget.component';
import { DetailBudgetComponent } from './detail-budget/detail-budget.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [AddBudgetComponent, DetailBudgetComponent],
  imports: [CommonModule, BudgetRoutingModule, MaterialModule],
})
export class BudgetModule {}
