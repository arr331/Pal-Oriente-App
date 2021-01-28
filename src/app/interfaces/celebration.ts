import { Activity } from "./activity";

export interface Celebration {
    activities: Array<Activity>,
    description: string,
    idCelebration: string,
    image: string,
    name: string,
    state: boolean
}
