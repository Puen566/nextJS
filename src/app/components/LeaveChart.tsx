// components/LeaveChart.tsx
"use client";

import React from 'react';
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from '../Css/LeaveChart.module.css';

ChartJS.register(LinearScale, CategoryScale, BarElement, Tooltip, Legend);

interface LeaveChartProps {
  data: {
    labels: string[];
    used: number[];
    remaining: number[];
  };
}

const LeaveChart: React.FC<LeaveChartProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Used',
        data: data.used,
        backgroundColor: 'yellow',
      },
      {
        label: 'Remaining',
        data: data.remaining,
        backgroundColor: 'cyan',
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    scales: {
      x: {
        beginAtZero: true,
        type: 'linear' as const,
      },
      y: {
        type: 'category' as const,
      },
    },
  };

  return <div className={styles.chart}><Bar data={chartData} options={options} /></div>;
};

export default LeaveChart;
