import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NgComponentComponent } from '../ng-component/ng-component.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router){ }

  ngOnInit(): void {
  }
  run(){
    this.router.navigate(['question'])
  }
  create()
  {
    this.router.navigate(['createquestion'])
  }
  check()
  {
    this.router.navigate(['checkallquestion'])
  }
 
}
