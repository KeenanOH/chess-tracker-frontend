import React from "react"

import "./Label.css"

interface LabelProps {
    children: string
}

export default function Label({ children }: LabelProps) {
    return (
        <label className="label">
            {children}
        </label>
    )
}
