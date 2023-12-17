import React, { useState } from 'react';
import './LoginView.css';
import {login} from "../../api";
import InputBox from "../../components/interaction/InputBox";
import Button from "../../components/interaction/Button";

export default function LoginView() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const token = await login(username, password)
        localStorage.setItem("accessToken", token)

        window.location.reload()
    }

    return (
        <div>
            <div className='center' id='login-box'>
                <div className='vertical-stack'>
                    <img src='/pawn-icon.png' alt='pawn-icon' id='pawn-image' />
                    <h1 id='login-title-text'>MSL Chess Tracker</h1>
                </div>

                <form className='vertical-stack' onSubmit={handleLoginSubmit}>
                    <InputBox placeholder="Username" onChange={setUsername} />
                    <InputBox className="mt-10 mb-20" placeholder="Password" onChange={setPassword} type="password" />

                    <Button title="Login" />
                </form>
            </div>
            <div id='gradient'></div>
        </div>
    )
}
