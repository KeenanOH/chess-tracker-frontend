import React from "react"

import "./InputBox.css"

interface InputChoice {
    id: string
    value: string
}

interface InputBoxProps {
    placeholder: string
    onChange:  React.Dispatch<React.SetStateAction<string>>
    className?: string
    type?: string
    choices?: InputChoice[]
    initialValue?: string
}

export default function InputBox({ placeholder, onChange, className, type, choices, initialValue }: InputBoxProps) {
    if (initialValue)
        return (
            <input
                type={type ? type : "text"}
                className={"input-box" + (className ? ` ${className}` : "")}
                placeholder={placeholder}
                value={initialValue}
                onChange={(element) => { onChange(element.target.value) }}
            />
        )

    if (!choices)
        return (
            <input
                type={type ? type : "text"}
                className={"input-box" + (className ? ` ${className}` : "")}
                placeholder={placeholder}
                onChange={(element) => { onChange(element.target.value) }}
            />
        )

    return (
        <select
            className={"input-box" + (className ? ` ${className}` : "")}
            onChange={(element) => { onChange(element.target.value)} }
            defaultValue={placeholder}
        >
            <option key={placeholder} disabled hidden>{placeholder}</option>

            { choices.map((choice) => {
                return <option key={choice.id} value={choice.id}>{choice.value}</option>
            }) }
        </select>
    )
}
