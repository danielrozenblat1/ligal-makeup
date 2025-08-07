// MakeupCoursesGallery.jsx
import React from 'react';
import styles from './CoursesScreen.module.css';
import WAButton from '../components/WAButton/Button';

// אימפורט תמונות
import makeupAndProfessional from '../images/איפור שפתיים.png';
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

const CourseCard = ({ image, title, description }) => {
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
        <h3 className={styles.courseTitle}>
          {title}
        </h3>
        
        <p className={styles.courseDescription}>
          {description}
        </p>
    
        <div className={styles.cardFooter}>
          <button className={styles.enrollButton}>
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
      description: "אני כאן כדי לעשות לכן קצת סדר בבלאגן. אחרי כמה שנים שלמדתי על בשרי איך ממלאים יומן, אני הולכת להסביר לכן בצורה מתומצתת מה תכלס אתן הולכות לעשות היום כדי למלא את היומן שלכן בלקוחות",
  
    },
    {
      image: fullMakeupCourse,
      title: "איפור מלא מ0 ל100",
      description: "אם את מאפרת שלא רוצה להישאר מאחור ואוהבת להרחיב את הידע שלה בואי למוד סגנון איפור עיניים חדש פשוט ומושלם. ואם את לא מאפרת, ורוצה ללמוד איפור חתולי ומלוכסן שמחמיא לכל סוגי העיניים - לא תאמיני כמה קל לאפר את העיניים שלך בלי להיות תלוייה באף אחת ומבלי להוציא אלפי שקלים בשנה",
   
    },
    {
      image: lipMakeup,
      title: "איפור שפתיים",
      description: "אחרי השיעור הזה תדעו איך לתחום את השפתיים בצורה נכונה, איך להחליק אותן ולגרום לאיפור לשבת בצורה עמידה על השפתיים",
   
    },
    {
      image: eyebrowMakeup,
      title: "איפור גבות",
      description: "אחרי השיעור הזה תלמדו לאפר את הגבות בצורה טבעית, איך לעבות אותן בצורה נכונה שמחמיאה לגבות ולא הופכת אותן למוגזמות",
   
    },
    {
      image: perfectBase,
      title: "בסיס מושלם לאיפור",
      description: "איפור מעולה מתחיל בבסיס מצויין. בואו ללמוד אחת ולתמיד איך מכינים את העור לפני המייקאפ ואיך יוצרים כיסוי מושלם וחלק שמסתיר הכול ולא מכביד",
  
    },
    {
      image: simpleMakeupForAll,
      title: "איפור פשוט לכל מטרה",
      description: "בשיעור הבא אני מראה לכן איך אני מאפרת את עצמי איפור פשוט שמתאים לכל מטרה",

    },
    {
      image: wetContouring,
      title: "הצללות רטובות",
      description: "בשיעור הזה נלמד איך לעשות הצללות והארות בצורה נכונה, איך לחטב את הפנים ולתת להן מראה מורם",

    },
    {
      image: contourAndBlush,
      title: "הצללות וסומק",
      description: "אחרי שמרחנו מייקאפ בצורה מושלמת - כל הפנים שלנו בגוון אחד, ועכשיו נחזיר את הגוונים הטבעיים של הפנים שלנו באמצעות ברונזר סומק ושימר",
  
    },
    {
      image: eyelashApplication,
      title: "הדבקת ריסים ב-3 צורות",
      description: "לא סתם יש הדבקות ריסים שהן יפות ויש הדבקות ריסים שהן ווואווו. תתכונני ללמוד את השיטה הכי יפה והכי פשוטה להדבקת ריסים שאין אחד שיכול לעמוד בפניהן",
    
    },
    {
      image: smokyEyesSecrets,
      title: "עיניים מעושנות וכל הסודות שלי למראה מורם",
      description: "אם את מאפרת שלא רוצה להישאר מאחור ואוהבת להרחיב את הידע שלה בואי למוד סגנון איפור עיניים חדש פשוט ומושלם. ואם את לא מאפרת, ורוצה ללמוד איפור חתולי ומלוכסן שמחמיא לכל סוגי העיניים - לא תאמיני כמה קל לאפר את העיניים שלך בלי להיות תלוייה באף אחת ומבלי להוציא אלפי שקלים בשנה",
   
    },
    {
      image: classicEyeMakeup,
      title: "איפור עיניים קלאסי בארבע צורות",
      description: "כולן מסתבכות עם איפור עיניים, בואו תראו כמה זה פשוט... 4 צורות לאפר את העיניים בצורה הכי קלה שיש",
   
    },
    {
      image: makeupAndProfessional, // משתמש באיפור ומקצועה עבור איילינר מסקרה
      title: "איילינר, מסקרה ומעגל ריסים בשיטה מנצחת",
      description: "ככל שתתרגלו יותר זה יבוא לכם יותר בקלות",
    
    },
    {
      image: professionalPhotography,
      title: "צילום מקצועי",
      description: "את לא חייבת מצלמה מקצועית כדי להוציא תמונות ברמה. הכול עניין של זוויות ותאורה... אחרי סרטון של פחות מ3 דקות כל אחת הולכת להוציא תמונות ברמה הכי גבוהה שיש אך ורק מהאייפון",
   
    }
  ];

  return (
    <div className={styles.container} id="רשימת הקורסים">
      <div className={styles.wrapper}>
        <div className={styles.header}>
       
          <p className={styles.description}>
        יש לך את האפשרות לבחור בכל פרק בנפרד וכמובן לבחור את הקורס המלא לקבל את כל הידע שלי במרוכז
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