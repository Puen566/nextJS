import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../LeaveSummaryCard.module.css';

interface LeaveSummaryCardProps {
  type: string;
  daysRemaining: number | string;
  timeRemaining?: number | string;
  icon: IconDefinition;
}

const LeaveSummaryCard: React.FC<LeaveSummaryCardProps> = ({ type, daysRemaining, timeRemaining, icon }) => {
  const isZeroDaysRemaining = daysRemaining === 0 || daysRemaining === '0';

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </div>
      <h3>{type}</h3>
      <div className={styles.remaining}>
        <h2 style={{ color: isZeroDaysRemaining ? 'red' : '#729ddb' }}>{daysRemaining} days</h2>
        {timeRemaining !== undefined && <h2>{timeRemaining} Hours</h2>}
      </div>
      <span style={{ color: isZeroDaysRemaining ? 'red' : '#729ddb' }} >Remain</span>
    </div>
  );
};

export default LeaveSummaryCard;
