import { IChar } from "./IChar";
import { IEpisode } from "./IEpisode";
import { ILocation } from "./ILocation";

interface IInfo {
  count: number;
  pages: number;
  next: null | string;
  prev: null | string;
}

export interface IEpisodeData {
  info: IInfo;
  results: IEpisode[];
}

export interface ICharacterData {
  info: IInfo;
  results: IChar[];
}

export interface ILocationData {
  info: IInfo;
  results: ILocation[];
}
