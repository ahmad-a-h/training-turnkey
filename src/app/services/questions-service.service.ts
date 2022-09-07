import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Output } from '@angular/core';
import { questions } from '../Questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsServiceService {
  
  private url="http://192.168.168.61:8081/quizapp/question"
  private difficultyurl='http://192.168.168.61:8081/quizapp/question/';
  private createQURL="http://192.168.168.61:8081/quizapp/new"
  private urlLogin="http://192.168.168.61:8081/quizapp/logIn"
  
  private difficulty:number
  private q:string
  private u:string
  private p:string
  private a1:string
  private a2:string
  private a3:string 
  private answer:string
  right: number;
  constructor(private http:HttpClient) { }

  public setDifficulty(value: number) {
    this.difficulty = value;
  } 
  public setIsRight(value: number) {
    this.right = value;
  }
  public setquestion(value: string,value1: string,value2: string,value3: string) {
    this.q = value;
    this.a1=value1
    this.a2=value2
    this.a3=value3
  }
  getRandomQuestion()
  { 

    return this.http.get(this.url)
  }

  getUserAnswer(value:string)
  {
    this.answer=value
    
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
    
    const key1='answer1'
    params[key1]=this.a1
    
    const key2='answer2'
    params[key2]=this.a2

    const key3='answer3'
    params[key3]=this.a3

    const diff='difficulty'
    params[diff]=this.difficulty

    const isright='isRight'
    params[isright]=this.right

      
    return this.http.post(this.createQURL,params)
    
  }
   getLoginCredentials(value1:string,value2:string)
   {
    this.u=value1
    this.p=value2
   }


  login()
  {
    const credentials={}
    const key='username'
    const key2='password'
    credentials[key]=this.u
    credentials[key2]=this.p
    //console.log(credentials)
    return this.http.post(this.urlLogin,credentials)
  }

}
