import { Component, OnInit } from '@angular/core';
import { QuestionsServiceService } from 'src/app/services/questions-service.service';

@Component({
  selector: 'app-all-qs',
  templateUrl: './all-qs.component.html',
  styleUrls: ['./all-qs.component.css']
})
export class AllQsComponent implements OnInit {
questions=[]
  constructor(private questionsService: QuestionsServiceService) { }

  ngOnInit() {
  this.questionsService.getAllQuestions().subscribe((data:any)=>{
    this.questions=data
  })
  }


}
