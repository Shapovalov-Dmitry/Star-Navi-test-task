export interface IGameMode {
  field: number;
  delay: number;
}

export class GameModesList {
  easyMode: IGameMode;
  normalMode: IGameMode;
  hardMode: IGameMode;

  constructor(gameModesList) {
    this.easyMode = gameModesList.easyMode;
    this.normalMode = gameModesList.normalMode;
    this.hardMode = gameModesList.hardMode;
    return this;
  }
}
