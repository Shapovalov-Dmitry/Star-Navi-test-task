import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, throttle, repeat, concatMap } from 'rxjs/operators';
import { GameModesList } from '../Models/gameMode';
import { timer } from 'rxjs';

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
    timer(0, 15000).pipe(
      concatMap(_ =>
        this.http.get(`${this.baseUrl}/winners`).pipe(tap(e => console.log(e)))
      )
    );
}
