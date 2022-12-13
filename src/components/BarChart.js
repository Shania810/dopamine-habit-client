import React from 'react'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

export const BarChart = ({ charData }) => {
  Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
  const labels = charData.map((habitAnalysis) => habitAnalysis.title)

  const daysCompleted = charData.map(
    (habitAnalysis) => habitAnalysis.days_completed
  )
  const data = {
    labels,
    datasets: [
      {
        label: 'completed days',
        data: daysCompleted,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Habit Analysis',
      },
    },
  }

  return (
    <Bar style={{ width: 1000, height: 200 }} options={options} data={data} />
  )
}
