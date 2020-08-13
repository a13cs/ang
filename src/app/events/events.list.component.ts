import { Component, OnInit } from '@angular/core';
import { Data } from '../data/event.data';
import { EventsService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
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

    title = 'app';
    events: IEvent[];

    constructor(
        private eventsService: EventsService, 
        private toastrService: ToastrService, 
        private route: ActivatedRoute) {}
    
    ngOnInit(): void {
        this.events = this.route.snapshot.data['events'];
        // this.eventsService.getEvents().subscribe(
        //     data => this.events = data
        // );
    }
    
    handleThumbnailClick(eventName: string) {
        this.toastrService.success('',eventName)
    }

    handleEventClicked(event: string) {
        console.log(event);
    }

}