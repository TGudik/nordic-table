import MenuHeader from "../menuHeader/MenuHeader"
import styles from "./menuSection.module.css"
import starterImg from "../../assets/appetizers.png"
import mainImg from "../../assets/mainCourses.png"
import dessertImg from "../../assets/desserts.png"
import { useLoaderData } from "react-router-dom"
import MenuDish from "../menuDish/MenuDish"

export default function MenuSection() {

    const dishes = useLoaderData()

    const starters = dishes.filter((dish) => dish.category === "starter")
    const mains = dishes.filter(dish => dish.category === "main")
    const desserts = dishes.filter(dish => dish.category === "dessert")
    
    return (
      <div className={styles.sectionWrapper}>
        <MenuHeader img={starterImg} type={"Forretter"} />
        <div className={styles.dishesWrapper}>
          {starters.map((dish) => {
            return (
              <MenuDish
                key={dish._id}
                title={dish.title}
                description={dish.description}
                price={dish.price}
              />
            );
          })}
        </div>
        <MenuHeader img={mainImg} type={"Hovedretter"} />
        <div className={styles.dishesWrapper}>
          {mains.map((dish) => {
            return (
              <MenuDish
                key={dish._id}
                title={dish.title}
                description={dish.description}
                price={dish.price}
              />
            );
          })}
        </div>
        <MenuHeader img={dessertImg} type={"Desserter"} />
        <div className={styles.dishesWrapper}>
          {desserts.map((dish) => {
            return (
              <MenuDish
                key={dish._id}
                title={dish.title}
                description={dish.description}
                price={dish.price}
              />
            );
          })}
        </div>
      </div>
    );
}