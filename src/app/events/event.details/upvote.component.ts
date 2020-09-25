import { Component, Input, Output, EventEmitter } from "@angular/core";
import { style } from '@angular/animations';

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val){
        this.iconColor = val ? 'red' : 'black';
    }
    iconColor: string;
    @Output() vote = new EventEmitter()

    onClick() {
        this.vote.emit({})
    }

}