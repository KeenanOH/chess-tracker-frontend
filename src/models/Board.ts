import Match from "./Match";

export interface Board {
    _id: string,
    rank: number,
    homePlayer: string,
    awayPlayer: string,
    result: string
}

export interface PopulatedBoard {
    _id: string,
    match: Match,
    rank: number,
    homePlayer: string,
    awayPlayer: string,
    result: string
}
