





import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import styles from './Glass.module.css';

const GlassCard = ({ title, description, icon }) => {
  const handleComplete = () => {
    setTimeout(() => {
      playerRef?.current?.playFromBeginning();
    }, 2500);
  };
  
  const playerRef = useRef(null);
  
  useEffect(() => {
    playerRef?.current?.playFromBeginning();
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.icon}>
      <Player 
        icon={icon} 
        ref={playerRef} 
        size="100%"
                onComplete={handleComplete}

      />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default GlassCard;