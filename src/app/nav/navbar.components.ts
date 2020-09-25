import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventsService } from '../events';
import { $ } from 'protractor';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {

    searchTerm: string;
    foundSessions: ISession[];


    constructor(public authService: AuthService, private eventsService: EventsService) {

    }

    searchSessions(searchTerm) {
        this.eventsService.searchSessions(searchTerm || '').subscribe(
            sessions => {
                this.foundSessions = sessions;
                console.log(this.foundSessions)
            }
        )
    }

}