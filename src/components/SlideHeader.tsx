import styles from '../styles/slides.module.css'

export function SlideHeader() {
  return (
    <header className={styles.slideHeader}>
      <div className={styles.headerLeft}>
        {/* Bloc-marque officiel DSFR */}
        <p className="fr-logo">
          GOUVERNEMENT
        </p>
      </div>
      <div className={styles.headerRight}>
        <span className={styles.directionName}>Direction interministérielle du numérique</span>
      </div>
    </header>
  )
}
