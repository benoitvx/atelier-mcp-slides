import type { ReactNode } from 'react'
import { SlideHeader } from './SlideHeader'
import { SlideFooter } from './SlideFooter'
import styles from '../styles/slides.module.css'

interface SlideLayoutProps {
  number: number
  title: string
  section?: string
  sectionSubtitle?: string
  partNumber?: number
  background?: 'default' | 'alt'
  children: ReactNode
  totalSlides: number
  isTitleSlide?: boolean
  isSectionSlide?: boolean
}

export function SlideLayout({
  number,
  title,
  section,
  sectionSubtitle,
  partNumber,
  background = 'default',
  children,
  totalSlides,
  isTitleSlide = false,
  isSectionSlide = false,
}: SlideLayoutProps) {
  const bgClass = background === 'alt' ? styles.slideAlt : styles.slideDefault
  const showDecorativeNumber = !isTitleSlide && partNumber !== undefined

  // Format section sur une seule ligne: "3 · Pédagogie MCP"
  const sectionDisplay = section && partNumber
    ? `${partNumber} · ${section}`
    : section

  return (
    <article
      className={`${styles.slideLayout} ${bgClass} ${styles.slideTransition}`}
      aria-label={`Slide ${number} sur ${totalSlides} : ${title}`}
    >
      <SlideHeader />

      <div className={styles.slideMain}>
        {showDecorativeNumber && (
          <div className={styles.decorativeNumberContainer} aria-hidden="true">
            <span className={styles.decorativeNumber}>{partNumber}</span>
          </div>
        )}

        <div className={styles.slideContentArea}>
          {sectionDisplay && !isSectionSlide && (
            <div className={styles.sectionIndicatorWrapper}>
              <div className={styles.sectionBar}></div>
              <div className={styles.sectionTextGroup}>
                <span className={styles.sectionLabel}>{sectionDisplay}</span>
              </div>
            </div>
          )}

          {isSectionSlide ? (
            <div className={styles.sectionSlideContent}>
              <div className={styles.sectionSlideBox}>
                <h1 className={styles.sectionSlideTitle}>{title}</h1>
                {sectionSubtitle && (
                  <p className={styles.sectionSlideSubtitle}>{sectionSubtitle}</p>
                )}
              </div>
            </div>
          ) : (
            <>
              <header className={styles.slideTitleHeader}>
                <h1 className={styles.slideMainTitle}>{title}</h1>
              </header>
              <div className={styles.slideBody}>{children}</div>
            </>
          )}
        </div>
      </div>

      <SlideFooter />
    </article>
  )
}
