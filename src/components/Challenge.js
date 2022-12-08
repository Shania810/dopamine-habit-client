import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api.utils'
import {
  Card,
  ChallengeDescription,
  ChallengeDuration,
  ChallengeRec,
  ChallengeRecommendation,
  ChallengeTitle,
  PositionContainer,
  RealButton,
  SubTitle,
} from './commons'

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

  const sendToMyHabit = useNavigate()
  const addChallengeToHabits = async (challenge, description, frequency) => {
    const habit = {
      title: challenge,
      description,
      frequency,
    }
    try {
      await Api.addNewHabit(habit)
      sendToMyHabit('/habit')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChallenge()
  }, [])

  return (
    <PositionContainer>
      <SubTitle>Challenges</SubTitle>
      {challenges.map((challenge) => {
        return (
          <Card key={challenge._id}>
            <ChallengeTitle>{challenge.challenge}</ChallengeTitle>
            <ChallengeDescription>{challenge.description}</ChallengeDescription>
            <ChallengeDuration>
              {challenge.duration_of_challenge}
            </ChallengeDuration>
            <ChallengeRec>
              <ChallengeRecommendation>Recommended: </ChallengeRecommendation>
              {challenge.frequency_recommended}
            </ChallengeRec>
            <RealButton
              onClick={() => {
                addChallengeToHabits(
                  challenge.challenge,
                  challenge.description,
                  challenge.frequency_recommended
                )
              }}
            >
              Turn this challenge into a habit!
            </RealButton>
          </Card>
        )
      })}
    </PositionContainer>
  )
}

export default Challenge
