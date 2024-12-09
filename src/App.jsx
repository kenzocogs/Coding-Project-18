import React, { useState, useEffect } from 'react'
import './App.css'
// importing chart types
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart'


function App() {
  // storing fetched data
  const [chartData, setChartData] = useState(null);

  // fetching data from json file
  useEffect(() => {
    fetch('public/financial_data.json')
    .then((response) => response.json())
    .then((data) => setChartData(data));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>
  };

  // formatting app with title & charts
    return (
    <div style={{ textAlign: 'center'}}>
      <h1> Dynamic Charts with React and Chart.js</h1> 
      <BarChart data ={chartData} />
      <LineChart data ={chartData} />
      <ScatterChart data ={chartData} />
      <BubbleChart data ={chartData} />
      </div>
    );
  }

export default App;
