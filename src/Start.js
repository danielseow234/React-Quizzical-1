import React from "react"

export default function Start(props) {
    return (
        <div className="welc">
            <h1 className="welc-title">Quizzical</h1>
            <p className="welc-sub">This is a short quiz!</p>
            <button 
                className="welc-btn"
                onClick={props.startQuiz}
            >Start quiz</button>
        </div>
    )
}