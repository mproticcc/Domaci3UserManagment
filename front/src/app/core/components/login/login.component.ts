import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackService } from '../../service/back.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;
  service: BackService;
  message: string;
  constructor(service: BackService, private router: Router) {
    this.email = '';
    this.password = '';
    this.service = service;
    this.message = '';
  }
  login() {
    this.service.login(this).subscribe(
      (val: any) => {
        localStorage.setItem('token', val.token);
        localStorage.setItem('email', this.email);
        this.router.navigate(['/users']);
      },
      (error: any) => {
        this.message = 'Invalid credentials';
      }
    );
  }
}
