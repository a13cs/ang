import { Routes } from '@angular/router'

import { 
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventsListResolver,
    EventResolver,
    // EventRouteActivator
} from './events/index';

import { Error404Component } from './errors/404.component';
import { CreateSessionComponent } from './events/event.details/create.session.component';


export const appRoutes: Routes = [
    {path: 'events/new', canDeactivate: ['canDeactivateCreateEvent'],component: CreateEventComponent},
    {path: 'events', resolve: {events: EventsListResolver}, component: EventsListComponent},
    {path: 'events/:id', resolve: {event: EventResolver}, component: EventDetailsComponent},
    // {path: 'events/:id', canActivate: [EventRouteActivator], component: EventDetailsComponent},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
];
