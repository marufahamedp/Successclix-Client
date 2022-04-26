import axios from 'axios';
import React, { useState } from 'react';
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
            <button onClick={handelsend}>submit</button>
        </div>
    );
};

export default Dashboard;