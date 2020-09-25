import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { 
  EventsListComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventsService,
  // EventRouteActivator,
  EventResolver,
  EventsListResolver,
  SessionListComponent,
  DurationPipe,
  VoterService,
  LocationValidator
 } from './events/index';

import { TOASTR_TOKEN, Toastr, JQ_TOKEN , CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective} from './common/index';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.components';
import { appRoutes } from './routes';
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event.details/create.session.component';
import { UpvoteComponent } from './events/event.details/upvote.component';


// declare let toastr:Toastr
let toastr: Toastr = window['toastr'];
let jQuery = window['$']

@NgModule({
  declarations: [
    AppComponent, 
    EventsListComponent, 
    EventThumbnailComponent, 
    NavBarComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    DurationPipe,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    UserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventsService, EventResolver, EventsListResolver, AuthService, VoterService,
  {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
  {provide: TOASTR_TOKEN, useValue: toastr},
  {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return confirm('Unsaved event, really cancel?');
  }
  return true;
}
