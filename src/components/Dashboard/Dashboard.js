import React, { useEffect, useState } from 'react';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [chart, setChart] = useState([]);

    useEffect(() => {
        fetch(`chart.json`)
            .then((res) => res.json())
            .then((data) => setChart(data));
    }, []);

    console.log(chart);

    return (
        <div className="dashboard-container">
            <div className="container">
                <div className="chart-item">
                    <h3>Year Wise Sell</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            width={500}
                            height={300}
                            data={chart}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="sell"
                                stroke="#fbd602"
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-item">
                    <h3>Year Wise Revenue</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            width={500}
                            height={300}
                            data={chart}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="sell" />
                            <YAxis />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#fbd602"
                                fill="#fbd602"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-item">
                    <h3>Investment Vs Revenue</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            width={500}
                            height={300}
                            data={chart}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />

                            <Bar dataKey="investment" fill="#fbd602" />
                            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-item">
                    <h3>Investment Vs Revenue</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart
                            width={400}
                            height={300}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <Pie
                                data={chart}
                                dataKey="revenue"
                                outerRadius={70}
                                fill="#fbd602"
                            />
                            <Pie
                                data={chart}
                                dataKey="investment"
                                innerRadius={80}
                                outerRadius={110}
                                fill="#82ca9d"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
