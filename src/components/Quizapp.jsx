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
        <div className='min-h-screen flex justify-center items-center bg-linear-to-br from-indigo-600 to-purple-700 p-5'>
            <div className='bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 text-gray-900'>

                <h1 className='font-bold text-3xl text-center mb-6 text-indigo-700'>
                    Quiz Application
                </h1>

                {showScore ? (
                    <div className='text-center space-y-5'>
                        <h2 className='text-2xl font-semibold'>
                            Your Score: <span className="text-indigo-700">{score}</span> / {questions.length}
                        </h2>

                        <button
                            onClick={() => {
                                setCurrentQuestion(0);
                                setScore(0);
                                setShowScore(false);
                            }}
                            className='w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md text-lg font-medium transition'
                        >
                            Restart
                        </button>
                    </div>
                ) : (
                    <div className='space-y-6'>

                        <div className='text-lg font-medium'>
                            <span className="text-indigo-700 font-bold">
                                Question {currentQuestion + 1}
                            </span> / {questions.length}
                        </div>

                        <h2 className='text-2xl font-semibold'>
                            {questions[currentQuestion].question}
                        </h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(option)}
                                    className='w-full py-3 bg-gray-100 hover:bg-indigo-600 hover:text-white 
                                               rounded-lg shadow-sm text-lg transition font-medium border'
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                    </div>
                )}

            </div>
        </div>
    )
}

export default Quizapp;
