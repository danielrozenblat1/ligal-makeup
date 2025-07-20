import React from 'react';
import styles from './Recs.module.css';


import result1 from "../../images/ליגל ג׳רבי המלצות 1.png";
import result2 from "../../images/ליגל ג׳רבי המלצות 2.png";
import result3 from "../../images/ליגל ג׳רבי המלצות 3.png";
import result4 from "../../images/ליגל ג׳רבי המלצות 4.png";
import result5 from "../../images/ליגל ג׳רבי המלצות 5.png";
import result6 from "../../images/ליגל ג׳רבי המלצות 6.png";
import result7 from "../../images/ליגל ג׳רבי המלצות 7.png";
import result8 from "../../images/ליגל ג׳רבי המלצות 8.png";
import result9 from "../../images/ליגל ג׳רבי המלצות 9.png";
import result10 from "../../images/ליגל ג׳רבי המלצות 10.png";
import result11 from "../../images/ליגל ג׳רבי המלצות 11.png";
import result12 from "../../images/ליגל ג׳רבי המלצות 12.png";
import result13 from "../../images/ליגל ג׳רבי המלצות 13.png";
import result14 from "../../images/ליגל ג׳רבי המלצות 14.png";
import result15 from "../../images/ליגל ג׳רבי המלצות 15.png";
import result16 from "../../images/ליגל ג׳רבי המלצות 16.png";
import result17 from "../../images/ליגל ג׳רבי המלצות 17.png";
import result18 from "../../images/ליגל ג׳רבי המלצות 18.png";
import result19 from "../../images/ליגל ג׳רבי המלצות 19.png";
import WAButton from '../WAButton/Button';

const Recs = () => {
  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7, result8, result9, result10, result11, result12, result13, result14, result15, result16, result17, result18, result19
  ];

  return (
    <>
 
<div className={styles.explain}>ככה הבנות שיוצאות ממני מגיבות</div>
   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <WAButton text="יש לי תאריך אני רוצה לשריין"/>
{/* כפתור הנעה לפעולה */}
    </>
  );
};

export default Recs;