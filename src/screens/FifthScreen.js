import ParentalGuidanceScreen from "../components/fit/WhoFits"
import Recommendations from "../components/recommends/Recommends"
import Recs from "../components/recommends/Recs"
import WAButton from "../components/WAButton/Button"
import MakeupCoursesGallery from "./CoursesScreen"
import styles from "./FifthScreen.module.css"

const FifthScreen = () => {
  return (
    <>
     
      <div className={styles.description}>
אחרי שאיפרתי אלפי נשים והכשרתי עשרות מאפרות ריכזתי עבורך בדיוק את כל הכלים שאת צריכה לקבל 
      </div>
  <div className={styles.title}>כדי לאפר כל אזור בצורה מושלמת</div>
<MakeupCoursesGallery/>
<Recommendations/>
    <ParentalGuidanceScreen/>
    </>
  )
}

export default FifthScreen