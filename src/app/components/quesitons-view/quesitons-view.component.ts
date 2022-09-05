import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { questions } from 'src/app/Questions';
import { QuestionsServiceService } from 'src/app/questions-service.service';


@Component({
  selector: 'app-quesitons-view',
  templateUrl: './quesitons-view.component.html',
  styleUrls: ['./quesitons-view.component.css']
})
export class QuesitonsViewComponent implements OnInit {
btnName="submit"
btncreate="create a question"
display = "Choose Difficulty"
public question=[]
  constructor(public router: Router,private http:HttpClient,private questionsService: QuestionsServiceService) { }

  ngOnInit(): void {
    this.questionsService.getRandomQuestion().subscribe(data=>{
      console.warn(data)
    })
  }

  dynamicnumber(e)
  {
    this.display = e
  }
  createQuestion()
  {
   
    this.router.navigate(['createquestion'])
  }


  // my_getRandomQuestion():
  // {
      
  //   console.log<questions[]>(this.http.get('192.168.168.61:8081/quizapp/question'))
  //   console.log("test")
  // }
    

}
