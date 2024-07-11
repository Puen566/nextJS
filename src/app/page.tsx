"use client";

import React from 'react';
import Header from './components/Header';
import LeaveSummaryCard from './components/LeaveSummaryCard';
import LeaveChart from './components/LeaveChart';
import LeaveTable from './components/LeaveTable';
import styles from './Home.module.css';
import Top from './components/topheader';
import { faSuitcaseRolling, faHouseMedical, faUmbrellaBeach, faFlagUsa, faBabyCarriage, faChurch, faVihara, faUser, faUserAltSlash, faUserLock, faHomeUser, faUsersBetweenLines, faUsersLine } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  const leaveData = {
    labels: ['Personal Leave', 'Sick Leave', 'Vacation Leave', 'Military Leave', 'Maternity Leave/Parental Leave', 'Ordination Leave(Buddhist)', 'Ordination Leave(Islam)'],
    used: [11, 10, 6.5, 14, 69, 30, 90],
    remaining: [4, 20, 5.5, 286, 21, 60,90],
  };

  return (
    <div>
      <Top />
      <Header type='NISACHOL LAAIDDEE(KHUEAN)' icon={faUser} icon2={faHouseMedical} /> {/* ส่ง icon2 */}
      <div className={styles.cards}>
        <LeaveSummaryCard type="Personal Leave" daysRemaining={4} icon={faSuitcaseRolling} />
        <LeaveSummaryCard type="Sick Leave" daysRemaining={20} icon={faHouseMedical} />
        <LeaveSummaryCard type="Vacation Leave" daysRemaining={5.5} icon={faUmbrellaBeach} />
        <LeaveSummaryCard type="Military Leave" daysRemaining={286} icon={faFlagUsa} />
        <LeaveSummaryCard type="Maternity Leave/Parental Leave" daysRemaining={21} icon={faBabyCarriage} />
        <LeaveSummaryCard type="Ordination Leave(Buddhist)" daysRemaining={60} icon={faVihara} />
        <LeaveSummaryCard type="Ordination Leave(Islam)" daysRemaining={0} icon={faChurch} />
      </div>
      <div className={styles.chart}>
        <LeaveChart data={leaveData} />
        <LeaveTable data={leaveData} />
      </div>
    </div>
  );
};

export default Home;
