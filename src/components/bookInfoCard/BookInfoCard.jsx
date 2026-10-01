import styles from "./bookInfoCard.module.css"
import * as Icon from "react-bootstrap-icons"

export default function BookInfoCard({icon, title, description}) {

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.iconWrapper}>
                {icon}
            </div>
            <div className={styles.textWrapper}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )
}