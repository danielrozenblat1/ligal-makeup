import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import editPhoto from "../../images/ליגל עובדת.png";
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const sr = ScrollReveal({
                duration: 1000,
                delay: 150,
                opacity: 0,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                container: window.document.documentElement,
                mobile: true,
                reset: false,
                viewFactor: 0.2
            });

            sr.reveal(`.${styles.revealItem}`, {
                origin: 'bottom',
                distance: '20px',
                interval: 100
            });
        }

        return () => {
            ScrollReveal().destroy();
        };
    }, []);


    const handleWhatsAppClick = () => {
        const phoneNumber = '+972534206408'; // Without the + sign for WhatsApp URL
        const message = 'היי ליגל הגעתי מהדף, אשמח לשמוע עוד על האיפור לחתונה';
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };
 

    return (
        <>
            <section ref={containerRef} className={styles.section} id="מי-אני">
                <div className={styles.container}>
                    <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
                        <img src={editPhoto} alt="ליגל ג'רבי" className={styles.image} />
                    </div>

                    <div className={`${styles.content} ${styles.revealItem}`}>
                        <h2 className={styles.mainTitle}>בואי נכיר, ליגל ג'רבי</h2>

                        <div className={styles.quoteContainer}>
                            <p className={styles.quote}>
                                "כשאת מגיעה לחתונה שלך ויודעת שאת נראית מושלמת - אני יודעת שעשיתי את שלי"
                            </p>
                        </div>

                        <div className={styles.textBlock}>
                            <p className={styles.paragraph}>
                                5 שנים, מאות כלות שעברו אצלי ועשרות מאפרות שהכשרתי - וכל זה התחיל מרגע אחד פשוט. <strong>
                                התחלתי למכור מוצרי איפור בחנות קטנה, ואיפרתי בנות שהגיעו לקנות.</strong> כולן עפו על האיפור שעשיתי להן וככה הבנתי שיש פה משהו מיוחד.
                            </p>

                            <div className={styles.divider}></div>

                            <p className={styles.paragraph}>
                             כל כלה צריכה ביום שלה בטחון, הקשבה, יחס והרגעה ואלו הדברים שאני שמה דגש שכל כלה שלי תקבל - <br/> אני יודעת שיש לך מספיק דאגות על הראש אז לפחות את הדאגות לגבי האיפור שלך אני כאן כדי לחסוך 
                            </p>

                            <div className={styles.divider}></div>

                      
<p className={styles.paragraph}>
    כדי שנגיע בדיוק למראה שאת חולמת עליו לפני החתונה אני עושה עם כל כלה שלי שיחת ייעוץ מפורטת - אנחנו יורדות לפרטים, מבינות איך את רוצה להיראות, מה הסגנון שלך ומה לא הסגנון שלך. <br/> וכמו שכבר הספקת לראות בתמונות, אני מאפרת בצורה מאוד חתולית בדגש על עיניים חתוליות, מייקאפ שמכסה בצורה מושלמת ויחד עם זאת לא יושב כבד על הפנים.
</p>


                            <div className={styles.divider}></div>
                            <p className={styles.finalText}>
                               <strong>כי כשאת מגיעה לחתונה שלך ויודעת שאת נראית מושלמת, שהאיפור שלך מחזיק כל הלילה, ושאת יכולה להתמקד בלחגוג - את הרבה יותר רגועה</strong>
                            </p>
                        </div>

                        <button className={styles.ctaButton} onClick={handleWhatsAppClick}>
                            <span className={styles.buttonIcon}>💄</span>
                            בואי נדבר על האיפור שלך לחתונה
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;