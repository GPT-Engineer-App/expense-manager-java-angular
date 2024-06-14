import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.getExpenses();
  }

  getExpenses(): void {
    this.expenseService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
  }

  add(name: string, amount: number): void {
    name = name.trim();
    if (!name || !amount) { return; }
    this.expenseService.addExpense({ name, amount } as Expense)
      .subscribe(expense => {
        this.expenses.push(expense);
      });
  }

  delete(expense: Expense): void {
    this.expenseService.deleteExpense(expense.id).subscribe(() => {
      this.expenses = this.expenses.filter(e => e !== expense);
    });
  }
}