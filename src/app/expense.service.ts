import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expensesUrl = 'http://localhost:8080/api/expenses';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET expenses from the server */
  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expensesUrl)
      .pipe(
        catchError(this.handleError<Expense[]>('getExpenses', []))
      );
  }

  /** POST: add a new expense to the server */
  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.expensesUrl, expense, this.httpOptions).pipe(
      catchError(this.handleError<Expense>('addExpense'))
    );
  }

  /** DELETE: delete the expense from the server */
  deleteExpense(id: number): Observable<Expense> {
    const url = `${this.expensesUrl}/${id}`;

    return this.http.delete<Expense>(url, this.httpOptions).pipe(
      catchError(this.handleError<Expense>('deleteExpense'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}