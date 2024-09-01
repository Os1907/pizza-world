import { Items } from '@/helper/Items/Items';
import { Earnings } from '@/Redux/Slices/Earnings';
import React from 'react';
import ReactApexChart from 'react-apexcharts'; // Keep only one import for ReactApexChart

interface Iprop {
  current: Earnings[],
  last: Earnings[],
  text?: string
}

const TinyBarChart = ({ current, last, text }: Iprop) => {

  const chartOptions =  {
    chart: {
      id: 'basic-bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
        borderRadius: 8,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
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
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val:number) {
          return  val + " EGP"
        },
      }
    },
   
   
    colors: ['#f46801' , '#1e90ff'], 
    legend: {
      labels: {
        colors: ['#f46801', '#1e90ff'], 
        useSeriesColors: true,
      }
    }, 
  }



  const chartSeries = [
    {
    name:"Revenue", 
    data: current.map(Item => Item.amount),
    color:"#f46801"
  },
  {
    name:"Expenses", 
    data: last.map(Item => Item.amount),
    color:"#1e90ff"
  }
];

  return (
    <div className="chart-container bg-lightDark pt-4  rounded-pixel">
      <p className='text-body px-6 font-extrabold text-center  text-base  my-4'>
        {text}
                                </p>
      <ReactApexChart 
        options={chartOptions}
        series={chartSeries}
        type="bar"
        width="100%"
        height={350}
      />
    </div>
  );
};

export default TinyBarChart;
