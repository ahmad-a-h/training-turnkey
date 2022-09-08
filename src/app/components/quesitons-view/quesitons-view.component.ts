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
btncreate="create a question"
display:string |  number = "Choose Difficulty"
random:string
answers=[]
answersId=[]
count:number=0
isRight:number
userscore:number
score:number
@Input() answer

question:questions[]=[]
  constructor(public router: Router,private questionsService: QuestionsServiceService) { }

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

    this.questionsService.checkId(this.answersId[i]).subscribe((data:any)=>
    {
      if(data==true)
      {

        this.count++
        

        this.questionsService.setDifficulty(i)
        this.getQuestionDifficulty()
        alert("Your Answer is correct")
      }
      if(this.count<=8)
      { 
        this.display=1
        this.questionsService.setDifficulty(1)

        if(data==true)
        {
          

          this.questionsService.setDifficulty(2)
          this.getQuestionDifficulty()
        }

      }
      if(this.count>8&&this.count<=16)
      { 
        this.questionsService.setDifficulty(2)
        this.display=2
        if(data==true)
        {
          
          console.log(this.count)
          this.questionsService.setDifficulty(2)
          this.getQuestionDifficulty()
        }


      }
      if(this.count>16&&this.count<32)
      { 
        this.display=3
        this.questionsService.setDifficulty(3)
        if(data==true)
        {

          this.questionsService.setDifficulty(3)
          this.getQuestionDifficulty()
        }


      }
      this.userscore=this.count
      if(data==false)
      {
        
        this.count--
        if(this.count==-1)
        this.count=0
        this.questionsService.setDifficulty(this.count)
        this.getQuestionDifficulty()

        alert("Your Answer is Incorrect, Try Again!!")
      }
      this.score=this.count*5
    })


  }








}
