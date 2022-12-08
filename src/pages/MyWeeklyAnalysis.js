import React from 'react'
import Analysis from '../components/Analysis'
import { PositionContainer } from '../components/commons'

export const MyWeeklyAnalysis = () => {
  return (
    <PositionContainer>
      <p> here's your graph for the week </p>
      <Analysis/>
    </PositionContainer>
  )
}
