/**
|--------------------------------------------------
| All the interfaces
|--------------------------------------------------
*/

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: Array<IEpisode>;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface IEpisodesProps {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
  toggleFavAction: (episode: IEpisode) => IAction;
}
