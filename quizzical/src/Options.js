import React from "react"
import { nanoid } from "nanoid"
import Option from "./Option"

export default function Options(props) {  
    const optionsElements = props.options.map(
        option => <Option 
            key = {nanoid()}
            question = {props.question}
            option = {option}
            handleClick = {() => props.updateSelected(props.question, option)}
            answer = {props.answer}
            submit = {props.submit}
            selected = {props.selected}
        />
    )
    
    return (
        <div>{optionsElements}</div>
    )
}