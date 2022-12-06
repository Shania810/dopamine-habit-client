import React  from 'react'
import { RealButton,HabitCard,HabitTitle, HabitsCard } from './commons'
import Api from '../utils/api.utils'
const Habit = ({habits,getHabit}) => {
  const deleteHabit = async (id) => {
    try {
      await Api.deleteHabit(id)
      await getHabit()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <HabitsCard>
      {habits.map((habit) => {
        return (
          <HabitCard key={habit._id} >
            <HabitTitle>{habit.title[0].toUpperCase() + habit.title.slice(1,habit.title.length)}</HabitTitle>
           {habit.description}
            <RealButton
              onClick={() => {
                deleteHabit(habit._id)
              }}
            >
              Delete
            </RealButton>
          </HabitCard>
        )
      })}
    </HabitsCard>
  )
}

export default Habit
