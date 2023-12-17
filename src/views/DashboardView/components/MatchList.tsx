import React from "react"
import { Link } from "react-router-dom"

import Match from "../../../models/Match"
import ListRow from "./ListRow"

import "./MatchList.css"

interface MatchListProps {
    matches: Match[]
}

export default function MatchList({ matches }: MatchListProps) {
    return (
        <div>
            { matches.map((match) => {
                return (
                    <Link key={match._id} className="match-list-link" to={`/dashboard/boards/${match._id}`}>
                        <ListRow title={`${match.homeSchool.name} vs. ${match.awaySchool.name} - ${match.date.split("T")[0]}`} caret={true} />
                    </Link>
                )
            }) }
        </div>
    )
}
