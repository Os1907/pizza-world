import { Earnings } from '@/Redux/Slices/Earnings';
import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Keep only one import for ReactApexChart

interface Iprop {
  current: Earnings[],
  last: Earnings[],
  text?: string
}

const Charts = ({ current, last, text }: Iprop) => {

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
    title: {
      text,
      align: undefined,
      style: {
        fontSize: '20px',
        color: '#f4f7fe',
        fontWeight: "500",
      },
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
    name:"Current month", // Provide a name for the series
    data: current.map(Item => Item.amount),
    color:"#f46801"
  },
  {
    name:"Last month", // Provide a name for the series
    data: last.map(Item => Item.amount),
    color:"#1e90ff"
  }
];

  return (
    <div className="chart-container bg-lightDark pt-4  rounded-pixel">
      <p className='text-body px-6 font-extrabold text-center  text-xl  my-4'>
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
