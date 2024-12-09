import React from 'react'
import ChartComponent from './chartcomponent';

const BarChart = ({ data }) => {
    const barChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.sales,
                backgroundColor: 'rgba(75, 192, 192, .2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ]
    }


const barChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Sales'
            }
        },
    },
};

// using chart component with the above data
return <ChartComponent type="bar" data={barChartData} options={barChartOptions}/> 


};

// exporting for main app file
export default BarChart;