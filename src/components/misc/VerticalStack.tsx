import React from "react"

import "./VerticalStack.css"

interface VerticalStackProps {
    children: React.ReactElement[]
    className?: string
}

export default function VerticalStack({ children, className }: VerticalStackProps) {
    return (
        <div className={"vertical-stack" + (className? ` ${className}` : "")}>
            {children}
        </div>
    )
}
