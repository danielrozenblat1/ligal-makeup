import React from 'react';
import styles from './Glass.module.css';

const GlassCard = ({ title, description, icon: Icon }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default GlassCard;