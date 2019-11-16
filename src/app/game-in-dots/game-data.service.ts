import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { GameModesList } from '../Models/gameMode';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  constructor(private http: HttpClient) {}

  public getGameModes = () =>
    this.http
      .get('https://starnavi-frontend-test-task.herokuapp.com/game-settings')
      .pipe(
        map(res => new GameModesList(res)),
      );
}
