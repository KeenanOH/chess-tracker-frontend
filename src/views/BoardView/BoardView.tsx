import React from "react"
import {useLoaderData, useNavigate, useParams} from "react-router-dom"

import TitleBar from "../../components/misc/TitleBar"
import {PopulatedBoard} from "../../models/Board"
import BoardGrid from "./components/BoardGrid"
import SectionContainer from "../../components/misc/SectionContainer"
import Title from "../../components/typography/Title"
import BackButton from "../../components/interaction/BackButton"
import Subtitle from "../../components/typography/Subtitle";
import Button from "../../components/interaction/Button";
import {deleteMatch} from "../../api";

interface BoardViewProps {
    isAdmin: boolean
}

export default function BoardView({ isAdmin }: BoardViewProps) {
    const token = localStorage.getItem("accessToken");

    const params = useParams()
    const navigate = useNavigate()

    const { boards } = useLoaderData() as { boards: PopulatedBoard[] }

    function handleDeleteMatch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!params || !token) return
        const { matchId } = params
        if (!matchId) return
        deleteMatch(token, matchId)
            .then(() => {
                navigate(-1)
            })
    }

    if (isAdmin)
        return (
            <div>
                <TitleBar>MSL Chess Tracker</TitleBar>
                <BackButton />
                <SectionContainer>
                    <Title>{`${boards[0].match.homeSchool.name} vs ${boards[0].match.awaySchool.name}`}</Title>
                    <Subtitle>{`Date: ${boards[0].match.date.split("T")[0]}`}</Subtitle>
                    <BoardGrid boards={boards} />

                    <form className="mt-50" onSubmit={handleDeleteMatch}>
                        <Button className="pl-20 pr-20" title="Delete Match" destructive={true} />
                    </form>
                </SectionContainer>
            </div>
        )

    return (
        <div>
            <TitleBar>MSL Chess Tracker</TitleBar>
            <BackButton />
            <SectionContainer>
                <Title>{`${boards[0].match.homeSchool.name} vs ${boards[0].match.awaySchool.name}`}</Title>
                <Subtitle>{`Date: ${boards[0].match.date.split("T")[0]}`}</Subtitle>
                <BoardGrid boards={boards} />
            </SectionContainer>
        </div>
    )
}
