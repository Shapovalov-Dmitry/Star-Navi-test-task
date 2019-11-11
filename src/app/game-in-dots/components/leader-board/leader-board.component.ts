import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
