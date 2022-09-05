import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { questions } from './Questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsServiceService {
  private url="http://192.168.168.61:8081/quizapp/question"
  constructor(private http:HttpClient) { }


  getRandomQuestion()
  {
    return this.http.get(this.url)
  }
}
