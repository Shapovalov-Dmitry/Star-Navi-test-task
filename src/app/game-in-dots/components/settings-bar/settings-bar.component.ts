import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IGameMode, GameModesList } from 'src/app/Models/gameMode';
import { GameDataService } from '../../game-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBarComponent {
  @Input() startGame: () => void;
  @Input() playButtonCaption: string;
  @Output() playerName: EventEmitter<string> = new EventEmitter();
  @Output() gameMode: EventEmitter<IGameMode> = new EventEmitter();

  gameModes$: Observable<GameModesList>;

  constructor(public gameDataService: GameDataService) {
    this.gameModes$ = gameDataService.getGameModes();
  }

  onSelectGameMode = e => this.gameMode.emit(JSON.parse(e.target.value));

  onPlayerNameChange = e => this.playerName.emit(e.target.value);

  sortNull = () => {};
}
