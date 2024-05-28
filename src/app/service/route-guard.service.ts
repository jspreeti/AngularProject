import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult,  Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private authenticateService : AuthenticationService, 
    private router:Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if(this.authenticateService.isUserLoggedIn()) 
       return true;

    this.router.navigate(['login']);
  
   return false;
  }

}
