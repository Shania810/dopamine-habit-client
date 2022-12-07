import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Api from '../utils/api.utils'
import { SubTitle, RealButton } from './commons'

const Analysis = (props) => {
  const [analysis, setAnalysis] = useState([])
  const runAnalysis = async () => {
    try {
      const data = await Api.getAnalysis()
      setAnalysis(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    runAnalysis()
  }, [])

  return (
    <div>
      <SubTitle> Analysis </SubTitle>
      {analysis((analysis) => {
        return <RealButton onClick={() => {}}></RealButton>
      })}
    </div>
  )
}

export default Analysis
