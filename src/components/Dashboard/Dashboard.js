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
                </div>

                <div className="chart-item">
                    <h3>Year Wise Investment</h3>
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
                            dataKey="investment"
                            stroke="#fbd602"
                            fill="#fbd602"
                        />
                    </AreaChart>
                </div>

                <div className="chart-item">
                    <h3>Investment</h3>
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
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="investment" fill="#fbd602" />
                    </BarChart>
                </div>

                <div className="chart-item">
                    <h3>Sells</h3>
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
                            <Pie data={chart} dataKey="sell" fill="#fbd602" />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
