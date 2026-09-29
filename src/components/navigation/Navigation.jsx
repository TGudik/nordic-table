import styles from "./navigation.module.css"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from "../../assets/logos/logoBlack.png"

export default function Navigation({home}) {
    const [isOpen, setOpen] = useState(false)

    let location = useLocation()

    return (
      <div
        className={`${styles.navContainer} ${isOpen && styles.navContainerOpen} ${!home && styles.notHome}`}
      >
        <div className={styles.navContent}>
          <Link to="/" className={styles.logoLink}>
            <img
              className={`${styles.logoImg} ${isOpen && styles.logoShow}`}
              src={logo}
              alt="Nordic Table Logo"
            />
          </Link>
          <div
            onClick={() => setOpen((prev) => !prev)}
            className={`${styles.burger} ${isOpen ? styles.open : ""}`}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
            <Link
              className={`${styles.navLink} ${location.pathname === "/" && styles.active}`}
              to="/"
            >
              Forside
            </Link>
            <Link
              className={`${styles.navLink} ${location.pathname === "/menu" && styles.active}`}
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className={`${styles.navLink} ${location.pathname === "/book" && styles.active}`}
              to="/book"
            >
              Book bord
            </Link>
            <Link
              className={`${styles.navLink} ${location.pathname === "/login" && styles.active}`}
              to="/"
            >
              Forside
            </Link>
          </nav>
        </div>
      </div>
    );

}