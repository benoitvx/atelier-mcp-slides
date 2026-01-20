import { useState, useEffect, useCallback } from 'react'

interface UseSlideNavigationOptions {
  totalSlides: number
  initialSlide?: number
}

interface UseSlideNavigationReturn {
  currentSlide: number
  totalSlides: number
  goToSlide: (n: number) => void
  nextSlide: () => void
  prevSlide: () => void
  isFirst: boolean
  isLast: boolean
}

export function useSlideNavigation({
  totalSlides,
  initialSlide = 1,
}: UseSlideNavigationOptions): UseSlideNavigationReturn {
  const [currentSlide, setCurrentSlide] = useState(initialSlide)

  const goToSlide = useCallback(
    (n: number) => {
      if (n >= 1 && n <= totalSlides) {
        setCurrentSlide(n)
      }
    },
    [totalSlides]
  )

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if focus is in input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          prevSlide()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(1)
          break
        case 'End':
          e.preventDefault()
          goToSlide(totalSlides)
          break
        default:
          // Number keys 1-9 to jump to slide
          const num = parseInt(e.key, 10)
          if (!isNaN(num) && num >= 1 && num <= 9 && num <= totalSlides) {
            e.preventDefault()
            goToSlide(num)
          }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide, totalSlides])

  return {
    currentSlide,
    totalSlides,
    goToSlide,
    nextSlide,
    prevSlide,
    isFirst: currentSlide === 1,
    isLast: currentSlide === totalSlides,
  }
}
