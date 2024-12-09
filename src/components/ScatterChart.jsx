import React from 'react'
import ChartComponent from './chartcomponent';

const ScatterChart = ({ data }) => {
    const scatterChartData = {
        labels: data.expenses,
        datasets: [
            {
                label: 'Expenses & Profits',
                data: data.profits,
                backgroundColor: 'rgba(255, 89, 75, .2)',
                borderColor: 'rgba(200 ,89,75,1)',
                borderWidth: 1,
            },
        ]
    }


const scatterChartOptions = {
    scales: {
        y: {
            beginAtZero: false,
            ticks: {stepsize: 20},
            title: {
                display: true,
                text: 'Profits'
            }
        },
        x: {
            title: {
                display: true,
                text: 'Expenses'
            }
        }
    },
};

return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions}/> 


};

export default ScatterChart;