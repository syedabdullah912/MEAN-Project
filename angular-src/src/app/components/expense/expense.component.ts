import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  amount:Number;
  user:Object;
  category:String;
  description:String;
  paymentMethod:string;  
  
    constructor(
      private validateService: ValidateService, 
      private flashMessage:FlashMessagesService,
      private authService:AuthService,
      private router: Router
      ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    
    });
  }

  onExpenseSubmit(){
    const expense={
      amount:this.amount,
      user:this.user,
      category:this.category,
      description:this.description,
      paymentMethod:this.paymentMethod
    }

      this.authService.addExpense(expense).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Successfully Added', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/expense']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/expense']);
      }
    });
    this.amount=null;
    this.category="";
    this.description="";
    this.paymentMethod="";
 

  }

}