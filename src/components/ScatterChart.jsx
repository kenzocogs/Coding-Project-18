import React from 'react'
import ChartComponent from './chartcomponent';

const ScatterChart = ({ data }) => {
    const scatterChartData = {
        labels: data.expenses,
        datasets: [
            {
                label: 'Expenses & Profits',
                data: data.profits,
                backgroundColor: 'rgba(75, 192, 192, .2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ]
    }


const scatterChartOptions = {
    scales: {
        y: {
            beginAtZero: false,
            ticks: {stepsize: 50}
        },
    },
};

return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions}/> 


};

export default ScatterChart;