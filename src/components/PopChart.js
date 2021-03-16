import React from 'react';
import Chart from 'react-apexcharts';

export default function PopChart({options,series,type}) {

    return (
        <Chart
            options={options}

            series={series}
            type={type}
            height="450"
            width="100%"
        />
    )
}
