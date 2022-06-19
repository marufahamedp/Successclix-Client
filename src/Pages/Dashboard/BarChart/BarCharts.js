import React from "react";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



const BarCharts = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
      fetch(`https://aqueous-ridge-88057.herokuapp.com/getpayment`)
          .then(res => res.json())
          .then(data => setOrders(data))
  }, [orders])

  const filterorders = orders.filter(order => order.orderStatus == "approved");
  const deposit = filterorders.map(item => item.price).reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);
    // static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

    const data = [
      {
        name: "a",
        Deposit: deposit,
    
      },
      {
        name: "b",
        Cashout: 0
    
      },
    
    ];
    
    return (
        <BarChart
        width={300}
        height={275}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}

      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Deposit" stackId="a" fill="#FABE7A" />
        <Bar dataKey="Cashout" stackId="a" fill="#F6866A" />
      </BarChart>
    );
};

export default BarCharts;