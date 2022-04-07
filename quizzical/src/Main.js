import React from "react"
import { nanoid } from "nanoid"
import Options from "./Options"

export default function Main(props) {
    const [submit, setSubmit] = React.useState(false)
    const [score, setScore] = React.useState(0)

    const questionElements = props.questions.map(
        item => 
            <div key={nanoid()}>
                <h3 className="ques-ques">{item.question}</h3>
                <Options 
                    question={item.question}
                    options={item.options} 
                    answer={item.answer}
                    selected={item.selected}
                    submit={submit}
                    updateSelected={props.updateSelect}
                />
                <hr className="ques-line" />
            </div>
    )
    
    function markQuiz() {
        setSubmit(true)
        props.questions.map(
            item => item.answer === item.selected ? 
            setScore(prev => prev + 1) :
            null
        )
    }
    
    function refreshPage() {
        window.location.reload(false);
    }
    
    return (
        <div className="ques-div">
            {questionElements}
            {submit && <div className="sub-div">
                <h2 className="sub-score">You scored {score}/5 answers!</h2>
                <button className="sub-btn" onClick={refreshPage}>Play again</button>
            </div>}
            {!submit &&
                <button className="ques-final" onClick={markQuiz}>Submit</button>
            }
        </div>
    )
}