import React, { useState, useEffect } from 'react'
import './App.css'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart'


function App() {
  const [chartData, setChartData] = useState(null)
    useEffect (() => {
      fetch('/financial_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data));
    }, []);
  
  if (!chartData) {
    return <div style={{ textAlign: 'center'}}>
      <h1> Dynamic Charts with React and Chart.js</h1> 
      <BarChart data ={chartData} />
      <LineChart data ={chartData} />
      <ScatterChart data ={chartData} />
      <BubbleChart data ={chartData} />
      </div>
  }
}

export default App;
