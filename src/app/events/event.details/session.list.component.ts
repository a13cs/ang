import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession, EventsService, IEvent } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session.list.component.html'
})
export class SessionListComponent implements OnChanges {
    
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number

    visibleSessions: ISession[] = [];

    constructor(public auth: AuthService, private voterService: VoterService  /*, private eventService: EventsService */) {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortSessions(this.sortBy)
        }
    }

    filterSessions(filterBy: string) {
        if(filterBy==='all'){
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterBy)
        }
    }

    sortByVotesDesc: (s1: ISession, s2: ISession) => number = (s1,s2) => s2['voters'].length - s1['voters'].length
    sortByNAmeAsc:   (s1: ISession, s2: ISession) => number = (s1,s2) => {
                            if(s1['name']  >  s2['name']) return 1
                            if(s1['name'] === s2['name']) return 0
                            else return -1
                        }

    sortSessions(sortBy: string) {
        console.log(sortBy)
        if(sortBy==='voters')
            this.visibleSessions = this.visibleSessions.sort( this.sortByVotesDesc )

        if(sortBy==='name')
            this.visibleSessions = this.visibleSessions.sort( this.sortByNAmeAsc)
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName)
        } else {
            // let ev: IEvent;
            // this.eventService.getEvent(+(<any>session).eventId).subscribe(
            //     (event) => ev = event
            // )
            // ev.sessions.push(session)
            // this.eventService.saveEvent(ev)
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName)
        }
        if(this.sortBy === 'votes') {
            this.visibleSessions.sort(this.sortByVotesDesc);
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }

}