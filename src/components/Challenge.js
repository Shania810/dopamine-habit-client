import React, { useEffect, useState } from 'react'
import Api from '../utils/api.utils'

const Challenge = (props) => {
  const [challenges, setChallenges] = useState([])
  const getChallenge = async () => {
    try {
      const data = await Api.getChallenges()
      setChallenges(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChallenge()
  }, [])
  console.log(challenges)
  return (
    <div>
      <h1>Challenge</h1>
    </div>
  )
}

export default Challenge
