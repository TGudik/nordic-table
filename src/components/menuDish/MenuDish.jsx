import styles from "./menuDish.module.css"

export default function MenuDish({title, description, price}) {

    return (
        <div className={styles.dishWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.descNprice}>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>{price} kr.</p>
            </div>
        </div>
    )
}