import { VoterService } from "./voter.service"
import { ISession } from '../shared';
import { of } from 'rxjs/internal/observable/of';

describe('VoterService', () => {
    let voterService;
    let mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']) 
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {

        it('should remove voter from voters list', () => {
            var session = {voters: ["joe", "jim"], id: 6}
            mockHttp.delete.and.returnValue( of(false) )

            voterService.deleteVoter(1, <ISession>session, 'jim')
            
            expect(session.voters.length).toBe(1)
            expect(session.voters[0]).toBe('joe')
        })

        it('should call delete with the right URL', () => {
            var session = {voters: ["joe", "jim"], id: 6}
            mockHttp.delete.and.returnValue( of(false) )

            let eventId = +1;
            let voterName = 'jim'
            voterService.deleteVoter(eventId, <ISession>session, voterName)
            
            expect(mockHttp.delete).toHaveBeenCalledWith(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
        })
    })

    describe('addVoter', () => {

        it('should call post with the right URL', () => {
            var session = {voters: ["joe"], id: 6}
            mockHttp.post.and.returnValue( of(false) )

            let eventId = +1;
            let voterName = 'jim'
            voterService.addVoter(eventId, <ISession>session, voterName)
            
            expect(mockHttp.post).toHaveBeenCalledWith(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`, {}, jasmine.any(Object))
            expect(session.voters.length).toBe(2)
        })

    })



})