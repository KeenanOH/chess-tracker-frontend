import React from "react"
import InputBox from "../../../components/interaction/InputBox";
import School from "../../../models/School";
import Button from "../../../components/interaction/Button";

interface CreateUserFormProps {
    schools: School[]
    setUsername: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setSchool: React.Dispatch<React.SetStateAction<string>>
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function CreateUserForm({ schools, setUsername, setPassword, setSchool, onSubmit }: CreateUserFormProps) {

    return (
        <form onSubmit={onSubmit}>
            <InputBox placeholder="Username" onChange={setUsername} />
            <InputBox className="ml-50" placeholder="Password" onChange={setPassword} />
            <InputBox className="ml-50" placeholder="School" choices={schools.map((school) => { return { id: school._id, value: school.name } })} onChange={setSchool} />
            <Button className="ml-50 pl-20 pr-20" title="Create User" />
        </form>
    )
}
