import React from 'react'
import ChartComponent from './chartcomponent';

const LineChart = ({ data }) => {
    const lineChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Profits',
                data: data.profits,
                backgroundColor: 'rgba(157, 245, 210, .2)',
                borderColor: 'rgba(157,245,210,1)',
                borderWidth: 1,
            },
        ]
    }


const lineChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

return <ChartComponent type="line" data={lineChartData} options={lineChartOptions}/> 


};

export default LineChart;