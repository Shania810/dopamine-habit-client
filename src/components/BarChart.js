import React from 'react'
import { Chart,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
export const BarChart = ({charData}) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
 const data = {
    labels: charData.map((habitAnalysis) => habitAnalysis.title ),
    datasets:charData.map((habitAnalysis)=>{ return{label: habitAnalysis.title,data:[habitAnalysis.days_completed],backgroundColor:'rgba(255, 99, 132, 0.5)'}})
}
console.log(data)
 const options = {
    responsive:true,
    plugins:{
        legend:{
            position:'top'
        },
        title:{
            display:true,
            text: 'Analysis of the habits'
        }
    }
}
    return (
      <Bar style={{width:1000,height:200}} options={options} data={data}/>
    )
  }
  

