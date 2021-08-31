import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ModalModule} from "ngx-bootstrap/modal";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarComponent} from './nav/navbar.component';
import {appRoutes} from "./routes";
import {RouterModule} from "@angular/router";
import {Error404Component} from "./errors/error-404.component";
import {UserModule} from "./user/user.module";

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator,
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
} from './events'
import {ToastrService} from "./events/common/toastr.service";
import {AuthService} from "./user/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    BrowserAnimationsModule,
    UserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    EventService, ToastrService, EventRouteActivator,EventListResolver, AuthService,
    {
      provide: 'canDeactivateCreateComponent', useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component?: CreateEventComponent) {
  if (component.isDirty) {
     return window.confirm("Leave page?")
  }
  return true
}
