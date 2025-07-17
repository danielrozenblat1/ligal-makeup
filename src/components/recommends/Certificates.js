import React, { useEffect } from 'react';
import styles from './Certificates.module.css';
import ScrollReveal from 'scrollreveal';

// Import כל התמונות של הכלות (1-11)
import work1 from "../../images/ליגל גרבי כלות 1.png";
import work2 from "../../images/ליגל גרבי כלות 2.png";
import work3 from "../../images/ליגל גרבי כלות 3.png";
import work4 from "../../images/ליגל גרבי כלות 4.png";
import work5 from "../../images/ליגל גרבי כלות 5.png";
import work6 from "../../images/ליגל גרבי כלות 6.png";
import work7 from "../../images/ליגל גרבי כלות 7.png";
import work8 from "../../images/ליגל גרבי כלות 8.png";
import work9 from "../../images/ליגל גרבי כלות 9.png";
import work10 from "../../images/ליגל גרבי כלות 10.png";
import work11 from "../../images/ליגל גרבי כלות 11.png";

// Import התמונות של ערב (1-8)
import evening1 from "../../images/ליגל גרבי ערב 1.png";
import evening2 from "../../images/ליגל גרבי ערב 2.png";
import evening3 from "../../images/ליגל גרבי ערב 3.png";
import evening4 from "../../images/ליגל גרבי ערב 4.png";
import evening5 from "../../images/ליגל גרבי ערב 5.png";
import evening6 from "../../images/ליגל גרבי ערב 6.png";
import evening7 from "../../images/ליגל גרבי ערב 7.png";
import evening8 from "../../images/ליגל גרבי ערב 8.png";

// Import background image
import backgroundImage from "../../images/ליגל גרבי.png";

const Certificates = () => {
  // מערך התמונות של הכלות (11 תמונות)
  const brideImages = [
    work1, work2, work3, work4, work5, work6, 
    work7, work8, work9, work10, work11
  ];

  // מערך התמונות של ערב (8 תמונות)
  const eveningImages = [
    evening1, evening2, evening3, evening4,
    evening5, evening6, evening7, evening8
  ];

  // פונקציה ליצירת מערך ארוך יותר על ידי שכפול התמונות
  const createExtendedArray = (images, targetLength) => {
    const extended = [];
    while (extended.length < targetLength) {
      extended.push(...images);
    }
    return extended.slice(0, targetLength);
  };

  // יצירת מערכים ארוכים יותר לקרוסלות (22 תמונות לכל אחת)
  const firstCarouselImages = createExtendedArray(brideImages, 22);
  const secondCarouselImages = createExtendedArray(eveningImages, 22);

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.main-image-reveal', {
      distance: '100px',
      origin: 'bottom',
      duration: 1200,
      delay: 200,
      easing: 'ease-out',
      opacity: 0,
      scale: 0.9,
      reset: false
    });

    // Reveal title with a slight delay
    ScrollReveal().reveal('.title-reveal', {
      distance: '50px',
      origin: 'top',
      duration: 1000,
      delay: 100,
      easing: 'ease-out',
      opacity: 0,
      reset: false
    });

    // Reveal carousels with stagger
    ScrollReveal().reveal('.carousel-reveal', {
      distance: '80px',
      origin: 'left',
      duration: 1000,
      delay: 400,
      easing: 'ease-out',
      opacity: 0,
      reset: false,
      interval: 200
    });

    // Cleanup function
    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  return (
    <>
      <div className={`${styles.title} title-reveal`}>בשנים האחרונות איפרתי אלפי נשים</div>
      
      <div className={styles.mainContainer}>
        {/* התמונה הרגילה */}
        <div className={`${styles.imageContainer} main-image-reveal`}>
          <img
            src={backgroundImage}
            alt="רחלי"
            className={styles.mainImage}
          />
        </div>
        
        {/* הקרוסלה הראשונה (למטה) - תמונות כלות */}
        <div className={`${styles.carouselContainer} carousel-reveal`}>
          <div className={styles.scrollTrack}>
            {/* יצירת 3 קבוצות של תמונות לאנימציה חלקה */}
            {[...Array(3)].map((_, groupIndex) => (
              <div key={`bride-group-${groupIndex}`} className={styles.scrollContainer}>
                {firstCarouselImages.map((img, index) => (
                  <div key={`bride-${groupIndex}-${index}`} className={styles.imageWrapper}>
                    <img
                      src={img}
                      alt={`כלה ${index + 1}`}
                      className={styles.image}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* הקרוסלה השנייה (למעלה) - תמונות ערב */}
        <div className={`${styles.carouselContainer2} carousel-reveal`}>
          <div className={styles.scrollTrack2}>
            {/* יצירת 3 קבוצות של תמונות לאנימציה חלקה */}
            {[...Array(3)].map((_, groupIndex) => (
              <div key={`evening-group-${groupIndex}`} className={styles.scrollContainer}>
                {secondCarouselImages.map((img, index) => (
                  <div key={`evening-${groupIndex}-${index}`} className={styles.imageWrapper2}>
                    <img
                      src={img}
                      alt={`ערב ${index + 1}`}
                      className={styles.image2}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;