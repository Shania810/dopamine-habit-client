import React  from 'react'
import { RealButton } from './commons'
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
    <div>
      {habits.map((habit) => {
        return (
          <div key={habit._id} >
            <p>
              {habit.title} {habit.description}
            </p>
            <RealButton
              onClick={() => {
                deleteHabit(habit._id)
              }}
            >
              Delete
            </RealButton>
          </div>
        )
      })}
    </div>
  )
}

export default Habit
