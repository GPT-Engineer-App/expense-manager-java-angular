import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  expense: Expense = { id: null, name: '', amount: null };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.expenseService.getExpense(+id).subscribe((data: Expense) => {
        this.expense = data;
      });
    }
  }

  saveExpense(): void {
    if (this.expense.id) {
      this.expenseService.updateExpense(this.expense.id, this.expense).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.expenseService.createExpense(this.expense).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}