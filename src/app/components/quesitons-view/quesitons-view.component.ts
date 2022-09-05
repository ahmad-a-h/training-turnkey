import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quesitons-view',
  templateUrl: './quesitons-view.component.html',
  styleUrls: ['./quesitons-view.component.css']
})
export class QuesitonsViewComponent implements OnInit {
@Input() btnName="submit"
  constructor() { }

  ngOnInit(): void {
  }

  

}
