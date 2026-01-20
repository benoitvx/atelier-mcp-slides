import styles from '../styles/slides.module.css'

interface SectionIndicatorProps {
  partNumber: number
  sectionTitle: string
  sectionSubtitle?: string
}

export function SectionIndicator({ partNumber, sectionTitle, sectionSubtitle }: SectionIndicatorProps) {
  return (
    <div className={styles.sectionIndicator}>
      <div className={styles.sectionBar}></div>
      <div className={styles.sectionContent}>
        <span className={styles.sectionTitle}>{sectionTitle}</span>
        {sectionSubtitle && (
          <span className={styles.sectionSubtitle}>{sectionSubtitle}</span>
        )}
      </div>
      {/* Grand chiffre décoratif */}
      <div className={styles.decorativeNumber} aria-hidden="true">
        {partNumber}
      </div>
    </div>
  )
}
