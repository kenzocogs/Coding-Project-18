import React from 'react'
import ChartComponent from './chartcomponent';

const BubbleChart = ({ data }) => {
    const bubbleChartData= {
        labels: data.months,
        datasets: [
            {
                label: 'Sales, Profits & Expenses',
                    // had to rearrange variables to match coding project requirements
                data: data.months.map((exp, index) => ({
                    x: data.expenses[index],
                    y: data.profits[index],
                    r: data.sales[index]/10
            })),
                backgroundColor: 'rgba(182, 157, 245, .2)',
                borderColor: 'rgba(182, 157, 245,1)',
                borderWidth: 1,
            },
        ]
    }

    const bubbleChartOptions = {
        responsive: true,
        scales: {
            y: {
                type: 'linear',
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Profits'
                }
            },
            x: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Expenses'
                }
            }
        },
    };
    
    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions}/> 
    
}

export default BubbleChart;
