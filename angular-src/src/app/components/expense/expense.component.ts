import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  addExpense: boolean;

  loadingExpense=false;

    constructor() { }
  newExpenseForm(){
    this.addExpense=true;
  }

  reloadExpense(){
    this.loadingExpense=true;
  }



  ngOnInit() {

    
  }

}
