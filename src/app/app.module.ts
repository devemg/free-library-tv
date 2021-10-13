import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuTvComponent } from './components/menu-tv/menu-tv.component';
import { ExitOnAppComponent } from './components/modals/exit-on-app/exit-on-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTvComponent,
    ExitOnAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
