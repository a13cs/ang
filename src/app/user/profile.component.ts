import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { 

  private firstName: FormControl;
  private lastName: FormControl;

  profileForm: FormGroup;

  constructor(
      private authService: AuthService, 
      private router: Router,
      @Inject(TOASTR_TOKEN) private toastr: Toastr
    ) {}

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
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(
        () => {
          this.toastr.success('Profile Saved')
          // this.router.navigate(['events'])
        })
    }
  }
  logout() {
    this.authService.logout().subscribe(
      () => {
        this.authService.currentUser = undefined;
        this.router.navigate['/user/login']
      })
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched
  }
       
}
