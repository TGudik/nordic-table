import styles from "./hero.module.css"
import heroImg from "../../assets/headerBg.png"

export default function Hero({subheading, heading, body, home}) {

    return (
        <div className={`${styles.heroWrapper} ${home && styles.onHome}`}>
            <img src={heroImg} alt="Hero BG" className={styles.heroImg} />
            <div className={`${styles.heroContent} ${!home && styles.notHome}`}>
                <h3 className={styles.heroSubheading}>{subheading}</h3>
                <h2 className={styles.heroHeading}>{heading}</h2>
                <p className={styles.heroBody}>{body}</p>
                {home && 
                <div className={styles.heroBtns}>
                    <button className={styles.CtaBtn}>BOOK BORD</button>
                    <button className={styles.redirectBtn}>SE MENUEN</button>
                </div>}
            </div>
        </div>
    )

}