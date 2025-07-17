import React, { useState, useEffect } from 'react';

import marrige from "../icons/wired-outline-653-marriage-hover-pinch.json";
import styles from './FirstScreen.module.css';
import PinkScrollButton from '../components/button/Button';
import learn from "../icons/wired-outline-2258-online-learning-hover-pinch (1).json"
import middleImage from "../images/ליגל גרבי תמונה מרכזית.png";
import rightImage from "../images/ליגל גרבי תמונה ימנית.png"
import leftImage from "../images/ליגל גרבי תמונה שמאלית.png"
import GradientLoader from '../components/loader/Loader';

const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <GradientLoader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>LIGAL GERBI</h1>
  <div className={styles.description}>איפור כלות || איפור ערב</div>
        {/* <div className={styles.buttonContainer}>
        <PinkScrollButton text="למידע על הקורסים" icon={learn} to="קורסים"/>
        <PinkScrollButton text="למידע על איפור כלות" icon={marrige} to="כלות"/>
 
        </div> */}
      </div>
    </div>
  );
};

export default FirstScreen;