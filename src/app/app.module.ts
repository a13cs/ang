import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { 
  EventsListComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventsService,
  EventRouteActivator,
  EventsListResolver,
  SessionListComponent
 } from './events/index';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.components';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { UserModule } from './user/user.module';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event.details/create.session.component';

@NgModule({
  declarations: [
    AppComponent, 
    EventsListComponent, 
    EventThumbnailComponent, 
    NavBarComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventsService, ToastrService, EventRouteActivator, EventsListResolver, AuthService,
  {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
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
