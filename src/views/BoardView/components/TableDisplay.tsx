import React from "react"

import "./TableDisplay.css"

interface TableDisplayProps {
    number: string,
    participants: string,
    winner: string
}

export default function TableDisplay({ number, participants, winner}: TableDisplayProps) {
    return (
        <div id="table-outer-container">
            <div id="number">{number}</div>
            <div id="participants">{participants}</div>
            <div id="winner" className={winner.toLowerCase() === 'draw' ? 'grey-text' : (winner.toLowerCase() === 'n/a' ? 'light-grey-text' : 'green-text')}>{winner}</div>
        </div>
    )
}
