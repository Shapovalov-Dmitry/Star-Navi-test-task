import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { GameInDotsMainPageComponent } from './game-in-dots-main-page/game-in-dots-main-page.component';
import { GameSectionComponent } from './components/game-section/game-section.component';
import { CellComponent } from './components/cell/cell.component';
import { FlatTo2DPipe } from './pipes/flat-to2-d.pipe';

@NgModule({
  declarations: [
    LeaderBoardComponent, //
    GameInDotsMainPageComponent,
    GameSectionComponent,
    CellComponent,
    FlatTo2DPipe
  ],
  imports: [CommonModule]
})
export class GameInDotsModule {}
