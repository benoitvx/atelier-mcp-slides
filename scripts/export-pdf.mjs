import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const TOTAL_SLIDES = 27
const BASE_URL = 'http://localhost:5173'

async function exportPdf() {
  console.log('Lancement du navigateur...')
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()

  // Taille de viewport pour les slides (16:9)
  await page.setViewport({ width: 1280, height: 720 })

  console.log('Navigation vers la présentation...')
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' })

  // Attendre que la slide soit chargée
  await page.waitForSelector('main')
  await new Promise(r => setTimeout(r, 500))

  // Masquer tous les éléments de navigation et footer
  await page.evaluate(() => {
    // Ajouter du CSS pour masquer les éléments
    const style = document.createElement('style')
    style.id = 'pdf-export-hide'
    style.textContent = `
      /* Masquer la barre de navigation */
      nav[aria-label="Navigation des slides"],
      [class*="navigation"] {
        display: none !important;
      }

      /* Masquer la barre de progression */
      [role="progressbar"],
      [class*="progressContainer"],
      [class*="progressBar"] {
        display: none !important;
      }

      /* Masquer le footer avec le trait bleu et le badge MCP */
      [class*="slideFooter"],
      [class*="footerLine"],
      [class*="footerBadge"],
      [class*="mcpBadge"] {
        display: none !important;
      }

      /* S'assurer que le contenu principal prend toute la hauteur */
      [class*="slideLayout"] {
        min-height: 100vh !important;
      }
    `
    document.head.appendChild(style)
  })

  await new Promise(r => setTimeout(r, 300))

  // Créer le document PDF
  const pdfDoc = await PDFDocument.create()

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    console.log(`Capture de la slide ${i}/${TOTAL_SLIDES}...`)

    // Attendre que le rendu soit stable
    await new Promise(r => setTimeout(r, 300))

    // Capture d'écran de la slide
    const screenshot = await page.screenshot({ type: 'png', fullPage: false })

    // Ajouter l'image au PDF
    const pngImage = await pdfDoc.embedPng(screenshot)
    const pdfPage = pdfDoc.addPage([1280, 720])
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: 1280,
      height: 720,
    })

    // Passer à la slide suivante (sauf pour la dernière)
    if (i < TOTAL_SLIDES) {
      await page.keyboard.press('ArrowRight')
      await new Promise(r => setTimeout(r, 200))
    }
  }

  // Sauvegarder le PDF
  const pdfPath = join(__dirname, '..', 'atelier-mcp-slides.pdf')
  const pdfBytes = await pdfDoc.save()
  writeFileSync(pdfPath, pdfBytes)

  console.log(`\n✅ PDF exporté: ${pdfPath}`)

  await browser.close()
}

exportPdf().catch(console.error)
