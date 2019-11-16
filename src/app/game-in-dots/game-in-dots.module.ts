import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { GameInDotsMainPageComponent } from './game-in-dots-main-page/game-in-dots-main-page.component';
import { GameSectionComponent } from './components/game-section/game-section.component';
import { CellComponent } from './components/cell/cell.component';
import { FlatTo2DPipe } from './pipes/flat-to2-d.pipe';
import { SettingsBarComponent } from './components/settings-bar/settings-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { GameDataService } from './game-data.service';
import { NormalCasePipe } from './pipes/normal-case.pipe';
@NgModule({
  declarations: [
    LeaderBoardComponent, //
    GameInDotsMainPageComponent,
    GameSectionComponent,
    CellComponent,
    FlatTo2DPipe,
    SettingsBarComponent,
    NormalCasePipe
  ],
  imports: [
    CommonModule, //
    HttpClientModule,
    FormsModule
  ],
  providers: [GameDataService]
})
export class GameInDotsModule {}
