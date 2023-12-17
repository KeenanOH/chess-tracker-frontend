import React from "react"

import "./Button.css"

interface ButtonProps {
    title: string
    className?: string
    destructive?: boolean
}

export default function Button({ title, className, destructive }: ButtonProps) {
    return (
        <button type="submit" className={"button" + (className ? ` ${className}` : "") + (destructive ? " destructive": "")}>
            {title}
        </button>
    )
}
