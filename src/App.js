import React from "react"
import Start from "./Start"
import Main from "./Main"

export default function App() {
    const [play, setPlay] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    
    var decodeHTML = function (html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    
    function shuffle(oldArray, additional) {
        oldArray.push(additional)
        let array = oldArray.map(
            x => decodeHTML(x)
        )
        let currentIndex = array.length, randomIndex;
        
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    
    function startup(data) {
        const newQuestions = data.map(
            item => { return({
                question: decodeHTML(item.question),
                options: shuffle(item.incorrect_answers, item.correct_answer),
                answer: decodeHTML(item.correct_answer),
                selected: ""
            })}
        )
        setQuestions(newQuestions)
    }
    
    function updateSelect(ques, sel){
        setQuestions(
            prevQuestions => prevQuestions.map(
                item => item.question === ques ?
                {...item, selected: sel} :
                {...item}
            )
        )
    }
    
    React.useEffect(
        () => {
            fetch("https://opentdb.com/api.php?amount=5&category=31&difficulty=medium&type=multiple")
                .then(res => res.json())
                .then(data => startup(data.results))
        }, []
    )
    
    function startQuiz() {
        setPlay(() => true)
    }
    
    return (
        play ? <Main questions={questions} updateSelect={updateSelect} /> : <Start startQuiz={startQuiz} />
    )
}