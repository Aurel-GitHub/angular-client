import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExpenseComponent } from './expense/expense.component';
import { BudgetComponent } from './budget/budget.component';
import { PrivateRoutingModule } from './private-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from "./layout/layout.module";
import { HeaderModule } from './layout/header/header.module';


@NgModule({
    declarations: [
        HomeComponent,
        ExpenseComponent,
        BudgetComponent,
        LayoutComponent,
    ],
    imports: [
        CommonModule,
        PrivateRoutingModule,
        LayoutModule,
        HeaderModule
    ]
})
export class PrivateModule { }
