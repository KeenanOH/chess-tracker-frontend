import React from "react"

import "./SectionHeader.css"

interface SectionHeaderProps {
    children: string
}

export default function SectionHeader({ children }: SectionHeaderProps) {
    return (
        <div className="section-header">
            {children}
        </div>
    )
}
