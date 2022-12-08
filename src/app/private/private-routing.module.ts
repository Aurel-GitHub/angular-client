import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget/budget.component';
import { ExpenseComponent } from './expense/expense.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
    { path: '', component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'expense', component: ExpenseComponent },
            { path: 'budget', component: BudgetComponent },
            { path: 'profil', component: ProfilComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
