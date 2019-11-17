import dayjs from 'dayjs';

export class Leader {
  winner: string;
  date: string;
  constructor(leader) {
    this.winner = leader.winner;
    this.date = dayjs(leader.date.replace(';', ' ')).format('MMM DD, hh:mm');
    return this;
  }
}
