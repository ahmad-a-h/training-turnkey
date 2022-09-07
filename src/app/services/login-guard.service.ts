import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionsServiceService } from './questions-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCardService implements CanActivate {
private authenticated:boolean
  constructor(private router: Router,private questionsService:QuestionsServiceService) { }
  getAuthenticated(isAuthenticated:boolean)
  {
    this.authenticated=isAuthenticated
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  { 
    if(this.authenticated==true)
    {

    // {this.router.navigate(['login'])
    
    return true
  }
  else this.router.navigate(['login'])
}
  
}
