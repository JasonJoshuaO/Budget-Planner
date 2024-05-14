import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  //Income
  lastMonthsIncome = ['January: $1000', 'February: $1500', 'March: $2000'];
  currentMonthIncome = '$2500';

  //Expenses
  lastMonthsExpense = ['January: $800', 'February: $1000', 'March: $1000'];
  currentMonthExpense = '$1500';

  //Transactions
  todoTransactions = [
    {description: 'Do my Portfolio' },
    {description: 'Do Household Chores' },
    {description: 'Pay necessary Bills' },
    {description: 'Find a Girlfriend' }
  ];

  //Total
  totalCurrentMonthIncome = 2500;
  totalCurrentMonthExpense = 1500;
  constructor(public router: Router){ }
 
  onIncome(){
    this.router.navigate(['/budget-planner/income']);
  }

  onExpense(){
    this.router.navigate(['/budget-planner/expense']);
  }

  onTodo(){
    this.router.navigate(['/budget-planner/todo']);
  }

  //Calculations
  get currentMonthSavings(): number {
    return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
  }

}
