import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { questions } from 'src/app/Questions';
import { QuestionsServiceService } from '../../services/questions-service.service';


@Component({
  selector: 'app-quesitons-view',
  templateUrl: './quesitons-view.component.html',
  styleUrls: ['./quesitons-view.component.css']
})
export class QuesitonsViewComponent implements OnInit {
btnName="submit"
btncreate="create a question"
display = "Choose Difficulty"
random:string
answ:string
arr=[]
isRight:number
@Input() answer

 question:questions[]=[]
  constructor(public router: Router,private http:HttpClient,private questionsService: QuestionsServiceService) { }

  ngOnInit() {
    this.questionsService.getRandomQuestion().subscribe((data:any) => {
      this.random=data["question"]
      this.arr=data["answerText"]
      // console.log(this.arr)
      
      
    }
    )
  } 

  public dynamicnumber(e)
  {
      this.display = e
      this.questionsService.setDifficulty(e)
      this.getQuestionDifficulty()
     
  }
 
  createQuestion()
  {
   
    this.router.navigate(['createquestion'])
  }


  getRandom()
  { 
    this.questionsService.getRandomQuestion().subscribe((data:any) => {
      this.random=data["question"]
      this.arr=data["answerText"]
      this.isRight=data["isRight"]
      this.display="Choose Difficulty"
    })
    return 
  }

  getQuestionDifficulty()
  {
    this.questionsService.difficultyQuestion().subscribe((data:any) => {
      this.random=data["question"]
     })
  }
  userCLick(a)
 {
  console.log(a)
  this.questionsService.getUserAnswer=this.answer

 }
 userAnswer()
 {

 }

 
  

  
    

}
