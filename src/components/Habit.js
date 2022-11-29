import React, { useEffect, useState } from 'react'
import Api from '../utils/api.utils'

const Habit = (props) => {
  const [habits, setHabits] = useState([])
  const getHabit = async () => {
    try {
      const data = await Api.getHabits()
      setHabits(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHabit()
  }, [])
  console.log(habits)
  return (
    <div>
      <h1>Habit</h1>
    </div>
  )
}

export default Habit
