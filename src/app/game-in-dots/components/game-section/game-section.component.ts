import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss']
})
export class GameSectionComponent implements OnInit {
  cells;
  sideLength = 5;
  cellsQuantity = this.sideLength ** 2;

  cell = () => ({ active: false, won: false });
  constructor() {}

  ngOnInit() {
    this.cells = Array.from({ length: 5 * 5 }, el => (el = this.cell()));
    console.log(this.cells);
    console.log(this.cellsQuantity);

    this.cells[Math.floor(Math.random() * this.cells.length)].active = true;
  }
}
