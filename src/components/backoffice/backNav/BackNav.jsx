import { Link } from "react-router-dom"
import styles from "./backNav.module.css"
import { ArrowLeft } from "react-bootstrap-icons"

export default function BackNav() {

    if (window.location.pathname === "/backoffice") {
        
        return (
            <div className={styles.navWrapper}>
                <Link to="/backoffice/dishes" className={styles.navLink}>Retter</Link>
                <Link to="/backoffice/bookings" className={styles.navLink}>Reservationer</Link>
            </div>
        )
    } else {
        return (
            <Link to={"/backoffice"} className={styles.backBtn}><ArrowLeft size={30}/>Tilbage til backoffice-menu</Link>
        )
    }

}