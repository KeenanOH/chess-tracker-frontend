import React from "react"
import { Link } from "react-router-dom"

import TableDisplay from "./TableDisplay"
import { PopulatedBoard } from "../../../models/Board"

import "./BoardGrid.css"

interface BoardGridProps {
    boards: PopulatedBoard[]
}

export default function BoardGrid({ boards }: BoardGridProps) {
    return (
        <div className="board-grid">
            { boards.map((board) => {
                return (
                    <Link key={board._id} to={`/dashboard/submit/${board._id}`}>
                        <TableDisplay number={board.rank.toString()} participants={`${board.homePlayer} vs. ${board.awayPlayer}`} winner={board.result} />
                    </Link>
                )
            }) }
        </div>
    )
}
