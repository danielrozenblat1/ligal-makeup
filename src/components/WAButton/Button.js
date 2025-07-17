import React, { useRef, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Player } from "@lordicon/react";
import styles from './Button.module.css';

const WAButton = ({ text, icon, to }) => {
  const handleClick = () => {
    const phoneNumber = "+972534206408";
    const message = "היי ליגל ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

    return <>
    <div className={styles.center}>
      <button onClick={handleClick} smooth={true} duration={1500}  className={styles.button}>
   
        <span className={styles.text}>{text}</span>

      </button>
      </div>
  </>
};

export default WAButton;