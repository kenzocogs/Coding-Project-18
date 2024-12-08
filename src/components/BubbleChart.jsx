import React from 'react'
import ChartComponent from './chartcomponent';

const BubbleChart = ({ data }) => {
    const bubbleChartData= {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.expenses.map((expense, index) => ({
                    x: expense,
                    y: data.profits[index],
                    r: data.sales[index]/10
            })),
                backgroundColor: 'rgba(75, 192, 192, .2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ]
    }

    const bubbleChartOptions = {
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };
    
    return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions}/> 
    


}
