import { Earnings } from '@/Redux/Slices/Earnings';
import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Keep only one import for ReactApexChart

interface Iprop {
  current: Earnings[],
  last: Earnings[],
  text?: string,
  size?:string,
  x?:string,
  y?:string,
}

const Charts = ({ current, last, text , size , y,x }: Iprop) => {

  const chartOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: current.map(Item => Item.week),
      labels: {
        style: {
          colors: '#f4f7fe', // Change x-axis label color
          fontSize: '12px',
        }
      }
    },
    yaxis:{
        labels: {
            style: {
              colors: '#f4f7fe', // Change y-axis label color
              fontSize: '12px',
            }
          }
    },
   
    colors: ['#f46801' , '#1e90ff'],
    legend: {
      labels: {
        colors: ['#f46801', '#1e90ff'], // Change legend color
        useSeriesColors: true,
      }
    }, // Customize the color of the bars
  };

  const chartSeries = [
    {
    name:x, // Provide a name for the series
    data: current.map(Item => Item.amount),
    color:"#f46801"
  },
  {
    name:y, // Provide a name for the series
    data: last.map(Item => Item.amount),
    color:"#1e90ff"
  }
];

  return (
    <div className="chart-container bg-lightDark pt-4  rounded-pixel">
      <p className={`text-body px-6 font-extrabold text-center  text-${size} my-4`}>
                                    {text}
                                </p>
      <ReactApexChart 
        options={chartOptions}
        series={chartSeries}
        type="area"
        width="100%"
        height={350}
      />
    </div>
  );
};

export default Charts;
