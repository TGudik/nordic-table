import styles from "./footer.module.css"
import logo from "../../assets/logos/logoWhite.png"
import { Facebook, Instagram, GeoAltFill, PhoneFill, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <div className={styles.soMe}>
            <img src={logo} alt="Nordic Table logo" className={styles.logo} />
            <p className={styles.logoSubtext}>
              Nordisk køkken med fokus pa sæsonens <br />
              råvarer, enkelhed og hygge.
              <br />
              Velkommen til bordet.
            </p>
            <div className={styles.icons}>
              <Facebook size={40} color="#fff" />
              <Instagram size={40} color="#fff" />
            </div>
          </div>
          <div className={styles.openHours}>
            <h3 className={styles.footerHeading}>Åbningstider</h3>
            <ul className={styles.dayNhourList}>
              <li className={styles.dayNhour}>
                <p className={styles.day}>Mandag</p>
                <p className={styles.hour}>Lukket</p>
              </li>
              <li className={styles.dayNhour}>
                <p className={styles.day}>Tirsdag-torsdag</p>
                <p className={styles.hour}>17-22</p>
              </li>
              <li className={styles.dayNhour}>
                <p className={styles.day}>Fredag-lørdag</p>
                <p className={styles.hour}>17-23</p>
              </li>
              <li className={styles.dayNhour}>
                <p className={styles.day}>Søndag</p>
                <p className={styles.hour}>12-20</p>
              </li>
            </ul>
          </div>
          <div className={styles.linksWrapper}>
            <h3 className={styles.footerHeading}>HURTIGE LINKS</h3>
            <div className={styles.links}>
              <Link className={styles.link} to={"/book"}>
                Book bord
              </Link>
              <Link className={styles.link} to={"/menu"}>
                Menu
              </Link>
            </div>
          </div>
          <div className={styles.contactWrapper}>
            <h3 className={styles.footerHeading}>Kontakt os</h3>
            <ul className={styles.contactInfo}>
              <li>
                <GeoAltFill size={20} color="#CBA964" />
                <p className={styles.contactText}>Nordgade 12, 9000 Aalborg</p>
              </li>
              <li>
                <TelephoneFill size={20} color="#CBA964" />
                <p className={styles.contactText}>+45 12 34 56 78</p>
              </li>
              <li>
                <EnvelopeFill size={20} color="#CBA964" />
                <p className={styles.contactText}>info@nordictable.dk</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyrightWrapper}>
          <p className={styles.copyright}>
            © 2026 Nordic Table. Alle rettigheder forbeholdes
          </p>
          <p className={styles.footerNote}>Designet og udviklet med omhu</p>
        </div>
      </div>
    );
}