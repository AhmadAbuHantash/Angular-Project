import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ToDoComponent } from './components/todo/todo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AllToDosComponent } from './components/all-to-dos/all-to-dos.component';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToDoComponent,
    HomeComponent,
    LoginComponent,
    ImpressumComponent,
    DatenschutzComponent,
    AppComponent,
    ToDoComponent,
    PageNotFoundComponent,
    AllToDosComponent,
    CreateToDoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}
