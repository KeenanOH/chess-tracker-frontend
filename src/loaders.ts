import {getMatches} from "./api";

export async function loadMatches(token: string, all?: boolean) {
    const matches = await getMatches(token, all)
    return { matches }
}
