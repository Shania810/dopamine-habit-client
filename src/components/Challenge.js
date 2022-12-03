import React, { useEffect, useState } from 'react'
import Api from '../utils/api.utils'
import { Card } from './commons'

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
  return (
    <div>
      <h1>Challenge</h1>
      {challenges.map(({challenge,description,duration_of_challenge,frequency_recommended})=>{
        return <Card>
          <h1>{challenge}</h1>
          <p>{description}</p>
          <b>{duration_of_challenge}</b>
          <p><b>Recommend:</b>{frequency_recommended}</p>
        </Card>
      })}
    </div>
  )
}

export default Challenge
