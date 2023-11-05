import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { TodoComponent } from './todo/todo.component';


const firebaseConfig = {
  apiKey: "AIzaSyACMwjiq94BqlK6OXICQbNySQaARgTn1Ao",
  authDomain: "to-do-app-c146a.firebaseapp.com",
  projectId: "to-do-app-c146a",
  storageBucket: "to-do-app-c146a.appspot.com",
  messagingSenderId: "147881392003",
  appId: "1:147881392003:web:b80b1eea62d392fe75e8b6"
};

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
