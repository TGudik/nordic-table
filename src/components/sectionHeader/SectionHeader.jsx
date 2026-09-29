import styles from "./sectionHeader.module.css"

export default function SectionHeader({overTitle, title, subTitle, typeTwo}) {

    return (
      <div className={`${styles.headerWrapper} ${typeTwo && styles.typeTwo}`}>
        <h2 className={`${styles.overTitle} ${typeTwo && styles.typeTwo}`}>
          {overTitle}
        </h2>
        <h1 className={`${styles.title} ${typeTwo && styles.typeTwo}`}>
          {title}
        </h1>
        <h3 className={`${styles.subTitle} ${typeTwo && styles.typeTwo}`}>
          {subTitle}
        </h3>
      </div>
    );

}