import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { questions } from 'src/app/Questions';
import { QuestionsServiceService } from '../../services/questions-service.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  btnName='Add'
  @Input() question
  @Input() answer1
  @Input() answer2
  @Input() answer3
  display = "Choose Difficulty"
  option:number

  constructor(private questionsService:QuestionsServiceService) { }

  ngOnInit(): void {
  }
  public dynamicnumber(e)
  {
    
      this.display = e
     
      this.questionsService.setDifficulty(e)
     

  }
  isRight(e)
  {
    this.questionsService.setIsRight(e)
  }

  createQuestion()
{
    if(!this.question||!this.answer1||!this.answer2||!this.answer3)
    {
      
      alert('please fill all the fields')
    }

    else
    {
    this.questionsService.setquestion(this.question,this.answer1,this.answer2,this.answer3)
    // console.log(this.questionsService.postQuestion())
    
    this.questionsService.postQuestion().subscribe((data:any) => {
      // this.random=data["question"]
      
      if(data==true)
      {
        alert('A New Question Has Been Added')
      }
     })
     this.question=''
     this.answer1=''
     this.answer2=''
     this.answer3=''
     this.display="Choose Difficulty"
    }
  
}

}
