import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgComponentComponent } from './components/ng-component/ng-component.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { QuesitonsViewComponent } from './components/quesitons-view/quesitons-view.component';
import { ErrorComponent } from './components/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { CreateQuestionComponent } from './components/create-question/create-question.component'
import { HttpClientModule } from '@angular/common/http';
import { LoginCardService } from './services/login-guard.service';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NgComponentComponent,
    ButtonComponent,
    QuesitonsViewComponent,
    ErrorComponent,
    CreateQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [QuesitonsViewComponent,LoginCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
