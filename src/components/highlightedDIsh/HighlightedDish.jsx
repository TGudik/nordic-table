import styles from "./highlightedDish.module.css"



export default function HighlightedDish({img, title, category, description, price}) {

    return (
        <div className={styles.wrapper}>
            <p className={styles.signature}>SIGNATUR</p>
            <img src={img} alt={title} className={styles.dishImg}/>
            <div className={styles.textWrapper}>
                <h3 className={styles.dishCategory}>{category}</h3>
                <h1 className={styles.dishTitle}>{title}</h1>
                <p className={styles.dishDescription}>{description}</p>
                <p className={styles.dishPrice}>{price} kr.</p>
            </div>
        </div>
    )

}