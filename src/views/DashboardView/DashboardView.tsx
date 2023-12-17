import React from "react"
import {useLoaderData} from "react-router-dom"

import TitleBar from "../../components/misc/TitleBar"
import Match from "../../models/Match"
import MatchList from "./components/MatchList"
import SectionContainer from "../../components/misc/SectionContainer"
import SectionHeader from "../../components/typography/SectionHeader"

interface DashboardViewProps {
    isAdmin?: boolean
    matches?: Match[]
}

export default function DashboardView({ isAdmin, matches }: DashboardViewProps) {
    const loaderData = useLoaderData()

    if (!matches) {
        matches = (loaderData as { matches: Match[]}).matches
    }

    return (
        <div>
            <TitleBar isAdmin={isAdmin}>MSL Chess Tracker</TitleBar>
            <SectionContainer>
                <SectionHeader>Matches</SectionHeader>
                <MatchList matches={matches} />
            </SectionContainer>
        </div>
    )
}
