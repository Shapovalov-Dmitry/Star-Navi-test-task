import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {
  @Input() active = false;
  @Output() emitWon = new EventEmitter<boolean>();
  won = false;
  constructor() { }

  ngOnInit() {
  }

}
