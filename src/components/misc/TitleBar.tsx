import React from "react"
import "./TitleBar.css"
import {Link} from "react-router-dom";

interface TitleBarProps {
    children: string
    isAdmin?: boolean
}

export default function TitleBar({ children, isAdmin }: TitleBarProps) {

    function handleLogout() {
        localStorage.removeItem("accessToken")
        window.location.reload()
    }

    if (isAdmin)
        return (
            <div id="title-bar">
                <div id="title">{children}</div>
                <div className="ml-a">
                    <Link to="/dashboard/admin" className="title-bar-text">Admin Dashboard</Link>
                    <button onClick={handleLogout} className="title-bar-text">Logout</button>
                </div>
            </div>
        )

    return (
        <div id="title-bar">
            <div id="title">{children}</div>
            <button onClick={handleLogout} className="title-bar-text ml-a">Logout</button>
        </div>
    )
}
