import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { ErrorComponent } from './components/error/error.component';
import { NgComponentComponent } from './components/ng-component/ng-component.component';
import { QuesitonsViewComponent } from './components/quesitons-view/quesitons-view.component';
import { LoginCardService } from './services/login-guard.service';


const routes: Route[] = [
  {path:'',redirectTo: '/login',pathMatch:'full'},
  {path:'login',component: NgComponentComponent},
  {path:'question',component: QuesitonsViewComponent, canActivate:[LoginCardService]},
  {path:'createquestion',component: CreateQuestionComponent,canActivate:[LoginCardService]},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
