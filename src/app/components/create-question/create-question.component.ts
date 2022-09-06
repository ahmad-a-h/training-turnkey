import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { questions } from 'src/app/Questions';
import { QuestionsServiceService } from 'src/app/questions-service.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  btnName='Add'
  @Input() question
  @Input() answer
  display = "Choose Difficulty"

  constructor(private questionsService:QuestionsServiceService) { }

  ngOnInit(): void {
  }
  public dynamicnumber(e)
  {
      this.display = e
      this.questionsService.setDifficulty(e)
     
  }

  createQuestion()
{
  
    
    this.questionsService.setquestion(this.question)
    
    
    this.questionsService.postQuestion().subscribe((data:any) => {
      // this.random=data["question"]
      console.log(data)
     })
     this.question=''
     this.answer=''
     this.display="Choose Difficulty"
  
}

}
