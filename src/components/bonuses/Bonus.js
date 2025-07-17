import React, { useEffect, useRef } from 'react';
import styles from './Bonus.module.css';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';
import kit from "../../icons/wired-lineal-1587-cosmetic-brush-hover-pinch (1).json";
import shake from "../../icons/wired-lineal-1587-cosmetic-brush-hover-pinch (1).json";
import practice from "../../icons/wired-lineal-1587-cosmetic-brush-hover-pinch (1).json";

const BenefitCard = () => {
    const benefits = [
        {
          id: "01",
          title: "שיחת ייעוץ",
          description: "ירידה לפרטים מלאה - סגנון איפור מועדף, ניתוח סוג עור ותיאום ציפיות מקצועי לקראת היום הגדול",
          icon: kit
        },
        {
          id: "02",
          title: "יום החתונה",
          description: "תיאום ציפיות לגבי האיפור, הבנה מדויקת איך את רוצה להראות באותו יום - כיסוי, מראה עיניים וסגנון איפור",
          icon: shake
        },
        {
          id: "03",
          title: "ליווי לאולם ותמיכה",
          description: "ליווי אישי לאולם חצי שעה לפני החופה ועד סיומה, כולל ערכת טאץ אפ קטנה לתיקונים במהלך האירוע",
          icon: practice
        },
    
    ];

  const playerRefs = useRef(benefits.map(() => React.createRef()));

  const handleComplete = (index) => {
    setTimeout(() => {
      if (playerRefs.current[index]?.current) {
        playerRefs.current[index].current.playFromBeginning();
      }
    }, 2500);
  };

  // Initial animation play
  useEffect(() => {
    playerRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.playFromBeginning();
      }
    });
  }, []);

  // ScrollReveal animations
  useEffect(() => {
    // Configure ScrollReveal only once
    const sr = ScrollReveal({
      distance: '30px',
      duration: 1000,
      easing: 'ease-out',
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });

    // Apply animations with unique selectors
    sr.reveal(`.${styles.card}`, {
      origin: 'bottom',
      interval: 150
    });

    // Cleanup function
    return () => {
      sr.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className={styles.benefitContainer}>
 
      
      <div className={styles.cardsGrid}>
        {benefits.map((benefit, index) => (
          <div key={benefit.id} className={styles.card}>
            <div className={styles.numberOverlay}>
              {benefit.id}
            </div>
            <div className={styles.icon}>
              <Player 
                icon={benefit.icon}
                ref={playerRefs.current[index]}
                size="100%"
                onComplete={() => handleComplete(index)}
          
                state="hover-cycle"
              />
            </div>
            <h3 className={styles.cardTitle}>
              {benefit.title}
            </h3>
            <p className={styles.cardDescription}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitCard;