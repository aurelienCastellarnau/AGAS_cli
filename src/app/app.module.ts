/**
 * File: app.module.ts
 * Project: LiveCoding/Etna/basic web server
 * File Created: Sunday, 26th November 2017 10:40:12 pm
 * Author: Aurélien Castellarnau (castellarnau.a@gmail.com)
 * -----
 * Last Modified: Sunday, 26th November 2017 11:18:12 pm
 * Modified By: Aurélien Castellarnau (castellarnau.a@gmail.com>)
 * -----
 * Copyright © 2018 - 2017 WebFace, WebFace
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RoutesModule } from './routes.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
