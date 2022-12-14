import { HttpClient } from '@angular/common/http';
import { Injectable, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { questions } from '../Questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsServiceService {
  apirUrl=environment.apiURL
  private url=this.apirUrl+'question'
  private difficultyurl=this.apirUrl+'question';
  private createQURL=this.apirUrl+'new'
  private urlLogin=this.apirUrl+'logIn'
  private urlToCheckAnswer=this.apirUrl+'validate'
  private allQurl=this.apirUrl+'allQuestions'
  private difficulty:number
  private q:string
  private u:string
  private p:string
  private a1:string
  private a2:string
  private a3:string
  private answer:string
  private id:number
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
  public checkId(value:number)
  {
    this.id=value

     //console.log(this.urlToCheckAnswer+this.id)
   return  this.http.get(this.urlToCheckAnswer+this.id)
  }

  getRandomQuestion()
  {

    return this.http.get(this.url)
  }
  getfirstQuestion(i:number)
  {

    return this.http.get(this.difficultyurl+i)
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

  getAllQuestions()
  {
    
    return this.http.get(this.allQurl)
  }

}
