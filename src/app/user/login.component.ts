import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    em {float: right ; color: red; padding-left: 10px; }
  `]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  mouseoverLogin;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
    // this.router.navigate(['events'])

    console.log(formValues)
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
