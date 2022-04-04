import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [chart, setChart] = useState([]);
    
    useEffect(() => {
        fetch(`chart.json`)
        .then(res => res.json())
        .then(data => setChart(data))
    }, [])

    console.log(chart)

    return (
        <div className="dashboard-container">
            <div className="container">
                <h1>Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;
