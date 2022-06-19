import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useUsers from '../../../hooks/useUsers';
import BarCharts from '../BarChart/BarCharts';
import PieCharts from '../PieCharts/PieCharts';
import UserDashBoard from '../UsersOptions/UserDashBoard/UserDashBoard';


const Dashboard = () => {
    const { users } = useUsers()
    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    const dateTime = new Date().toLocaleString();

    const filterusers = users.filter(userr => userr.date == date);
    const { admin, isLoading } = useAuth()
    return (
        <div>

          
            {
                !admin ? <UserDashBoard></UserDashBoard> : <Grid container spacing={2} >
                <Grid item xs={12} md={4}>
                    <div>
                        <div className="payment-details" style={{padding:'10px'}}>
                            <h4>Cash $</h4>
                            <BarCharts></BarCharts>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <div className="piecharts" style={{padding:'10px'}}>
                            <PieCharts></PieCharts>
                        </div></div>
                </Grid>
                <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div>
                        <div className="dashboard-detail-box">
                            <div>
                                <h3>{users.length}</h3>
                                <p>Total Users</p>
                            </div>
                        </div>
                        <div className="dashboard-detail-box">
                            {

                            }
                            <div>
                                <h3>{filterusers.length}</h3>
                                <p>Registered Today</p>
                            </div>
                        </div>
                        <div className="dashboard-detail-box">
                            <div>
                                <h3>{users.length} $</h3>
                                <p>Deposits</p>
                            </div>
                        </div>
                        <div className="dashboard-detail-box">
                            <div>
                                <h3>{users.length} $</h3>
                                <p>Cashout</p>
                            </div>
                        </div>
                    </div>

                </Grid>

            </Grid>
            }

            


        </div>
    );
};

export default Dashboard;