import {Routes} from "@angular/router";
import {Error404Component} from "./errors/error-404.component";
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
} from "./events";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateComponent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},

  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]
