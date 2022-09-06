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
random:string

 question:questions[]=[]
  constructor(public router: Router,private http:HttpClient,private questionsService: QuestionsServiceService) { }

  ngOnInit(): void {
    // this.questionsService.postRandomQuestion().subscribe(data=>{
    //   console.warn(data)
    // })
  } 

  public dynamicnumber(e)
  {
      this.display = e
      this.questionsService.setDifficulty(e)
      this.getQuestionDifficulty()
     
  }
  var()
  {
    this.display
  }
  createQuestion()
  {
   
    this.router.navigate(['createquestion'])
  }


  getRandom()
  {
    this.questionsService.getRandomQuestion().subscribe((data:any) => {
      this.random=data["question"]
      this.display="Choose Difficulty"
    }
    )
  }

  getQuestionDifficulty()
  {
    this.questionsService.difficultyQuestion().subscribe((data:any) => {
      this.random=data["question"]
     })
  }

 
  

  
    

}
