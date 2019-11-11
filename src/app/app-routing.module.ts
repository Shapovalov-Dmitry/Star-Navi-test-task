import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameInDotsMainPageComponent } from './game-in-dots/game-in-dots-main-page/game-in-dots-main-page.component';

const routes: Routes = [
  { path: 'game-in-dots', component: GameInDotsMainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
