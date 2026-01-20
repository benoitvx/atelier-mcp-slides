import { useSlideNavigation } from './hooks/useSlideNavigation'
import { SlideNavigation } from './components/SlideNavigation'
import { SlideProgress } from './components/SlideProgress'
import {
  Slide01Titre,
  Slide02Mission,
  Slide03Objectif,
  Slide04Sondage,
  Slide05ProblemeSolution,
  Slide06Definition,
  Slide07Architecture,
  Slide08RagSchema,
  Slide09McpSchema,
  Slide10Comparatif,
  Slide11Exemples,
  Slide12Typologie,
  Slide13MessageCle,
  Slide14Quiz,
  Slide15TitreSection,
  Slide16DatagouvMcp,
  Slide17DemoDatagouvMcp,
  Slide18AppChatgpt,
  Slide19DemoAppChatgpt,
  Slide20PocMediatech,
  Slide21ArchitecturePoc,
  Slide22Apprentissages,
  Slide23Retenir,
  Slide24Checklist,
  Slide25Ressources,
  Slide26Questions,
  Slide27Merci,
} from './slides'

const TOTAL_SLIDES = 27

const slides = [
  Slide01Titre,
  Slide02Mission,
  Slide03Objectif,
  Slide04Sondage,
  Slide05ProblemeSolution,
  Slide06Definition,
  Slide07Architecture,
  Slide08RagSchema,
  Slide09McpSchema,
  Slide10Comparatif,
  Slide11Exemples,
  Slide12Typologie,
  Slide13MessageCle,
  Slide14Quiz,
  Slide15TitreSection,
  Slide16DatagouvMcp,
  Slide17DemoDatagouvMcp,
  Slide18AppChatgpt,
  Slide19DemoAppChatgpt,
  Slide20PocMediatech,
  Slide21ArchitecturePoc,
  Slide22Apprentissages,
  Slide23Retenir,
  Slide24Checklist,
  Slide25Ressources,
  Slide26Questions,
  Slide27Merci,
]

function App() {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    isFirst,
    isLast,
  } = useSlideNavigation({ totalSlides: TOTAL_SLIDES })

  const CurrentSlideComponent = slides[currentSlide - 1]

  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <main id="main-content" aria-live="polite">
        <CurrentSlideComponent totalSlides={TOTAL_SLIDES} />
      </main>

      <SlideProgress current={currentSlide} total={TOTAL_SLIDES} />
      <SlideNavigation
        current={currentSlide}
        total={TOTAL_SLIDES}
        onPrev={prevSlide}
        onNext={nextSlide}
        isFirst={isFirst}
        isLast={isLast}
      />
    </>
  )
}

export default App
