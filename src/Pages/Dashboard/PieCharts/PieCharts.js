import { Grid } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import useUsers from "../../../hooks/useUsers";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
const PieCharts = () => {
    const { users } = useUsers();
    
    const filteractive = users.filter(userr => userr.status == 'Active');
    const filterinactive = users.filter(userr => userr.status == 'Inactive');
    const filtersuspended = users.filter(userr => userr.status == 'Suspend');
    const filterunverified = users.filter(userr => userr.nidVerification.toLowerCase() == 'unverified');
    const data = [
        { name: "Group A", value: filteractive.length },
        { name: "Group B", value: filterinactive.length },
        { name: "Group C", value: filtersuspended.length },
        { name: "Group D", value: filterunverified.length }
    ];
    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <div className="cart-details">
                        <h4>User State</h4>
                        <div className="piechart-userdetails">
                           <div>
                           <div className="piechart-userdetail">
                                <div className="pieicons">
                                    <div className="pieicon" style={{backgroundColor:'#0088FE'}}>

                                    </div>
                                    <div className="pieicontext">
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>{filteractive.length}</h6>
                            </div>
                            <div className="piechart-userdetail">
                                <div className="pieicons">
                                    <div className="pieicon"  style={{backgroundColor:'#00C49F'}}>

                                    </div>
                                    <div className="pieicontext">
                                        <p>Inactive</p>
                                    </div>
                                </div>
                                <h6>{filterinactive.length}</h6>
                            </div>
                            <div className="piechart-userdetail">
                                <div className="pieicons">
                                    <div className="pieicon"  style={{backgroundColor:'#FFBB28'}}>

                                    </div>
                                    <div className="pieicontext">
                                        <p>Suspended</p>
                                    </div>
                                </div>
                                <h6>{filtersuspended.length}</h6>
                            </div>
                            <div className="piechart-userdetail">
                                <div className="pieicons">
                                    <div className="pieicon"  style={{backgroundColor:'#FF8042'}}>

                                    </div>
                                    <div className="pieicontext">
                                        <p>Un-verified</p>
                                    </div>
                                </div>
                                <h6>{filterunverified.length}</h6>
                            </div>
                           </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                <div className="piechart">
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            cx={150}
                            cy={140}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                </Grid>

            </Grid>



        </div>
    );
};

export default PieCharts;