import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { GameInDotsMainPageComponent } from './game-in-dots-main-page/game-in-dots-main-page.component';
import { GameSectionComponent } from './components/game-section/game-section.component';



@NgModule({
  declarations: [LeaderBoardComponent, GameInDotsMainPageComponent, GameSectionComponent],
  imports: [
    CommonModule
  ]
})
export class GameInDotsModule { }
