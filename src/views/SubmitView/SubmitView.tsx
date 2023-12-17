import React, {useState} from "react";
import TitleBar from "../../components/misc/TitleBar";
import {useLoaderData, useNavigate} from "react-router-dom";
import {updateBoard} from "../../api";
import {PopulatedBoard} from "../../models/Board";
import FatButton, {FatButtonColor} from "../../components/interaction/FatButton";
import InputBox from "../../components/interaction/InputBox";
import BackButton from "../../components/interaction/BackButton";
import Title from "../../components/typography/Title";
import Subtitle from "../../components/typography/Subtitle";
import SectionContainer from "../../components/misc/SectionContainer";
import Label from "../../components/typography/Label";
import VerticalStack from "../../components/misc/VerticalStack";

export default function SubmitView() {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate()
    const { board } = useLoaderData() as { board: PopulatedBoard }

    const [homePlayer, setHomePlayer] = useState(board.homePlayer)
    const [awayPlayer, setAwayPlayer] = useState(board.awayPlayer)
    const [result, setResult] = useState(board.result)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        if (!token || !board._id) return
        e.preventDefault()
        await updateBoard(token, board._id, homePlayer, awayPlayer, result)

        navigate(-1)
    }

    return (
        <div>
            <TitleBar>MSL Chess Tracker</TitleBar>
            <BackButton />

            <SectionContainer>
                <Title>Submit Results</Title>
                <Subtitle>{`Board ${board.rank}`}</Subtitle>

                <form onSubmit={handleSubmit}>

                    <div className="flex">
                        <VerticalStack>
                            <Label>Home Player</Label>
                            <InputBox placeholder="Home Player" initialValue={homePlayer} onChange={setHomePlayer} />
                        </VerticalStack>

                        <VerticalStack className="ml-50">
                            <Label>Away Player</Label>
                            <InputBox placeholder="Away Player" initialValue={awayPlayer} onChange={setAwayPlayer} />
                        </VerticalStack>
                    </div>

                    <div className="mt-50">
                        <FatButton title={`${board.match.homeSchool.name} won`} color={FatButtonColor.green} action={() => { setResult("home") }} />
                        <FatButton title="Draw" color={FatButtonColor.gray} action={() => { setResult("draw") }} />
                        <FatButton title={`${board.match.awaySchool.name} won`} color={FatButtonColor.blue} action={() => { setResult("away") }} />
                    </div>
                </form>
            </SectionContainer>
        </div>
    )
}
