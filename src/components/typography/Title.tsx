import React from "react"

import "./Title.css"

interface TitleProps {
    children: string
}

export default function Title({ children }: TitleProps) {
    return (
        <div className="title">{children}</div>
    )
}
