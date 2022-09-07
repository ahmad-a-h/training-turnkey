import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuestionsServiceService } from '../../services/questions-service.service';
import { credentials } from 'src/app/user';
import { LoginCardService } from 'src/app/services/login-guard.service';

@Component({
  selector: 'app-ng-component',
  templateUrl: './ng-component.component.html',
  styleUrls: ['./ng-component.component.css']
})
export class NgComponentComponent implements OnInit {
  @Output() login: EventEmitter<credentials> = new EventEmitter();
  btnName='login'
  constructor(public router: Router,private questionsService:QuestionsServiceService,private guard:LoginCardService) { }

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
   this.questionsService.getLoginCredentials(this.username,this.pass)
   this.questionsService.login().subscribe((data:any) => {
     this.username = '';
     this.pass = '';
     if(data==true)
     {
        this.guard.getAuthenticated(data)
       this.router.navigate(['question'])
     }  
   })
   

   //console.log(this.username + "\n"+ this.username)
   
 }

}
