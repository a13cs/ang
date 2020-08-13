import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession, restrictedWords } from '../shared';

@Component({
    selector: 'create-session',
    templateUrl: './create.session.template.html',
    styleUrls: ['./create.session.component.css']
})
export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
    
    name : FormControl
    presenter : FormControl
    duration : FormControl
    level : FormControl
    abstract : FormControl


    newSessionForm : FormGroup;

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);
    
        this.newSessionForm = new FormGroup({
            name : this.name,
            presenter : this.presenter,
            duration : this.duration,
            level : this.level,
            abstract : this.abstract,
        })
    }

    saveSession(sessionFormValue: any) {
        let session: ISession = {
            id: undefined,
            name: sessionFormValue.name,
            duration: +sessionFormValue.duration,
            level: sessionFormValue.level,
            presenter: sessionFormValue.presenter,
            abstract: sessionFormValue.abstract,
            voters: []
        }
        // console.log(session)
        this.saveNewSession.emit(session)
    }

    cancel() {
        this.cancelAddSession.emit()
    }

}