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
answers=[]
answersId=[]
count:number=1
isRight:number
@Input() answer

question:questions[]=[]
  constructor(public router: Router,private http:HttpClient,private questionsService: QuestionsServiceService) { }

  ngOnInit() {
    this.initReq(this.count)
  }
  public initReq(count)
  {
      this.questionsService.getfirstQuestion(count).subscribe((data:any) => {
      this.random=data["question"]
      this.answers=data["answerText"]
      this.answersId=data["answerId"]
      //console.log( this.answersId)
      // console.log(this.arr)
    })
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
      this.answers=data["answerText"]
      this.isRight=data["isRight"]
      this.display="Choose Difficulty"
    })

    return
  }

  getQuestionDifficulty()
  {
      this.questionsService.difficultyQuestion().subscribe((data:any) => {
      this.random=data["question"]
      this.answers=data["answerText"]
      this.answersId=data["answerId"]
    })
  }
  userCLick(i)
{

  //this.questionsService.checkId(this.answersId[i])

  //console.log(i)
  //console.log(this.answersId[i])
  this.questionsService.checkId(this.answersId[i]).subscribe((data:any)=>
  {
    if(data==true)
    {
      this.count++
      console.log(this.count)
      this.questionsService.setDifficulty(i)
      this.getQuestionDifficulty()
      alert("Your Answer is True going to level"+this.count)
    }
    if(this.count==4)
    {
    alert("Congratulation You've Completed the Game")
    return;
    }
    if(data==false)
    {
      alert("Your Answe is Incorrect, Try Again!!")
    }
  })
  //this.questionsService.getUserAnswer=this.answer

}
userAnswer()
{

}







}
