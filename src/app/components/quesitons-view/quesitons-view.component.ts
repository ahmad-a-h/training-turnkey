import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quesitons-view',
  templateUrl: './quesitons-view.component.html',
  styleUrls: ['./quesitons-view.component.css']
})
export class QuesitonsViewComponent implements OnInit {
btnName="submit"
btncreate="create a question"
display = "Choose Difficulty"
  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  dynamicnumber(e)
  {
    this.display = e
  }
  createQuestion()
  {
    this.router.navigate(['createquestion'])
  }
  

}
