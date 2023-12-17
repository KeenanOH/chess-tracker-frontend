import Match from "./models/Match";
import {Board, PopulatedBoard} from "./models/Board";
import School from "./models/School";
import User from "./models/User";

const baseUrl = "http://127.0.0.1:3000"

export async function login(username: string, password: string) {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })

    return (await response.json())["token"]
}

export async function getMatches(accessToken: string, all?: boolean) {
    const response = await fetch(`${baseUrl}/matches` + (all ? "?all=true" : ""), {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })

    return await response.json() as Match[]
}

export async function getBoards(accessToken: string, matchId: string) {
    const response = await fetch(`${baseUrl}/boards?matchId=${matchId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })

    return await response.json() as PopulatedBoard[]
}

export async function updateBoard(accessToken: string, boardId: string, homePlayer: string, awayPlayer: string, result: string) {
    const response = await fetch(`${baseUrl}/boards/${boardId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            homePlayer, awayPlayer, result
        })
    })

    return await response.json() as Board
}

export async function getSchools(accessToken: string) {
    const response = await fetch(`${baseUrl}/schools`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })

    return await response.json() as School[]
}

export async function createMatch(accessToken: string, homeSchool: string, awaySchool: string, date: string) {
    const response = await fetch(`${baseUrl}/matches`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            homeSchool, awaySchool, date
        })
    })

    return await response.json() as Match
}

export async function getUsers(accessToken: string) {
    const response = await fetch(`${baseUrl}/users`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })

    return await response.json() as string[]
}


export async function createUser(accessToken: string, username: string, password: string, schoolId: string) {
    const response = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username, password, schoolId
        })
    })

    return await response.json() as User
}

export async function getBoard(accessToken: string, boardId: string) {
    const response = await fetch(`${baseUrl}/boards/${boardId}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })

    return await response.json() as PopulatedBoard
}

export async function deleteMatch(accessToken: string, matchId: string) {
    await fetch(`${baseUrl}/matches/${matchId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
}
