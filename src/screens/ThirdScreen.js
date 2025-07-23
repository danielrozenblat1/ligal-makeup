import Works from "../components/recommends/Works"
import SmallBox from "../components/SmallBox/SmallBox"
import styles from "./ThirdScreen.module.css"
import bride from "../icons/wired-lineal-1587-cosmetic-brush-hover-pinch (1).json"
import makeup from "../icons/wired-lineal-1599-powder-makeup-face-hover-pinch (1).json"
import makeupss from "../icons/wired-lineal-3078-avatar-bride-hover-pinch (1).json"
import confidant from "../icons/wired-lineal-653-marriage-hover-pinch.json"
import mirror from "../icons/wired-lineal-1589-makeup-mirror-hover-pinch (1).json"
import makeupsss from "../icons/wired-lineal-1599-powder-makeup-face-hover-pinch (1).json"
import CustomCard from "../components/steps/Steps"
import BenefitCard from "../components/bonuses/Bonus"
import Steps from "../components/Stepsss/Steps"
import Recs from "../components/recommends/Recs"
import Erev from "../components/recommends/Erev"
import AboutMe from "../components/me/Me"
const ThirdScreen = () => {
    return (
        <>
        <div style={{overflowX:"hidden"}}>
            <div className={styles.title} id="כלות">מזל טוב!</div>
            <div className={styles.description}>
                אם את כאן סימן שאת מתחתנת בקרוב ואני בטוחה שמדד הלחץ שלך בשיא כי הכל חייב להיות בולללל כמו שאת מדמיינת
            </div>
            <div className={styles.title}>אז לפני הכל</div>
            <Works />
            <Erev/>
            <div className={styles.description}>ועכשיו כשירדה הפאניקה, אני רוצה שתדעי ש..</div>
            <div className={styles.title}>כל כלה שלי מקבלת</div>
            <div className={styles.row}>
                <SmallBox text="איפור מותאם אישית למבנה הפנים שלך ולבקשות הכי קטנות שלה" icon={bride} />
                <SmallBox text="יחס אישי וזמינות מלאה - אני מאפרת רק כלה אחת ביום" icon={makeup} />
            </div>
            <div className={styles.row}>
                <SmallBox text="תחושת ביטחון מלאה - את יוצאת מהכיסא כשאת יודעת שאת נראית מושלם" icon={makeupss} />
                <SmallBox text="ליווי לאולם חצי שעה לפני החופה ועד סיומה" icon={confidant} />
            </div>
                 <div className={styles.row}>
                <SmallBox text="איפור ניסיון לפני החתונה כדי שתוכלי להגיע הכי רגועה ליום שלך" icon={mirror} />
                <SmallBox text="ערכת טאצ׳אפ בוטיקית להמשך הערב" icon={makeupsss} />
            </div>
              <AboutMe/>
             <div className={styles.description}>אני בטוחה שהכל כבר יושב אצלך בדמיון (ואפילו כבר מגיל קטן) מכמות האורחים,שיר הכניסה ועד לפרטים הכי קטנים שיש</div>
                      <div className={styles.description}>וכדי שגם האיפור יהיה מדוייק לך ומותאם אלייך אישית התהליך איתי עובד בצורה הבאה:</div>
                      <Steps/>
                        <div className={styles.title}>והתגובות..?</div>
                        <Recs/>
        {/*  */}
{/* <div className={styles.row}>
    <BenefitCard 

    />    
 
</div> */}
</div>
        </>
    )
}

export default ThirdScreen
