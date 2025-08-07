import styles from "./SecondScreen.module.css"
import GlassCard from "../components/glass/Glass"
import technic from "../icons/wired-lineal-1599-powder-makeup-face-hover-pinch (2).json"
import makeup from "../icons/wired-lineal-1598-makeup-hover-pinch.json"
import carpet from "../icons/wired-lineal-1871-red-carpet-hover-pinch.json"

const SecondScreen = () => {
  return (
    <>
       <div className={styles.title}>לא הגעת לכאן סתם</div>
      <div className={styles.description}>
        הגעת לכאן כי עמוק בפנים את יודעת - את יכולה להיראות הרבה יותר טוב כשאת מתאפרת.
      </div>

      <div className={styles.description}>
        אולי את כבר <span className={styles.highlight}>מאפרת</span> ורוצה סוף סוף להרגיש בטוחה בטכניקה שלך… ואולי את פשוט רוצה לדעת איך לאפר את עצמך בצורה מושלמת,{" "}
        <span className={styles.highlight}>גם אם אין לך שום רקע או ניסיון</span>.
      </div>
      
      <div className={styles.description}>
        <span className={styles.highlightSpecial}>אחרי כמעט עשור בתחום האיפור אני אומרת לך בפה מלא שזה אפשרי!</span>
      </div>
      
      <div className={styles.title}>בתוך זמן קצר, את תוכלי</div>

      <div className={styles.row}>
        <GlassCard 
          title="לאפר את עצמך בצורה מחמיאה, ברורה ומהירה יותר"
          description="גם בלי ניסיון קודם - את תדעי איך להוציא את המקסימום מהפנים שלך ולהרגיש יפה ובטוחה בלי לשרוף דקות ארוכות מול המראה."
          icon={makeup}
        />

        <GlassCard 
          title="ללמוד לא להיות תלויה באף אחת לפני אירועים חשובים"
          description="לאפר את עצמך לפני אירועים חשובים בלי להרגיש צורך לשריין מאפרת מקצועית - כי את כבר יודעת לאפר את עצמך בצורה מושלמת"
          icon={carpet}
        />

        <GlassCard 
          title="לחדד טכניקות איפור קיימות"
          description="אם את כבר מאפרת - תארי לעצמך איזה יתרון יהיה לך על השאר אם תשלטי בכל אזורי הפנים ותלמדי טכניקות נוספות."
          icon={technic}
        />
      </div>
        
            
    </>
  )
}

export default SecondScreen