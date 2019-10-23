import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
  
})

export class ViewComponent implements OnInit {

expense:Object;
total: Number;


  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
// expense detail of login user 
    this.authService.getView().subscribe(view => {
     const addition = this.expense=view.expenses;
// total expense of login user
      let total = addition.reduce((sum, item) => sum + item.amount, 0);
      this.total = total;

      });
   
      

  
      
    } 

 
}

