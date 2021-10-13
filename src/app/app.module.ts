import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuTvComponent } from './menu-tv/menu-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
