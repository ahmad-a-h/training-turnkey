import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { questions } from './Questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsServiceService {
  
  private url="http://192.168.168.61:8081/quizapp/question"
  private difficultyurl='http://192.168.168.61:8081/quizapp/question/';
  private createQURL="http://192.168.168.61:8081/quizapp/new"
  private difficulty:number
  private q:string
  constructor(private http:HttpClient) { }

  public setDifficulty(value: number) {
    this.difficulty = value;
  }
  public setquestion(value: string) {
    this.q = value;
  }
  getRandomQuestion()
  { 

    return this.http.get(this.url)

}

  difficultyQuestion()
  {
    return this.http.get(this.difficultyurl+this.difficulty)
  }
  postQuestion()
  {
    const params = {}
    const key='question'
    params[key]=this.q

    const diff='difficulty'
    params[diff]=this.difficulty

    Object.assign(params, {
      "answer1": "3 hearts",
      "answer2": "no hearts",     
      "answer3": "1 heart",
      "isRight": 0,
      
    });
    // return console.log(params)
    return this.http.post(this.createQURL,params)
    
  }
}
