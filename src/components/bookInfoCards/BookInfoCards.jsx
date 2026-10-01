import styles from "./bookInfoCards.module.css"
import BookInfoCard from "../bookInfoCard/BookInfoCard"
import { ForkKnife, ClockFill, TelephoneFill } from "react-bootstrap-icons"

export default function BookInfoCards() {


    return (
      <div className={styles.cardsWrapper}>
        <BookInfoCard
          icon={<ForkKnife fill="#916B1C" />}
          title={"Bordstørrelse"}
          description={
            "Vi tager imod selskaber fra 1 til 12 personer. Kontakt os direkte for større selskaber."
          }
        />
        <BookInfoCard
          icon={<ClockFill fill="#916B1C" />}
          title={"Åbningstider"}
          description={
            "Tirsdag-torsdag kl. 17-22. Fredag-lørdag kl. 17-23. Søndag kl. 12-20. Mandag lukket."
          }
        />
        <BookInfoCard
          icon={<TelephoneFill fill="#916B1C" />}
          title={"Kontakt"}
          description={
            "Ring på +45 12 34 56 78 eller skriv til info@nordictable.dk ved spørgsmål."
          }
        />
      </div>
    );
}