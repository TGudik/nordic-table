import { useLoaderData } from "react-router-dom";
import SectionHeader from "../sectionHeader/SectionHeader"
import styles from "./highlightedDishes.module.css"
import HighlightedDish from "../highlightedDIsh/HighlightedDish";

export default function HighlightedDishes() {

    const dishes = useLoaderData()

    let filteredDishes = dishes.filter((dish) => dish.isSignature === true)

    return (
      <div className={styles.sectionWrapper}>
        <SectionHeader
          overTitle={"UDVALGTE RETTER"}
          title={"Vores signaturretter"}
          subTitle={
            "Hver af vores signaturretter er omhyggeligt sammensat af sæsonens bedste nordiske råvarer."
          }
        />
        <div className={styles.dishesWrapper}>
            {filteredDishes.slice(0, 3).map((dish) => {
                return (
                    <HighlightedDish key={dish._id} category={dish.category} img={dish.image} price={dish.price} description={dish.description} title={dish.title}/>
                )
            }
            )}
        </div>
        <button className={styles.seeMenu}>SE HELE MENUEN</button>
      </div>
    );
}