import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuTvComponent } from './menu-tv/menu-tv.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuTvComponent,
  ],
  imports: [
    BrowserModule,
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
