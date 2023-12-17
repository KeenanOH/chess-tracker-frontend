import React from "react"

import "./Subtitle.css"

interface SubtitleProps {
    children: string
}

export default function Subtitle({ children }: SubtitleProps) {
    return (
        <div className="subtitle">
            {children}
        </div>
    )
}
