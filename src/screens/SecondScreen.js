import styles from "./SecondScreen.module.css"
import GlassCard from "../components/glass/Glass"
import technic from "../icons/wired-lineal-1599-powder-makeup-face-hover-pinch (2).json"
import makeup from "../icons/wired-lineal-1598-makeup-hover-pinch.json"
import carpet from "../icons/wired-lineal-1871-red-carpet-hover-pinch.json"

const SecondScreen = () => {
  return (
    <>
       <div className={styles.title} id="קורסים">לא הגעת לכאן סתם</div>
      <div className={styles.description}>
       כמה פעמים הייתה לך פגישה , אירוע או סתם יציאה שלא באמת מצריכה מאפרת ורצית להראות בשיא שלך?
גם אם אין לך שום ידע או ניסיון את יכולה לעשות את זה בעצמך .
ולמאפרות שבנינו , תתכוננו לגרוף מחמאות בלתי פוסקות על הטכניקות החדשות שתלמדו כאן
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
          description="למאפרות שבנינו
אם את מאפרת שאוהבת להרחיב את הידע שלה ואת רוצה ללמוד עוד טכניקות מטורפות שלקוחות ייבחרו בך בזכותן"
          icon={technic}
        />
      </div>
        
            
    </>
  )
}

export default SecondScreen