import {
  Component,
  OnInit,
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
export class SettingsBarComponent implements OnInit {
  @Input() startGame: () => void;
  @Input() playButtonCaption: string;
  @Output() name: EventEmitter<string> = new EventEmitter();
  @Output() gameMode: EventEmitter<IGameMode> = new EventEmitter();

  gameModes$: Observable<GameModesList>;
  selectedGameMode = 'placeholder';

  constructor(public gameDataService: GameDataService) {
    this.gameModes$ = gameDataService.getGameModes();
  }

  ngOnInit() {}

  onSelectGameMode = () => {
    this.gameMode.emit(JSON.parse(this.selectedGameMode));
  };

  sortNull = () => {};
}
