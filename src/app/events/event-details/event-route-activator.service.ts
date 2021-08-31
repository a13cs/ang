import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {EventService} from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {

  constructor(private router: Router, private eventService: EventService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +route.params['id']
    let event = this.eventService.getEvent(id);
    if(!event) {
      return this.router.navigate(['/404'])
    }
    return !!event
  }

}
