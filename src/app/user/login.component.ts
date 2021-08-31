import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
 templateUrl: './login.component.html',
  styles: [
    `
        em {
          color: #bd362f;
        }
    `
  ]
})
export class LoginComponent {
  userName: any;
  password: any;
  mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  login(loginForm: NgForm) {
    console.log(loginForm)
    this.authService.loginUser(loginForm.form.value['userName'], loginForm.form.value['password'])
    if (this.authService.isAuthenticated()) this.router.navigate(['/events'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }

}
