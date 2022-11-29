import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const NewHabit = () => {
  const [description, setDescription] = useState(' ')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const addNewHabit = {
      description,
    }

    console.log(addNewHabit)
    try {
      const { data } = await axios.post('http://localhost:6000', addNewHabit)
      const id = data.ops[0]._id
      navigate(`/habit/${id}`)
    } catch (error) {
      console.log(error)
    }
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
