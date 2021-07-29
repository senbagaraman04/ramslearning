// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { UserComponent } from './user/user.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     UserComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './core/app.routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     CourseListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
