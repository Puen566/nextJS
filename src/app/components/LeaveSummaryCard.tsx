import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../LeaveSummaryCard.module.css';

interface LeaveSummaryCardProps {
  type: string;
  daysRemaining: number | string;
  timeRemaining?: number | string;
  icon: IconDefinition; // เพิ่ม prop สำหรับไอคอน
}

const LeaveSummaryCard: React.FC<LeaveSummaryCardProps> = ({ type, daysRemaining, timeRemaining, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={icon} className={styles.icon} /> {/* ใช้ class icon สำหรับขนาดและสี */}
      </div>
      <h3>{type}</h3>
      <div className={styles.remaining}>
        <h2>{daysRemaining} days</h2>
        {timeRemaining !== undefined && <h2>{timeRemaining} Hours</h2>} {/* แสดง Hours เฉพาะเมื่อ timeRemaining ถูกกำหนด */}
      </div>
      <span>Remain</span>
    </div>
  );
};

export default LeaveSummaryCard;
