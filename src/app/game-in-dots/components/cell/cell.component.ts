import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {
  @Input() active = false;
  @Input() lost = false;
  @Input() won = false;
  @Input() cell = null;
  @Output() emitWon = new EventEmitter<boolean>();

  onWon = () => {
    if (this.cell && !this.cell.lost && this.cell.active) {
      this.won = true;
      this.cell.won = true;
    }
  };
  constructor() {}

  ngOnInit() {}
}
