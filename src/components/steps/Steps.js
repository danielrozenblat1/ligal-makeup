import React from 'react';
import styles from './Steps.module.css';

const CustomCard = ({ number, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.numberOverlay} data-number={number}>{number}</div>
      <div className={styles.decorativeElement}></div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default CustomCard;