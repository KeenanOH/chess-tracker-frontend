import React from "react"
import InputBox from "../../../components/interaction/InputBox";
import School from "../../../models/School";
import Button from "../../../components/interaction/Button";

interface CreateMatchFormProps {
    schools: School[]
    setHomeSchool: React.Dispatch<React.SetStateAction<string>>
    setAwaySchool: React.Dispatch<React.SetStateAction<string>>
    setDate: React.Dispatch<React.SetStateAction<string>>
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function CreateMatchForm({ schools, setHomeSchool, setAwaySchool, setDate, onSubmit }: CreateMatchFormProps) {

    return (
        <form onSubmit={onSubmit}>
            <InputBox placeholder="Home School" choices={schools.map((school) => { return { id: school._id, value: school.name } })} onChange={setHomeSchool} />
            <InputBox className="ml-50" placeholder="Away School" choices={schools.map((school) => { return { id: school._id, value: school.name } })} onChange={setAwaySchool} />
            <InputBox type="date" className="ml-50" placeholder="Date" onChange={setDate} />
            <Button className="ml-50 pl-20 pr-20" title="Create Match" />
        </form>
    )
}
