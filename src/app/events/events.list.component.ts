import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';


@Component({
    templateUrl: './events.list.component.html',
    styles: [`
    .well h3 {color: blue}
    .boxx {background-color: lavender}
    `]
})
export class EventsListComponent implements OnInit {

    events: IEvent[];

    constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
    }

}