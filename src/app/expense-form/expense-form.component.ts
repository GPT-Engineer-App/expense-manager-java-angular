import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  expense: Expense = { id: 0, name: '', amount: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.expenseService.getExpense(+id).subscribe(expense => this.expense = expense);
    }
  }

  saveExpense(): void {
    if (this.expense.id) {
      this.expenseService.updateExpense(this.expense).subscribe(() => this.router.navigate(['/expenses']));
    } else {
      this.expenseService.createExpense(this.expense).subscribe(() => this.router.navigate(['/expenses']));
    }
  }
}