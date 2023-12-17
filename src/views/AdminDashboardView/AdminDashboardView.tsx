import React, {useState} from "react"
import {useLoaderData} from "react-router-dom";
import Match from "../../models/Match";

import BackButton from "../../components/interaction/BackButton";
import SectionContainer from "../../components/misc/SectionContainer";
import SectionHeader from "../../components/typography/SectionHeader";
import MatchList from "../DashboardView/components/MatchList";
import TitleBar from "../../components/misc/TitleBar";
import UserList from "./components/UserList";
import CreateUserForm from "./components/CreateUserForm";
import School from "../../models/School";
import {createMatch, createUser} from "../../api";
import CreateMatchForm from "./components/CreateMatchForm";

export default function AdminDashboardView() {
    const token = localStorage.getItem("accessToken");

    const { matches, users, schools } = useLoaderData() as { matches: Match[], users: string[], schools: School[] }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [school, setSchool] = useState("")

    const [homeSchool, setHomeSchool] = useState("")
    const [awaySchool, setAwaySchool] = useState("")
    const [date, setDate] = useState("")

    async function handleCreateUserSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(username, password, school, token)
        if (username === "" || password === "" || school === "" || !token) return

        await createUser(token, username, password, school)

        window.location.reload()
    }

    async function handleCreateMatchSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (homeSchool === "" || awaySchool === "" || date === "" || !token) return

        await createMatch(token, homeSchool, awaySchool, date)

        window.location.reload()
    }

    return (
        <div>
            <TitleBar>MSL Chess Tracker (Admin)</TitleBar>
            <BackButton to="/dashboard"/>
            <SectionContainer className="mt-20">
                <SectionHeader>Create User</SectionHeader>
                <CreateUserForm schools={schools} setUsername={setUsername} setPassword={setPassword} setSchool={setSchool} onSubmit={handleCreateUserSubmit} />
            </SectionContainer>
            <SectionContainer>
                <SectionHeader>Users</SectionHeader>
                <UserList users={users} />
            </SectionContainer>
            <SectionContainer className="mt-100">
                <SectionHeader>Create Match</SectionHeader>
                <CreateMatchForm schools={schools} setHomeSchool={setHomeSchool} setAwaySchool={setAwaySchool} setDate={setDate} onSubmit={handleCreateMatchSubmit} />
            </SectionContainer>
            <SectionContainer className="mt-20 pb-100">
                <SectionHeader>Matches</SectionHeader>
                <MatchList matches={matches} />
            </SectionContainer>
        </div>
    )
}
