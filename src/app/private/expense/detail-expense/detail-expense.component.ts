import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-expense',
  templateUrl: './detail-expense.component.html',
  styleUrls: ['./detail-expense.component.scss'],
})
export class DetailExpenseComponent implements OnInit {
  expenseID!: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getExpenseID();
  }

  getExpenseID() {
    this.activatedRoute.params.subscribe({
      error: (error: Error) => console.error('error', error),
      next: (response: Params) => {
        const { uid } = response;
        this.expenseID = uid;
      },
    });
  }
}
