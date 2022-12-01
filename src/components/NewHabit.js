import React, { useState } from 'react'
import apiUtils from '../utils/api.utils'

export const NewHabit = () => {
  const [description, setDescription] = useState(' ')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const addNewHabit = {
      description,
    }

    console.log(addNewHabit)
    await apiUtils.addNewHabit(addNewHabit)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button> + </button>
    </form>
  )
}
