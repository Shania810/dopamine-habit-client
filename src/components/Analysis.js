import React, { useEffect, useState } from 'react'
import Api from '../utils/api.utils'
import { SubTitle, RealButton } from './commons'

const Analysis = (props) => {
  const [analysis, setAnalysis] = useState({})
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
  console.log(analysis)

  return (
    <div>
      <SubTitle> Analysis </SubTitle>
      {}
    </div>
  )
}

export default Analysis
