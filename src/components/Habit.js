import React from 'react'
import { RealButton, HabitCard, HabitTitle, HabitsCard } from './commons'
import Api from '../utils/api.utils'

const Habit = ({ habits, getHabit }) => {
  const deleteHabit = async (id) => {
    try {
      await Api.deleteHabit(id)
      await getHabit()
    } catch (error) {
      console.log(error)
    }
  }

  const DaysCompletedCounter = async (habitId, days_completed) => {
    const addCompletedDay = { days_completed: days_completed + 1 }
    try {
      await Api.addCompletedDay(habitId, addCompletedDay)
      await getHabit()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HabitsCard>
      {habits.map((habit) => {
        return (
          <HabitCard key={habit._id}>
            <HabitTitle>
              {habit.title[0].toUpperCase() +
                habit.title.slice(1, habit.title.length)}
            </HabitTitle>
            {habit.description}
            <p>frequency:{habit.frequency} </p>
            <RealButton
              onClick={() => {
                deleteHabit(habit._id)
              }}
            >
              Delete
            </RealButton>
            <RealButton
              onClick={() => {
                DaysCompletedCounter(habit._id, habit.days_completed)
              }}
            >
              I did this today!
            </RealButton>
          </HabitCard>
        )
      })}
    </HabitsCard>
  )
}

export default Habit
