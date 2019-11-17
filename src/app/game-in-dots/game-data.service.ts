import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, concatMap } from 'rxjs/operators';
import { GameModesList } from '../Models/gameMode';
import { timer } from 'rxjs';
import { Leader } from '../Models/leaders';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  baseUrl = 'https://starnavi-frontend-test-task.herokuapp.com';
  constructor(private http: HttpClient) {}

  public getGameModes = () =>
    this.http
      .get(`${this.baseUrl}/game-settings`)
      .pipe(map(res => new GameModesList(res)));

  public getLeaders = () =>
    timer(0, 1000).pipe(
      concatMap(_ => this.http.get(`${this.baseUrl}/winners`)),
      map((leaders: Leader[]) =>
        leaders
          .reverse()
          .slice(0, 4)
          .map(leader => new Leader(leader))
      )
    );

  public postResult = (result: Leader) =>
    this.http.post(`${this.baseUrl}/winners`, result);
}
