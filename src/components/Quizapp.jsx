import React from 'react'
  const questions = [
        {
            question: "World's largest ocean kaunsa hai?",
            options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "Pakistan ka national fruit kya hai?",
            options: ["Mango", "Apple", "Banana", "Orange"],
            answer: "Mango"
        },
        {
            question: "Earth ka rotation kis direction me hota hai?",
            options: ["East to West", "West to East", "North to South", "South to North"],
            answer: "West to East"
        },
        {
            question: "Human body me sabse bada organ kaunsa hai?",
            options: ["Heart", "Skin", "Liver", "Lungs"],
            answer: "Skin"
        },
        {
            question: "2024 me Summer Olympics kahan hone wale hain?",
            options: ["Tokyo, Japan", "Paris, France", "Los Angeles, USA", "Beijing, China"],
            answer: "Paris, France"
        }
    ];

const Quizapp = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);

    function handleClick(option) {
        console.log(option);
        if (option === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        const next = currentQuestion + 1;
        if (next < questions.length) {
            setCurrentQuestion(next);
        } else {
            setShowScore(true);
        }
    }

    return (
        <div>
            <h1>Quiz Application</h1>
                    <h2>Your Score: {score} / {questions.length}</h2>   

            {showScore ? (
                <div>
                    <h2>Your Score: {score} / {questions.length}</h2>   
                    <button onClick={() => {
                        setCurrentQuestion(0);
                        setScore(0);
                        setShowScore(false);
                    }}>Restart</button>
                </div>
            ) : 
            <div>
                <h2>{questions[currentQuestion].question}</h2>
                <div>
                    {questions[currentQuestion].options.map((option, index) => (
                        <button key={index} onClick={()=>handleClick(option)}>{option}</button>
                    ))}
                </div>
            </div>}
        </div>
    )
}

export default Quizapp