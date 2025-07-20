import React from 'react';
import styles from './Recommends.module.css';


import result1 from "../../images/ליגל גרבי כלות 1.png";
import result2 from "../../images/ליגל גרבי כלות 2.png";
import result3 from "../../images/ליגל גרבי כלות 3.png";
import result4 from "../../images/ליגל גרבי כלות 4.png";
import result5 from "../../images/ליגל גרבי כלות 5.png";
import result6 from "../../images/ליגל גרבי כלות 6.png";
import result7 from "../../images/ליגל גרבי כלות 7.png";
import result8 from "../../images/ליגל גרבי כלות 8.png";
import result9 from "../../images/ליגל גרבי כלות 9.png";
import result10 from "../../images/ליגל גרבי כלות 10.png";
import result11 from "../../images/ליגל גרבי כלות 11.png";


const Works = () => {
  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7, result8, result9, result10, result11
  ];

  return (
    <>
      <div className={styles.explain}>
ארגנתי לך מקבץ של איפורי כלה מטורפים שיתנו לך קצת השראה לאיפור כלה שמתאים עבורך. <br/> טבעיים מאוד ויחד עם זאת עם נוכחות בדגש על עיניים חתוליות
      </div>

   
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

    </>
  );
};

export default Works;