"use client";

import React from 'react';
import styles from '../Css/LeaveTable.module.css';

interface LeaveTableProps {
  data: {
    labels: string[];
    used: number[];
    remaining: number[];
  };
}

const LeaveTable: React.FC<LeaveTableProps> = ({ data }) => {
  const leaveData = data.labels.map((label, index) => ({
    type: label,
    total: (data.used[index] + data.remaining[index]).toFixed(2),
    used: data.used[index].toFixed(2),
    remain: data.remaining[index].toFixed(2),
  }));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Leave Type</th>
          <th>Total</th>
          <th>
            <span className={styles.squareYellow}></span>Used
          </th>
          <th>
            <span className={styles.squareCyan}></span>Remain
          </th>
        </tr>
      </thead>
      <tbody>
        {leaveData.map((leave, index) => (
          <tr key={index}>
            <td>{leave.type}</td>
            <td>{leave.total} days</td>
            <td>
          
              {leave.used} days
            </td>
            <td>
             
              {leave.remain} days
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaveTable;
