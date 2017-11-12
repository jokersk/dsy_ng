import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import { MatInputModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDW7kjAtpLRJ3eqhKwrOcbKmsYn1PAXZpw",
        authDomain: "dsy-chat.firebaseapp.com",
        databaseURL: "https://dsy-chat.firebaseio.com",
        projectId: "dsy-chat",
        storageBucket: "",
        messagingSenderId: "786613915759"
      }
    ),
    RouterModule.forRoot([
      {
        path:"",
        component : HomeComponent
      },
      {
        path:"chat",
        component:ChatComponent
      },
      {
        path:"home",
        component:HomeComponent
      }
    ]),
    AngularFireDatabaseModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
