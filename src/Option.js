import React from "react"

export default function Option(props) {
    
    function checkStatus() {
        if (props.submit === false) {
            if (props.option === props.selected) {
                return "ques-option ques-option-highlight"
            } else {
                return "ques-option"
            }      
        } else {
            if (props.option === props.answer) {
                return "ques-option ques-option-correct"
            } else if (props.option === props.selected) {
                return "ques-option ques-option-wrong"
            } else {
                return "ques-option ques-option-none"
            }   
        }
    }
    
    return (
        <button
            className = {checkStatus()}
            onClick = {props.submit ? null : props.handleClick}
        >
            {props.option}
        </button>
    )
}