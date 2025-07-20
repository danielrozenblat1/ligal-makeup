import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';
import styles from './Steps.module.css';
import consult from "../../icons/wired-outline-981-consultation-hover-conversation-alt.json";
import makeup from "../../icons/wired-outline-1598-makeup-hover-pinch.json"
import bride from "../../icons/wired-outline-653-marriage-hover-pinch.json"
import convo from "../../icons/wired-outline-981-consultation-hover-conversation-alt.json"
const Steps = () => {
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);

const stepsData = [
  {
    id: 1,
    icon: consult,
    playerRef: playerRef1,
    title: "שיחת ייעוץ ותיאום ציפיות",
    description: "בשיחת הייעוץ שלנו אני אכיר את סגנון האיפור שלך, את סוג העור שלך, ואת החזון שלך ליום החתונה ואז נבין אם יש התאמה בין סגנון האיפור שלי למה שאת מחפשת. זה הזמן שלנו לדבר על כל הפרטים ולוודא שאנחנו מדויקות בכל מה שחשוב לך."
  },
      {
    id: 2,
    icon: makeup,
    playerRef: playerRef2,
    title: "איפור ניסיון (אופציונלי)*",
    description: "יש לך את האפשרות לבוא סופר מוכנה ועם וודאות מקסימלית לחתונה שלך. אנחנו ניפגש כמה ימים לפני החתונה ונדייק עבורך ב100% את האיפור"
  },
    {
    id: 3,
    icon: convo,
    playerRef: playerRef3,
    title: "כאן לכל מענה,חשש והתלבטות",
    description: "עד החתונה אני בטוחה שיעלו לך רעיונות חדשים, שאלות ואפילו קצת חששות מסויימים ואני כאן עבורך לכל שאלה,חשש הכי קטן והתלבטות!"
  },
  {
    id: 4,
    icon: bride,
    playerRef: playerRef4,
    title: "יום החתונה שלך",
    description: "ביום החתונה אני מגיעה אלייך עם מוצרי איפור יוקרתיים ועמידים. האיפור שלי מותאם לחזק ולהדגיש את תווי הפנים שלך, עם דגש על עמידות מקסימלית לכל אורך האירוע. האיפור יישאר מושלם עד שאת תחליטי להסיר אותו בסוף הערב."
  },

];

  useEffect(() => {
    // הפעלת כל האנימציות בהתחלה
    playerRef1?.current?.playFromBeginning();
    playerRef2?.current?.playFromBeginning();
    playerRef3?.current?.playFromBeginning();
    playerRef4?.current?.playFromBeginning();

    ScrollReveal().reveal(`.${styles.stepTitle}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
        ScrollReveal().reveal(`.${styles.stepDescription}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
            ScrollReveal().reveal(`.${styles.iconContainer}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    });
  }, []);

  const handleComplete = (ref) => {
    setTimeout(() => {
      ref?.current?.playFromBeginning();
    }, 1000);
  };

  return (
    <div className={styles.stepsContainer}>
      {stepsData.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={`${styles.stepItem} step-${step.id}`}>
            <div className={styles.iconContainer}>
              <Player 
                icon={step.icon} 
                ref={step.playerRef} 
                size="100%" 
                onComplete={() => handleComplete(step.playerRef)}
              />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>

          {index < stepsData.length - 1 && (
            <div className={styles.connector}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;