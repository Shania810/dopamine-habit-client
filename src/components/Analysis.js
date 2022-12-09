import React, { useEffect, useState } from 'react'
import Api from '../utils/api.utils'
import { BarChart } from './BarChart'
import { SubTitle } from './commons'

const Analysis = (props) => {
  //const [analysis, setAnalysis] = useState({})
  const [habitAnalysis,setHabitAnalysis] = useState([])
  const runAnalysis = async () => {
    try {
      const data = await Api.getAnalysis()
      //setAnalysis(data)
      setHabitAnalysis(data[0].habits)
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
      <BarChart charData={habitAnalysis} />
    </div>
  )
}

export default Analysis
