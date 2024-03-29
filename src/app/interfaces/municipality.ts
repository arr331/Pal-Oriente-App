import { Celebration } from './celebration';
import { Site } from './site';

export interface Municipality {
  celebrations: Celebration[];
  description: string;
  economy: string;
  habitants: string;
  reference: string;
  history: string;
  idMun: string;
  idRegion?: string;
  image: string;
  name: string;
  sites: Site[];
  state: boolean;
  weather: string;
  x: string;
  y: string;
}
