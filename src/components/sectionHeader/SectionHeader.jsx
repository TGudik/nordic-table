import styles from "./sectionHeader.module.css"

export default function SectionHeader({overTitle, title, subTitle, typeTwo, colorTwo}) {

    return (
      <div className={`${styles.headerWrapper} ${typeTwo && styles.typeTwo}`}>
        <h2
          className={`${styles.overTitle} ${typeTwo && styles.typeTwo} ${colorTwo && styles.colorTwo}`}
        >
          {overTitle}
        </h2>
        <h1
          className={`${styles.title} ${typeTwo && styles.typeTwo} ${colorTwo && styles.colorTwo}`}
        >
          {title}
        </h1>
        <h3
          className={`${styles.subTitle} ${typeTwo && styles.typeTwo} ${colorTwo && styles.colorTwo}`}
        >
          {subTitle}
        </h3>
      </div>
    );

}