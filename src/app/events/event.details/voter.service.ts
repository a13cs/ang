import { Injectable } from '@angular/core';
import { ISession, IEvent, EventsService } from '../shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VoterService {

    constructor(private http: HttpClient) {

    }

    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter( v => v !== voterName)

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.delete(url).pipe(
            catchError(EventsService.handleError<IEvent[]>('deleteVoter', []))
        )
        .subscribe()
    }

    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName)

        const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) }
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`
        this.http.post(url, {}, options).pipe(
            catchError(EventsService.handleError<IEvent[]>('addVoter', []))
        )
        .subscribe()
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(v => v === voterName)
    }

}