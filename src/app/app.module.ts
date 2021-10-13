import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuTvComponent } from './menu-tv/menu-tv.component';
import { NavigationEndpointDirective } from './directives/navigation-endpoint.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuTvComponent,
    NavigationEndpointDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
