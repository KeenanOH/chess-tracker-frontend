import React from "react"

import "./SectionContainer.css"

interface SectionContainerProps {
    children: React.ReactElement[]
    className?: string
}

export default function SectionContainer({ children, className }: SectionContainerProps) {
    return (
        <div className={"section-container" + (className ?  ` ${className}` : "")}>
            {children}
        </div>
    )
}
