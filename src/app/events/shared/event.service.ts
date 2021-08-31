import {events} from "../event-data";
import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {IEvent} from "./IEvent";

@Injectable()
export class EventService {

  getEvents() : Observable<IEvent[]>{
    let subject = new Subject<IEvent[]>()
    setTimeout(
      () => {
        subject.next(events)
        subject.complete()
      },
      200
    )

    return subject;
  }

  getEvent(id: number) {
    return events.find(e => id === e.id)
  }

}
