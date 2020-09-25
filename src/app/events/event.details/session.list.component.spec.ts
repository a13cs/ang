import { SessionListComponent } from "./session.list.component"
import { ISession } from '../shared';


describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach( () => {
        component = new SessionListComponent(mockAuthService, mockVoterService)
    })

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]>[
                {name:'session1', level: 'intermediate'},
                {name:'session2', level: 'beginner'},
                {name:'session3', level: 'intermediate'},
            ]
            component.filterBy = 'intermediate'
            component.sortBy = 'name'

            component.ngOnChanges({})

            expect(component.visibleSessions.length).toBe(2)
        })

        it('should sort the sessions correctly', () => {
            component.sessions = <ISession[]>[
                {name:'session1', level: 'intermediate'},
                {name:'session3', level: 'beginner'},
                {name:'session2', level: 'intermediate'},
            ]
            component.filterBy = 'all'
            component.sortBy = 'name'

            component.ngOnChanges({})

            expect(component.visibleSessions[+component.visibleSessions.length-1].name).toBe('session3')
        })
    })
})