import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { credentials } from 'src/app/user';

@Component({
  selector: 'app-ng-component',
  templateUrl: './ng-component.component.html',
  styleUrls: ['./ng-component.component.css']
})
export class NgComponentComponent implements OnInit {
  @Output() login: EventEmitter<credentials> = new EventEmitter();
  btnName='login'
  constructor(public router: Router) { }

  ngOnInit(): void {}
  
   username:string
   pass: string
   checklogin()
  {
    if (!this.username||!this.pass) {
      alert('Please input  both username and passwords');
      return;
    }
    else
    //api send data
    console.log(this.username + "\n"+ this.username)
    this.username = '';
    this.pass = '';
    this.router.navigate(['question'])
  }

}
