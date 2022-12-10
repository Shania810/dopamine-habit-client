import React, { useEffect, useState } from 'react'
import Api from '../utils/api.utils'
import { BarChart } from './BarChart'
import { SubTitle } from './commons'
import { Loading } from './Loading'

const Analysis = () => {
  const [analysis,setAnalysis] = useState({})
  const [habitAnalysis,setHabitAnalysis] = useState([])
  const now = new Date()
  const dateConclusion = new Date(analysis[0]?.createdAt)
  dateConclusion.setDate(dateConclusion.getDate())
  const runAnalysis = async () => {
    try {
      const data = await Api.getAnalysis()
      setAnalysis(data)
      setHabitAnalysis(data[0].habits)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    runAnalysis()
  }, [])
  return Object.keys(analysis).length === 0 ? <Loading/>:
    <div>
      <SubTitle> Analysis </SubTitle>
      {now.getDate() === dateConclusion.getDate() && <BarChart charData={habitAnalysis} />}
    </div>
  
}

export default Analysis
