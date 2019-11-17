import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GameDataService } from '../../game-data.service';
import { Observable } from 'rxjs';
import { Leader } from 'src/app/Models/leaders';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeaderBoardComponent implements OnInit {
  getLeaders$: Observable<Leader[]>;
  constructor(public gameDataService: GameDataService) {
    this.getLeaders$ = gameDataService.getLeaders();
  }

  ngOnInit() {}
}
