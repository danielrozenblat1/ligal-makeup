import React from 'react';
import styles from './CoursesScreen.module.css';
import WAButton from '../components/WAButton/Button';

// אימפורט תמונות
import makeupAndProfessional from '../images/ליגל תמונה מתוקנת.png';
import eyebrowMakeup from '../images/איפור גבות.png';
import classicEyeMakeup from '../images/איפור עיניים קלאסי.png';
import simpleMakeupForAll from '../images/איפור פשוט לכל מטרה.png';
import lipMakeup from '../images/איפור שפתיים.png';
import perfectBase from '../images/בסיס מושלם לאיפור.png';
import eyelashApplication from '../images/הדבקת ריסים ב3 צורות.png';
import contourAndBlush from '../images/הצללות וסומק.png';
import wetContouring from '../images/הצללות רטובות.png';
import learnedMakeupHowToStart from '../images/למדתי איפור איך מתחילים.png';
import smokyEyesSecrets from '../images/עיניים מעושנות וכל הסודות.png';
import professionalPhotography from '../images/צילום מקצועי.png';
import fullMakeupCourse from '../images/קורס איפור מלא.png';

const CourseCard = ({ image, title, description, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className={styles.courseCard}>
      <div className={styles.imageContainer}>
        <img 
          src={image} 
          alt={title}
          className={styles.courseImage}
        />
        <div className={styles.imageOverlay}></div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.courseTitle}>{title}</h3>
        <p className={styles.courseDescription}>{description}</p>
        <div className={styles.cardFooter}>
          <button className={styles.enrollButton} onClick={handleClick}>
            הרשמה לקורס
          </button>
        </div>
      </div>
    </div>
  );
};

const MakeupCoursesGallery = () => {
  const courses = [
    {
      image: learnedMakeupHowToStart,
      title: "למדתי איפור - איך מתחילים לעבוד בזה",
      description: "הגיע הזמן להפוך את התחביב למקצוע",
      link: "https://my.schooler.biz/s/99216/1754247078094"
    },
    {
      image: fullMakeupCourse,
      title: "איפור מלא מ0 ל100",
      description: "הקורס המלא - כולל את כל הפרקים",
      link: "https://my.schooler.biz/s/99225/1754250546088"
    },
    {
      image: lipMakeup,
      title: "איפור שפתיים",
      description: "תחימת שפתיים והחלקת שפתיים",
      link: "https://my.schooler.biz/s/99224/1754250319577"
    },
    {
      image: eyebrowMakeup,
      title: "איפור גבות",
      description: "איך לאפר את הגבות בצורה טבעית",
      link: "https://my.schooler.biz/s/99223/1754250110177"
    },
    {
      image: perfectBase,
      title: "בסיס מושלם לאיפור",
      description: "איפור מעולה מתחיל בבסיס מצויין...",
      link: "https://my.schooler.biz/s/99214/1754246650041"
    },
    {
      image: simpleMakeupForAll,
      title: "איפור פשוט לכל מטרה",
      description: "איך אני מאפרת את עצמי איפור פשוט שמתאים לכל מטרה",
      link: "https://my.schooler.biz/s/99215/1754246890078"
    },
    {
      image: wetContouring,
      title: "הצללות רטובות",
      description: "איך לעשות הצללות והארות בצורה נכונה...",
      link: "https://my.schooler.biz/s/99220/1754249340842"
    },
    {
      image: contourAndBlush,
      title: "הצללות וסומק",
      description: "נחזיר את הגוונים הטבעיים של הפנים שלנו...",
      link: "https://my.schooler.biz/s/99222/1754249669185"
    },
    {
      image: eyelashApplication,
      title: "הדבקת ריסים ב-3 צורות",
      description: "תלמדי את השיטה הכי פשוטה להדבקת ריסים...",
      link: "https://my.schooler.biz/s/99193/1754224095499"
    },
    {
      image: smokyEyesSecrets,
      title: "עיניים מעושנות וכל הסודות שלי למראה מורם",
      description: "איפור חתולי ומלוכסן שמחמיא לכל סוגי העיניים...",
      link: "https://my.schooler.biz/s/99075/1753973261983"
    },
    {
      image: classicEyeMakeup,
      title: "איפור עיניים קלאסי בארבע צורות",
      description: "4 צורות לאפר את העיניים בצורה הכי קלה שיש",
      link: "https://my.schooler.biz/s/99210/1754245928309"
    },
    {
      image: makeupAndProfessional,
      title: "איילינר, מסקרה ומעגל ריסים בשיטה מנצחת",
      description: "ככל שתתרגלי יותר זה יבוא לך בקלות",
      link: "https://my.schooler.biz/s/99213/1754246412748"
    },
    {
      image: professionalPhotography,
      title: "צילום מקצועי",
      description: "זוויות ותאורה נכונה מהאייפון בלבד...",
      link: "https://my.schooler.biz/s/99021/1753946389246"
    }
  ];

  return (
    <div className={styles.container} id="רשימת הקורסים">
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.description}>
            <strong>בניגוד לשאר הקורסים הדיגיטלים</strong> <br/>
יש לך את האפשרות לרכוש כל פרק בנפרד 
וכמובן לקחת את הקורס המלא בעלות יותר משתלמת ( איפור מלא מ0 ל100)
          </p>
        </div>
        
        <div className={styles.coursesGrid}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
      
      <div className={styles.description}>
        לבירור אישי והתייעצות איתי איזה קורס הכי מתאים עבורך
      </div>
      <WAButton 
        text="לחצי כאן" 
        message="היי ליגל, אשמח לדעת איזה מהקורסים הדיגיטלים שלך הכי מתאים עבורי"
      /> 
    </div>
  );
};

export default MakeupCoursesGallery;
