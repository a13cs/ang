import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent, EventsService } from './shared';

@Component({
    templateUrl:'./create.event.component.html',
    styleUrls: ['./create.event.component.css']
})
export class CreateEventComponent implements OnInit{

    newEvent: IEvent;
    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventsService) {}
    
    ngOnInit(): void {
        this.newEvent = {
            id : 100,    
            sessions: [],
            name : 'Ng Spectacular',
            date : new Date('9/9/2020'),
            time : '10am',
            price: 800,
            location: {
                address: 'happy st', 
                city: 'Felicity',
                country: 'Happystan'
            },
            onlineUrl: 'https://happystan.org',
            imageUrl: 'http://ngSpectacular.com/l.png'
        }    
    }

    cancel() {
        this.router.navigate(['/events'])
    }

    saveEvent(newEventFormValues)  {
        console.log(newEventFormValues)

        this.eventService.saveEvent(newEventFormValues).subscribe( () => {
            this.isDirty = false;
            this.router.navigate(['/events'])
        })
    }

}