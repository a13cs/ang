import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { 

  private firstName: FormControl;
  private lastName: FormControl;

  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*') ]); // Validators.minLength...
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(formValues) {
    console.log(formValues.firstName + ' ' + formValues.lastName)
    if(this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)

      this.router.navigate(['events'])
    }
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched
  }
       
}
