import React from 'react'
import { Link } from 'react-router-dom'

const StartQuiz = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
        <Link to= '/quiz'>
        <h1 className='font-bold text-2xl border w-80 h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 text-white'>Start Quiz</h1>
        </Link>
    </div>
  )
}

export default StartQuiz 