import React, { useEffect } from 'react'
import apiUtils from '../utils/api.utils'
import { RealButton } from './commons'

const Habit = ({ getHabit, habits }) => {
  useEffect(() => {
    getHabit()
  })

  const deleteHabit = async (id) => {
    try {
      await apiUtils.deleteHabit(id)
      await getHabit()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {habits.map((habit) => {
        return (
          <div>
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
