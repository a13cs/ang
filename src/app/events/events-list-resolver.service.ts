import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventsService } from './shared/event.service';

import { map } from 'rxjs/operators';

@Injectable()
export class EventsListResolver implements Resolve<any> {
    
    constructor(private eventsService: EventsService) {}

    resolve() {
        return this.eventsService.getEvents().pipe(
            map( events => events)
        )
    }
}