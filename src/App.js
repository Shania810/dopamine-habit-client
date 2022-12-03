import './App.css'
import { Routes, Route } from 'react-router-dom'
import Challenge from './components/Challenge.js'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { NavBar } from './components/NavBar.js'
import { Home } from './pages/Home'
import { MyHabits } from './pages/MyHabits'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/signup" element=<Signup /> />
        <Route path="/login" element=<Login /> />
        <Route path="/habit" element=<MyHabits /> />
        <Route path="/challenge" element=<Challenge /> />
      </Routes>
    </div>
  )
}

export default App
