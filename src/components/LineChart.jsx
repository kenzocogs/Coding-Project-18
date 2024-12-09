import React from 'react'
import ChartComponent from './chartcomponent';

const LineChart = ({ data }) => {
    const lineChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Profits',
                data: data.profits,
                backgroundColor: 'rgba(157, 245, 210, .2)', // each chart will have different colors for variety
                borderColor: 'rgba(157,245,210,1)',
                borderWidth: 1,
            },
        ]
    }


const lineChartOptions = {
    responsive: true,
    scales: {
        
        y: {
            beginAtZero: true,
                title: {
                    display: true,
                    text: 'Profits'
                }
        },
    },
};

return <ChartComponent type="line" data={lineChartData} options={lineChartOptions}/> 


};

// exporting for main app file
export default LineChart;