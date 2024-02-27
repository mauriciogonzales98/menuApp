import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Sections } from './components/sections.component'
import { MenuItem } from './components/menuItem.component'

@NgModule({
  declarations: [
    AppComponent, Sections, MenuItem
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, Sections, MenuItem]
})
export class AppModule { }
