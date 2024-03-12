import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = 'admin@gmail.com';
  password: string = 'admin123';
  loginError: boolean = false;

  constructor(private router: Router) {}

  onLogin(): void {
    // Validate credentials (replace this with your actual authentication logic)
    if (this.email == 'admin@gmail.com' && this.password == 'admin123') {
      // Redirect to admin dashboard
      this.router.navigate(['/employee-list']);
    } else {
      // Display error message
      this.loginError = true;
    }
  }
}