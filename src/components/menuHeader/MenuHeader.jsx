import styles from "./menuHeader.module.css"

export default function MenuHeader({type, img}) {

    return (
        <div className={styles.headerWrapper}>
            <img src={img} alt={type} className={styles.headerImg} />
            <h2 className={styles.menuType}>{type}</h2>
        </div>
    )
}