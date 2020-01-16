import React,{ useState, useEffect } from 'react';
import {ChartFetcher} from '../../../api/chartFetcher'

import Chart from '../Components/barChart.js';

const ChartContainer =()=>{
const [chartData, setChartData]=useState([]);

const data=chartData;
const arr=[data];
console.log("Amount", arr)
console.log("ChartData",chartData);
    const ChartFetch=()=>{
        ChartFetcher((err,data)=>{
            
            setChartData(data.payload);
          
        });
    };
    useEffect(() =>{
        ChartFetch();
    },[]);

    return(
        <div style={{ width: 'auto', height: 800 }}>
            <h2 className="text-center">Inventory Amount</h2>
           <Chart data={data} />
        </div>
    )
}
export default ChartContainer
