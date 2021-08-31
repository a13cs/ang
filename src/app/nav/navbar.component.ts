import { Component, OnInit } from '@angular/core';
import {AuthService} from "../user/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
       margin-right: 100px;
      }
      li {
        padding: 1em;
      }

      form {
       padding-left: 100px;
      }

      @media (max-width: 900px) {
        #searchForm , .dropdown {
          display: none;
        }
      }

      li > a.active {
        color: orangered;
      }

    `
  ]
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
