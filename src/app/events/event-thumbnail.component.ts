import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEvent} from "./shared/IEvent";
import {ToastrService} from "./common/toastr.service";

@Component({
  selector: 'app-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styles: [
    `
      span.pad-left {
        margin-left: 1em;
        /*padding-left: 1em;*/
      }

      .well div {
        color: #3b3939;
      }

      .thumbnail {
        border-radius: 15px;

        margin: 1em;
        padding: 1em;
        background-color: #d4d1ce;
        min-height: 300px;
      }

      .green {
        color: green !important;
      }
      .bold {
        font-weight: bold;
      }

    `
  ]

})
export class EventThumbnailComponent implements OnInit {

  title: string = 'title'

  @Input() event: IEvent;

  @Output() eventClick = new EventEmitter();
  private isEarlyStart: boolean;

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.title = this.event?.name || ''
    this.isEarlyStart = this.event?.time==='8:00 am';
  }

  handleClickMe() {
    console.log("Enrolled")
    this.eventClick.emit(this.event)
    // this.toastr.success(this.event.date ,this.event?.name)
  }

  getStartTimeClass() {
    // return { 'green':  this.isEarlyStart, bold: true}
    if (this.isEarlyStart) {
      return 'green bold'
      // return ['green','bold']
    }
    // return []
  }

  getStartTimeStyle() {
    if (this.isEarlyStart) {
        return {color: 'red', 'font-weight': 'bold'}
    }

  }
}
