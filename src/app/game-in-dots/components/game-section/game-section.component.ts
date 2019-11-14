import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss']
})
export class GameSectionComponent implements OnInit, OnDestroy {
  cells;
  sideLength = 5;
  cellsQuantity = this.sideLength ** 2;
  timeOut = 700;
  timer: NodeJS.Timer;

  cell = () => ({ active: false, won: false, lost: false });

  startGame = () => {
    let previousRandomCell;
    let currentRandomCell;
    this.timer = setInterval(() => {
      const isCompleted = this.cells.map(el => el.active).includes(false);
      while (isCompleted) {
        currentRandomCell = this.cells[
          Math.floor(Math.random() * this.cells.length)
        ];
        const isAlreadyActive = currentRandomCell.active;
        if (!isAlreadyActive) {
          if (previousRandomCell && !previousRandomCell.won) {
            previousRandomCell.lost = true;
          }
          currentRandomCell.active = true;
          previousRandomCell = currentRandomCell;
          break;
        }
      }
    }, this.timeOut);
  };

  constructor() {}

  ngOnInit() {
    this.cells = Array.from(
      { length: this.sideLength ** 2 },
      el => (el = this.cell())
    );
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
