import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-veiw',
  templateUrl: './veiw.component.html',
  styleUrls: ['./veiw.component.css']
  
})

export class VeiwComponent implements OnInit {

expense:Object;
total: Number;


  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
// expense detail of login user 
    this.authService.getVeiw().subscribe(veiw => {
     const qwe = this.expense=veiw.expenses;
// total expense of login user
      let total = qwe.reduce((sum, item) => sum + item.amount, 0);
      this.total = total;

      });
   
      

  
      
    } 

 
}

