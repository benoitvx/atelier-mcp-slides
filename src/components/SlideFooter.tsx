import styles from '../styles/slides.module.css'

interface SlideFooterProps {
  showBadge?: boolean
}

export function SlideFooter({ showBadge = true }: SlideFooterProps) {
  return (
    <footer className={styles.slideFooter}>
      <div className={styles.footerLine}></div>
      {showBadge && (
        <div className={styles.footerBadge}>
          <span className={styles.mcpBadge}>MCP</span>
        </div>
      )}
    </footer>
  )
}
