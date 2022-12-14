import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExpenseComponent } from './expense/expense.component';
import { BudgetComponent } from './budget/budget.component';
import { PrivateRoutingModule } from './private-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExpenseComponent,
    BudgetComponent,
    LayoutComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, MaterialModule, PrivateRoutingModule],
})
export class PrivateModule {}
