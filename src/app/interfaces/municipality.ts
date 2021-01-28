import { Celebration } from "./celebration";
import { Site } from "./site";

export interface Municipality {
    celebrations: Array<Celebration>,
    description: string,
    economy: string,
    habitants: string,
    history: string,
    idMun: string,
    image: string,
    name: string,
    sites: Array<Site>,
    state: boolean,
    weather: string
}
