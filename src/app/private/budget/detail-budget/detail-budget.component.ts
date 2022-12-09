import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-budget',
  templateUrl: './detail-budget.component.html',
  styleUrls: ['./detail-budget.component.scss'],
})
export class DetailBudgetComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  budgetID!: string;
  ngOnInit() {
    this.getBudgetID();
  }

  getBudgetID() {
    this.activatedRoute.params.subscribe({
      error: (error: Error) => console.error('error', error),
      next: (response: Params) => {
        const { uid } = response;
        this.budgetID = uid;
      },
    });
  }
}
