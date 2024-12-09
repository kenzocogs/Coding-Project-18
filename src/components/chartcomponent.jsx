import React, { useEffect, useRef } from 'react';
import Chart from 'Chart.js/auto';

// defining chart component
const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        };

        // creating chart instance
    chartInstanceRef.current = new Chart (ctx, {
        type,
        data,
        options,
    });

    return () => {
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
            chartInstanceRef.current = null;
        }
    };

    }, [type, data, options]);

    // creating HTML element for chart
        return <canvas ref={chartRef}></canvas>;
};

// exporting for reuse in different types of charts
export default ChartComponent; 