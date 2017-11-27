/**
 * File: routes.module.ts
 * Project: LiveCoding/Etna/basic web server
 * File Created: Sunday, 26th November 2017 11:08:31 pm
 * Author: Aurélien Castellarnau (castellarnau.a@gmail.com)
 * -----
 * Last Modified: Sunday, 26th November 2017 11:18:21 pm
 * Modified By: Aurélien Castellarnau (castellarnau.a@gmail.com>)
 * -----
 * Copyright © 2018 - 2017 WebFace, WebFace
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: '', redirectTo: '',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutesModule {}
