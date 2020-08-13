import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';


@Component({
    selector: 'event-thumbnail',
    templateUrl: './event.thumbnail.component.html' ,
    styleUrls: ['./event.thumbnail.component.css']
})
export class EventThumbnailComponent {

    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();

    someProperty: any= 'xx';

    handleClickMe() {
      this.eventClick.emit(this.event.name);

    }

    logFoo() {
      console.log('foo') 
    }

    getStartTimeClass() {
      return {green: this.event?.time === '8:00 am', bold: this.event?.time === '8:00 am'};
    } 

    getStartTimeStyle() {
      if (this.event && this.event.time === '8:00 am') {
        return {color: 'green', 'font-weight' : 'bold'}
      }
      return {}
    }

} 