import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./bookTableCTA.module.css"
import bgImg from "../../assets/restaurant2.png"
import { Link } from "react-router-dom";

export default function BookTableCTA() {

    return (
      <div className={styles.sectionWrapper}>
        <img className={styles.bgImg} src={bgImg} alt="Restaurant Nordic Table" />
        <SectionHeader
          overTitle={"RESERVATIONER"}
          title={"Book dit bord hos Nordic Table"}
          subTitle={
            "Vi åbner vores døre for dig og dine, og giver jer en aften I aldrig glemmer. Book dit bord i dag - det er nemt og hurtigt."
          }
          colorTwo
        />
        <Link to={"/book"} className={styles.CtaBtn}>BOOK BORD NU</Link>
      </div>
    );
}