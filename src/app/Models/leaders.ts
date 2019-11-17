export class Leader {
  winner: string;
  date: Date;
  constructor(leader) {
    this.winner = leader.winner;
    this.date = leader.date;
    return this;
  }
}
