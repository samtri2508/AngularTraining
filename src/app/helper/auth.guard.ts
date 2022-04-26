import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';

//import { SubscriberService } from '@app/services/subscriber.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate  {
    constructor(
        private router: Router
    ) {}
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = localStorage.getItem('user');
        //console.log(user);
        //return false;
        if (user) {
            // authorised so return true
            return true;
        }
        this.router.navigate(['/contact'], { queryParams: { returnUrl: state.url }});
        //account/login
        return false;
    }

}