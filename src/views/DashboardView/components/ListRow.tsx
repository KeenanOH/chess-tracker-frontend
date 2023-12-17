import React from "react"

import "./ListRow.css"

interface ListRowProps {
    title: string
    caret?: boolean
}

function RightwardCaret() {
    return (
        <svg className="rightward-caret" xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.79871 7.5042C8.93916 7.64057 9.01805 7.82541 9.01805 8.01814C9.01805 8.21087 8.93916 8.39572 8.79871 8.53208L1.29871 15.8048C1.15653 15.9333 0.968487 16.0032 0.774186 15.9999C0.579885 15.9966 0.394499 15.9202 0.257086 15.787C0.119673 15.6537 0.0409614 15.474 0.0375332 15.2856C0.034105 15.0971 0.106228 14.9148 0.238708 14.7769L7.20871 8.01814L0.238708 1.25935C0.165021 1.19277 0.105919 1.11248 0.064927 1.02327C0.023935 0.934059 0.00189351 0.837754 0.000116722 0.740103C-0.00166006 0.642451 0.0168643 0.545454 0.0545854 0.454895C0.0923064 0.364337 0.148451 0.282074 0.21967 0.213013C0.290888 0.143952 0.375722 0.0895087 0.46911 0.0529308C0.562499 0.0163528 0.662527 -0.00160975 0.76323 0.000113188C0.863933 0.00183613 0.963247 0.0232093 1.05525 0.0629591C1.14725 0.102709 1.23005 0.16002 1.29871 0.231473L8.79871 7.5042Z" fill="#C0C0C0"/>
        </svg>
    )
}

export default function ListRow({ title, caret = false }: ListRowProps) {
    return (
        <div className={"list-row" + (caret ? " list-row-is-link": "")}>
            {title}
            {caret ? RightwardCaret() : null}
        </div>
    )
}
