export interface IGamer {
  id: number;
  realName: string;
  playerName: string;
  asset: string;
}

export interface IProps {
  gamers: IGamer[];
}

export type TSortBy = 'asc' | 'desc' | null;
