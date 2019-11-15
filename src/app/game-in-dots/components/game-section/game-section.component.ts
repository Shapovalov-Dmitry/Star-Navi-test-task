import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICell } from '../../../Models/cell';
@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss']
})
export class GameSectionComponent implements OnInit, OnDestroy {
  cells: ICell[];
  sideLength = 5;
  cellsQuantity = this.sideLength ** 2;
  timeOut = 600;
  timer;
  message = 'Press play to start the game';
  playButtonCaption = 'PLAY';

  scoreThreshold = Math.ceil(this.cellsQuantity / 2);

  computerScore = 0;
  userScore = 0;

  cell: () => ICell = () => ({ active: false, won: false, lost: false });

  private _resetScore = () => {
    this.computerScore = 0;
    this.userScore = 0;
  };
  private _resetMessage = () => (this.message = '');
  private _clearTimer = () => clearInterval(this.timer);
  private _createCleanCells = () =>
    (this.cells = Array.from(
      { length: this.sideLength ** 2 },
      el => (el = this.cell())
    ));
  private _showMessageWhoHadWon() {
    if (this.computerScore === this.scoreThreshold) {
      this.message = 'Computer wins!';
    }
    if (this.userScore === this.scoreThreshold) {
      this.message = 'You win!';
    }
  }
  private _showMessageWhilePlaying() {
    this.message = 'Click the blue square as soon as it appears!';
  }
  private _changeButtonCaptionAfterFirstClick() {
    this.playButtonCaption = 'PLAY AGAIN';
  }

  startGame = () => {
    this._resetMessage();
    this._resetScore();
    this._clearTimer();
    this._createCleanCells();

    this._changeButtonCaptionAfterFirstClick();
    this._showMessageWhilePlaying();

    let previousRandomCell;
    let currentRandomCell;

    this.timer = setInterval(() => {
      const isCompleted = !this.cells.map(el => el.active).includes(false);
      while (
        !isCompleted &&
        this.computerScore < this.scoreThreshold &&
        this.userScore < this.scoreThreshold
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
            this.userScore++;
          }
          if (
            this.scoreThreshold - this.userScore !== 0 &&
            this.scoreThreshold - this.computerScore !== 0
          ) {
            currentRandomCell.active = true;
          } else {
            this._showMessageWhoHadWon();
          }
          previousRandomCell = currentRandomCell;

          break;
        }
      }
    }, this.timeOut);
  };

  constructor() {}

  ngOnInit() {
    this._createCleanCells();
  }

  ngOnDestroy() {
    this._clearTimer();
  }
}
