import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: './event.details.component.html',
    styles:[`
        .container {padding-left: 20px; padding-right: 20px;}
        .event-image { height: 100px;}
        a {cursor: pointer}
    `]
    
})
export class EventDetailsComponent implements OnInit {

    event: IEvent;
    addMode: boolean;

    filterBy: string = 'all';
    sortBy: string = 'name';

    constructor(private eventService: EventsService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data.forEach( 
            (data) => {
                this.event = data['event'];
                this.addMode = false;

            //     this.eventService.getEvent(+params['id']).subscribe(
            //         (event: IEvent) => {
            //             this.event = event;
            //             this.addMode = false
            //         })
            // })

        })
    }

    addSession(addMode?: boolean) {
        this.addMode = addMode ;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
        session.id = nextId + 1;

        this.event.sessions.push(session)

        this.eventService.saveEvent(this.event).subscribe( () => this.addMode = false)
    }

    cancelAddSession() {
        this.addMode = false
    }

}