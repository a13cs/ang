import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventsService } from './shared/event.service';


@Injectable()
export class EventResolver implements Resolve<any> {
    
    constructor(private eventsService: EventsService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventsService.getEvent(route.params['id']) 
        // .pipe(
        //     map( events => events)
        // )
    }
}