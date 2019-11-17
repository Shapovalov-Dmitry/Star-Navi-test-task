import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameInDotsModule } from './game-in-dots/game-in-dots.module';
import { RootPageComponent } from './root-page/root-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RootPageComponent,
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
