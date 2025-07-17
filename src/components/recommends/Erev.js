import React from 'react';
import styles from './RecommendsReverse.module.css';


import result1 from "../../images/ליגל גרבי ערב 1.png";
import result2 from "../../images/ליגל גרבי ערב 2.png";
import result3 from "../../images/ליגל גרבי ערב 3.png";
import result4 from "../../images/ליגל גרבי ערב 4.png";
import result5 from "../../images/ליגל גרבי ערב 5.png";
import result6 from "../../images/ליגל גרבי ערב 6.png";
import result7 from "../../images/ליגל גרבי ערב 7.png";
import result8 from "../../images/ליגל גרבי ערב 8.png";

import celeb1 from "../../images/ליגל גרבי פרצופים מוכרים 1.png";
import celeb2 from "../../images/ליגל גרבי פרצופים מוכרים 2.png";
import celeb3 from "../../images/ליגל גרבי פרצופים מוכרים 3.png";
import celeb4 from "../../images/ליגל גרבי פרצופים מוכרים 4.png";
import celeb5 from "../../images/ליגל גרבי פרצופים מוכרים 5.png";
import celeb6 from "../../images/ליגל גרבי פרצופים מוכרים 6.png";
import celeb7 from "../../images/ליגל גרבי פרצופים מוכרים 7.png";




const Erev = () => {
  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7, result8,    celeb1, celeb2, celeb3, celeb4, 
    celeb5, celeb6, celeb7, 
  ];

  return (
    <>
      <div className={styles.explain}>
ועוד מקבץ קטן של עבודות שלי (שיהיה קצת מגוון :))
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

export default Erev;