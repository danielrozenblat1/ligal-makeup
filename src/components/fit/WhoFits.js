import React from 'react';
import { 
  Heart, 
  Home, 
  Users, 
  Star, 
  TrendingUp,
  Baby,
  BookOpen,
  Target,
  MessageCircle
} from 'lucide-react';
import styles from "./WhoFits.module.css"

const ParentalGuidanceScreen = () => {
  const handleScrollToCourses = () => {
    const element = document.getElementById('רשימת הקורסים');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    {
      text: "את מאפרת שרוצה לחדד את עצמך בתחום ולרכוש טכניקות חדשות",
      icon: <Star className={styles.icon} />
    },
    {
      text: "את רוצה ללמוד לאפר את עצמך מהבסיס - גם בלי שום ידע קודם",
      icon: <BookOpen className={styles.icon} />
    },
    {
      text: "את רוצה להתאפר יפה יותר ולא לקחת מאפרת לכל אירוע קטן שיש לך",
      icon: <Heart className={styles.icon} />
    },
    {
      text: "את מרגישה שהיום את לא מצליחה להוציא את עצמך הכי יפה מול המראה",
      icon: <Target className={styles.icon} />
    },
    {
      text: "את מאפרת שסיימה לימודים ועדיין מרגישה שאת לא מיוחדת ואין משהו שמייחד אותך",
      icon: <TrendingUp className={styles.icon} />
    },
    {
      text: "את לא מפחדת מהשקעה, תרגול ומהדיגיטל",
      icon: <MessageCircle className={styles.icon} />
    },
    {
      text: "את רוצה לשפר איפור באופן נקודתי ולחדד חלקים ספציפיים",
      icon: <Users className={styles.icon} />
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.backgroundImage} />
        
        <div className={styles.content}>
          <h1 className={styles.title}>הקורסים מתאימים לך אם</h1>
          
          <div className={styles.cardsGrid}>
            {items.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardContent}>
                  <span className={styles.cardText}>{item.text}</span>
                  {item.icon}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.buttonContainer}>
            <button 
              onClick={handleScrollToCourses}
              className={styles.coursesButton}
            >
          ליגל,קחי אותי לרשימת הקורסים
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParentalGuidanceScreen;