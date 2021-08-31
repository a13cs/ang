import {Component, OnInit} from "@angular/core";
import {EventService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
    `
  ]

})
export class EventDetailsComponent implements OnInit {

  event

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params['id'] as number
    console.log(id)
    this.event = this.eventService.getEvent(id)
  }

}
