import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameInDotsModule } from './game-in-dots/game-in-dots.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameInDotsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
