import styles from "./aboutSection.module.css"
import aboutImg from "../../assets/restaurant.png"
import SectionHeader from "../sectionHeader/SectionHeader"

export default function AboutSection() {

    return (
      <div className={styles.sectionWrapper}>
        <img className={styles.aboutImg} src={aboutImg} alt="Restaurant Nordic Table" />
        <div className={styles.right}>
            <SectionHeader
              overTitle={"OM OS"}
              title={"En restaurant båret af nærhed og nærvær"}
              subTitle={"Nordic Table er grundlagt med en klar overbevisning: god mad behøver ikke at være kompliceret. Vi laver mad af det, naturen giver os - det nordiske køkkens uforlignelige råvarer. \n\nFra de friske fiskefarvande til skovens bær og urter - vores menu forandrer sig med årstidens rytme. Det giver gæsterne noget nyt at opdage, og det giver os glæden ved at lave mad med det bedste, vi kan få fat i."}
              typeTwo
            />
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <p className={styles.value}>12</p>
                    <p className={styles.valueTitle}>RETTER PÅ MENUEN</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.value}>6</p>
                    <p className={styles.valueTitle}>ÅRS ERFARING</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.value}>100</p>
                    <p className={styles.valueTitle}>% NORDISKE <br/> RÅVARER</p>
                </div>
            </div>
        </div>
      </div>
    );
}