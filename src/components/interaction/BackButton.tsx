import React from "react"
import { useNavigate } from "react-router-dom"

import "./BackButton.css"

interface BackButtonProps {
    to?: string
}

export default function BackButton({ to }: BackButtonProps) {
    const navigate = useNavigate()

    return (
        <button
            className="back-button"
            onClick={() => {
                if (!to) navigate(-1)
                else navigate(to)
            }}
        >
            {"< Back"}
        </button>
    )
}
