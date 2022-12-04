import React, { useEffect, useState } from 'react'
// import apiUtils from '../utils/api.utils'
import Api from '../utils/api.utils'
import {
  Card,
  ChallengeDescription,
  ChallengeDuration,
  ChallengeRec,
  ChallengeRecommendation,
  ChallengeTitle,
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

  //   const chooseOneChallenge = async (id) => {
  //     try {
  //       await apiUtils.getOneChallenge(id)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   const addChallengeToHabits = async (id) => {
  //     try {
  //       await chooseOneChallenge()
  //       await apiUtils.challengeToHabit(id)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  useEffect(() => {
    getChallenge()
  }, [])

  return (
    <div>
      <SubTitle> Challenges </SubTitle>
      {challenges.map(
        ({
          challenge,
          description,
          duration_of_challenge,
          frequency_recommended,
        }) => {
          return (
            <Card>
              <ChallengeTitle>{challenge}</ChallengeTitle>
              <ChallengeDescription>{description}</ChallengeDescription>
              <ChallengeDuration>{duration_of_challenge}</ChallengeDuration>
              <ChallengeRec>
                <ChallengeRecommendation>Recommended: </ChallengeRecommendation>
                {frequency_recommended}
              </ChallengeRec>
              <RealButton
              // onClick={() => {
              //   addChallengeToHabits(addChallengeToHabits)
              // }}
              >
                Turn this challenge into a habit!
              </RealButton>
            </Card>
          )
        }
      )}
    </div>
  )
}

export default Challenge
