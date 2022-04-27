import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Platform from 'react-platform-js'

const Dashboard = () => {
   
    const [users, setUsers] = useState([]);

   const os = Platform.OS // OS name, Mac OS
   const osVersion = Platform.OSVersion // OS version, 10.11
   const browser = Platform.Browser // Browser name, Chrome
   const browserVersion = Platform.BrowserVersion // Browser Version
   const engine = Platform.Engine // browser engine name
   // and ...
   const cpu = Platform.CPU
   const deviceType = Platform.DeviceType
   const deviceModel = Platform.DeviceModel
   const deviceVendor = Platform.DeviceVendor
   const ua = Platform.UA
   const [location, setlocation] = useState([]);
   useEffect(()=>{
     fetch(`https://ipinfo.io/json?token=bbf0b81c5263d3`)
     .then(res=>res.json())
     .then(data=>{
         console.log(data)
         setlocation(data);
     })
   }, [])



   
const dateTime =   new Date().toLocaleString();







    const handelsend = e => {
        e.preventDefault()
        

    }

    return (
        <div>
            <h1>{os}</h1>
            <h1>{osVersion}</h1>
            <h1>{browser}</h1>
            <h1>{browserVersion}</h1>
            <h1>{engine}</h1>
            <h1>{cpu}</h1>
            <h1>{deviceType}</h1>
            <h1>{deviceModel}</h1>
            <h1>{deviceVendor}</h1>
            <h1>{ua}</h1>
            <h1>{location.ip}</h1>
            <h1>{location.city}</h1>
            <h1>{location.region}</h1>
            <h1>{location.country}</h1>
            <h1>{location.loc}</h1>
            <h1>{location.org}</h1>
            <h1>{location.poltal}</h1>
            <h1>{location.timezone}</h1>
            <h1>{dateTime}</h1>
            
            <button onClick={handelsend}>submit</button>
        </div>
    );
};

export default Dashboard;