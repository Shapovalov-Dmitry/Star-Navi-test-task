import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICell } from '../../../Models/cell';
import { IGameMode } from '../../../Models/gameMode';

@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss']
})
export class GameSectionComponent implements OnInit, OnDestroy {
  sideLength;
  cellsQuantity;
  timeout: number;
  cells: ICell[];

  message: string;
  playButtonCaption = 'PLAY';
  playerName: string;

  scoreThreshold;

  computerScore = 0;
  playerScore = 0;

  timer;

  constructor() {}

  ngOnInit() {
    this._resetGame();
  }

  chooseMessage() {
    if (this.timer) {
      this.message = 'Click the blue square as soon as it appears!';
    }
    if (!this.cells.length) {
      this.message = 'Pick game mode';
    }
    if (!this.playerName) {
      this.message = 'Put in your name';
    }
    if (!this.cells.length && !this.playerName) {
      this.message = 'Pick game mode and put in your name';
    }
    if (this.cells.length && this.playerName) {
      this.message = 'Press play to start the game';
    }
    if (this.computerScore === this.scoreThreshold) {
      this.message = 'Computer wins!';
    }
    if (this.playerScore === this.scoreThreshold) {
      this.message = 'You win!';
    }
    return true;
  }

  cell: () => ICell = () => ({ active: false, won: false, lost: false });

  onPlayerNameChange = (e: string) => {
    this.playerName = e;
    this._resetGame();
  };

  onGameModeChange = (e: IGameMode) => {
    this.timeout = e.delay;
    this.sideLength = e.field;
    this._resetGame();
  };

  startGame = () => {
    this._resetGame();

    this._changeButtonCaptionAfterFirstClick();

    let previousRandomCell;
    let currentRandomCell;

    this.timer = setInterval(() => {
      const isCompleted = !this.cells.map(el => el.active).includes(false);
      while (
        !isCompleted &&
        this.computerScore < this.scoreThreshold &&
        this.playerScore < this.scoreThreshold
      ) {
        currentRandomCell = this.cells[
          Math.floor(Math.random() * this.cells.length)
        ];

        const isAlreadyActive = currentRandomCell.active;

        if (!isAlreadyActive) {
          if (previousRandomCell && !previousRandomCell.won) {
            previousRandomCell.lost = true;
            this.computerScore++;
          } else if (previousRandomCell && previousRandomCell.won) {
            this.playerScore++;
          }
          if (
            this.scoreThreshold - this.playerScore !== 0 &&
            this.scoreThreshold - this.computerScore !== 0
          ) {
            currentRandomCell.active = true;
          } else {
          }
          previousRandomCell = currentRandomCell;

          break;
        }
      }
    }, this.timeout);
  };

  canPlay = () => !(this.playerName && this.timeout);

  cornerCellsStyles = (row, column) => {
    if (row === 0 && column === 0) {
      return 'border-top-left-radius';
    }
    if (row === 0 && column === this.sideLength - 1) {
      return 'border-top-right-radius';
    }
    if (row === this.sideLength - 1 && column === 0) {
      return 'border-bottom-left-radius';
    }
    if (row === this.sideLength - 1 && column === this.sideLength - 1) {
      return 'border-bottom-right-radius';
    }
  };

  ngOnDestroy() {
    this._clearTimer();
  }

  private _resetGame() {
    this._clearTimer();
    this._resetScore();
    this._calculateCellsQuantity();
    this._calculateThreshold();
    this._createCleanCells();
  }

  private _resetScore = () => {
    this.computerScore = 0;
    this.playerScore = 0;
  };
  private _clearTimer = () => clearInterval(this.timer);
  private _calculateCellsQuantity() {
    this.cellsQuantity = this.sideLength ** 2;
  }
  private _calculateThreshold() {
    this.scoreThreshold = Math.ceil(this.cellsQuantity / 2);
  }
  private _createCleanCells = () =>
    (this.cells = Array.from(
      { length: this.cellsQuantity },
      el => (el = this.cell())
    ));
  private _changeButtonCaptionAfterFirstClick() {
    this.playButtonCaption = 'PLAY AGAIN';
  }
}
