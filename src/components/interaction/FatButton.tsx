import React from "react"

import "./FatButton.css"

export enum FatButtonColor {
    green = "fat-button-green",
    gray = "fat-button-gray",
    blue = "fat-button-blue"
}

interface FatButtonProps {
    title: string
    color: FatButtonColor
    action: Function
}

export default function FatButton({ title, color, action }: FatButtonProps) {
    return (
        <button type="submit" className={`fat-button ${color}`} onClick={() => { action()}}>{title}</button>
    )
}
