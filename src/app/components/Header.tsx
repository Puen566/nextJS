import Image from 'next/image';
import styles from '../Css/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface HeaderProps {
  type: string;
  icon: IconDefinition;
  icon2: IconDefinition;  // เพิ่ม icon2
}

const Header: React.FC<HeaderProps> = ({ type, icon, icon2 }) => {  // เพิ่ม icon2 ใน props
  return (
    <div className={styles.header}>
      <Image src="/profile.jpg" alt="Profile Picture" width={50} height={50} className={styles.profilePic} />
      <div className={styles.userInfo}>
        <h1>{type}</h1>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.iconButton}>
          <FontAwesomeIcon icon={icon2} className={styles.icon} />
        </button>
        <button>Leave Request</button>
        <button>History</button>
      </div>
    </div>
  );
};

export default Header;
