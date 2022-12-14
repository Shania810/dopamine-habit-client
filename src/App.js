import './App.css'
import { Routes, Route } from 'react-router-dom'
import Challenge from './components/Challenge.js'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Home } from './pages/Home'
import { MyHabits } from './pages/MyHabits'
import { User } from './components/User'
import { MyWeeklyAnalysis } from './pages/MyWeeklyAnalysis'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/signup" element=<Signup /> />
        <Route path="/login" element=<Login /> />
        <Route path="/habit" element=<MyHabits /> />
        <Route path="/user" element=<User /> />
        <Route path="/challenge" element=<Challenge /> />
        <Route path="/analysis" element=<MyWeeklyAnalysis /> />
      </Routes>
    </div>
  )
}

export default App
