import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Quiz.jsx'
import Quizapp from './components/Quizapp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Quiz />
    {/* <Quizapp /> */}
    </>
  )
}

export default App
