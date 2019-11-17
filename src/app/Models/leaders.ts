import dayjs from 'dayjs';

export class Leader {
  winner: string;
  date: string;
  constructor(leader) {
    this.winner = leader.winner;
    this.date = dayjs(leader.date.replace(';', ' ')).format('MMM DD, H:mm');
    return this;
  }
}
