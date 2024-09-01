import { orderCount } from '@/interface/iDate';
import { Earnings } from '@/Redux/Slices/Earnings';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

interface Iprop {
    count:orderCount[]
    text?: string,
    size?:string,
  }
//   
const TopOrder = ({ count, text , size }: Iprop) => {
   const options={
    chart: {
      height: 350,
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#f46801' , '#1e90ff'],
    dataLabels: {
      enabled: true,
    },
    

    grid: {
      borderColor: '#f46801',
      row: {
        colors: ['#f3f3f3', 'transparent'], 
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: count.map(Item => Item.name),
      labels: {
        style: {
          colors: '#f4f7fe', 
          fontSize: '12px',
        }
      }
    },
    yaxis: {
      min: 0,
      max: 320,
      labels: {
        style: {
          colors: '#f4f7fe', 
          fontSize: '12px',
        }
      }
    },
    legend: {
        position: 'top' as 'top',
        horizontalAlign: 'right' as 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5,
      }
    
  }


    
 const  series = [
    {
      name: "Count",
      data: count.map(Item => Item.count),
    }
  ]
    
  return (
    <>
    
   
    <div className="chart-container bg-lightDark pt-4  rounded-pixel overflow-hidden">
    <p className={`text-body px-6 font-extrabold text-center  text-${size} my-4`}>
                                    {text}
                                </p>
      <ReactApexChart 
        options={options}
        series={series}
        type="line"
        width="100%"
        height={350}
      />
    </div>
    
    
    
    
    
    
    
    
    </>
  )
}

export default TopOrder