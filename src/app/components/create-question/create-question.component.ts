import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  btnName='login'
  constructor() { }

  ngOnInit(): void {
  }

}
