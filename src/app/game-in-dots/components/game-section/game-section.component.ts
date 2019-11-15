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
  timeOut = 100;
  timer;
  cell: () => ICell = () => ({ active: false, won: false, lost: false });

  private _clearTimer = () => clearInterval(this.timer);
  private _createCleanCells = () =>
    (this.cells = Array.from(
      { length: this.sideLength ** 2 },
      el => (el = this.cell())
    ));

  startGame = () => {
    this._clearTimer();
    this._createCleanCells();

    let previousRandomCell;
    let currentRandomCell;

    const scoreThreshold = Math.ceil(this.cellsQuantity / 2);
    let computerScore = 0;
    let userScore = 0;

    this.timer = setInterval(() => {
      const isCompleted = !this.cells.map(el => el.active).includes(false);
      while (
        !isCompleted &&
        computerScore < scoreThreshold &&
        userScore < scoreThreshold
      ) {
        currentRandomCell = this.cells[
          Math.floor(Math.random() * this.cells.length)
        ];
        const isAlreadyActive = currentRandomCell.active;
        if (!isAlreadyActive) {
          if (previousRandomCell && !previousRandomCell.won) {
            previousRandomCell.lost = true;
            computerScore++;
          }
          currentRandomCell.active = true;
          previousRandomCell = currentRandomCell;
          userScore++;
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
