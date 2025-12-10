import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Quiz.jsx'
import Quizapp from './components/Quizapp.jsx'
import StartQuiz from './components/StartQuiz.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartQuiz/>}/>
      <Route path='/quiz' element={<Quizapp/>}/>
    </Routes>
   
    </BrowserRouter>
    </>
  )
}

export default App
