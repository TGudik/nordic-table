import styles from "./navigation.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../../assets/logos/logoBlack.png"

export default function Navigation() {
    const [isOpen, setOpen] = useState(false)

    return(
        <div className={styles.navContainer}>
            <div className={styles.navContent}>
              <Link to="/" className={styles.logoLink}>{isOpen && <img className={styles.logoImg} src={logo} alt="Nordic Table Logo" />}</Link>
                <div 
                onClick={() => setOpen((prev) => !prev)} 
                className={`${styles.burger} ${isOpen ? styles.open : ""}`}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>
              <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                <Link 
                className={styles.navLink} to="/">
                  Forside
                </Link>
                <Link 
                className={styles.navLink} to="/">
                  Forside
                </Link>
                <Link 
                className={styles.navLink} to="/">
                  Forside
                </Link>
                <Link 
                className={styles.navLink} to="/">
                  Forside
                </Link>
              </nav>
            </div>

        </div>
    )

}