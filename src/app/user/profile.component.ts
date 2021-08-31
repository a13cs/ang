import {Component, OnInit} from '@angular/core'
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  // template: `
  //   <h1>Edit Your Profile</h1>
  //   <hr>
  //   <div class="col-md-6">
  //     <h3>[Edit profile form will go here]</h3>
  //     <br />
  //     <br />
  //     <button type="submit" class="btn btn-primary">Save</button>
  //     <button type="button" class="btn btn-default">Cancel</button>
  //   </div>
  // `,
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    let firstName= new FormControl(this.authService.currentUser.firstName, Validators.required)
    let lastName= new FormControl(this.authService.currentUser.firstName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }


  cancel() {
    this.router.navigate(['events'])
  }
  saveProfile(value: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(value['firstName'], value['lastName'])
    }
    this.router.navigate(['events'])
  }

}
