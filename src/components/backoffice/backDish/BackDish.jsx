import styles from "./backDish.module.css"
import { useFetchDishes } from "../../../hooks/useFetchDishes"

export default function BackDish({setCurrentDish, dish }) {

    const { removeDishById } = useFetchDishes()

    return (
        <div className={styles.dishWrapper}>
            <div className={styles.dishInfoWrapper}>
                <h4 className={styles.infoHeading}>Navn på ret:</h4>
                <p className={styles.infoTitle}>{dish.title}</p>
            </div>
            <div className={styles.dishInfoWrapper}>
                <h4 className={styles.infoHeading}>Rettens kategori:</h4>
                <p className={styles.infoTitle}>{dish.category}</p>
            </div>
            <div className={styles.btnWrapper}>
                <button onClick={() => setCurrentDish(dish)} className={styles.btn}>Opdater</button>
                <button onClick={() => removeDishById(dish._id)} className={styles.btn}>Slet</button>
            </div>
        </div>
    )
}