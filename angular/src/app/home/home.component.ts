import { Component } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
 
})
export class HomeComponent {
  title = '';
   constructor(
    private router: Router){

    }
    goToEmployeeList(){
      this.router.navigate(['/create-employee']);
      this.router.navigate(['/employee-list']);
      
    }
   }


