import {Component, OnInit} from '@angular/core';
import {IEvent} from "./shared/IEvent";
import {EventService} from "./shared/event.service";
import {ToastrService} from "./common/toastr.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  // selector: 'app-events-list',
  templateUrl: 'events-list.component.html',
  styles: [ `
    h1 {
      padding: 1em;
    }
  `
  ]
})
export class EventsListComponent implements OnInit {

  eventsList : IEvent[] = []

  constructor(private eventService: EventService,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.eventsList = this.route.snapshot.data['events']

    this.eventService.getEvents().subscribe(
      data => this.eventsList = <IEvent[]>data
    );
  }

  handleEventClicked($event: IEvent) {
    this.toastr.success($event.date.toLocaleString(),$event.name)
    console.log('Clicked: ' + JSON.stringify($event))

  }

  handleThumbnailClicked(event: IEvent) {
    // this.router.navigate(['events', event.id])
  }
}
