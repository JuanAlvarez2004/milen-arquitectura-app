import { useEffect, useState, useLayoutEffect, useRef } from "react"
import { useLocation } from 'react-router'
import gsap from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { SplitText } from "gsap/SplitText"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Draggable } from "gsap/Draggable"

import Hero from '../components/Hero.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import Starting from '../components/Starting.jsx'
import SEOHead from '../components/SEOHead.jsx'
import SchemaMarkup from '../components/SchemaMarkup.jsx'
import { fetchHomePage } from '../services/cmsApi'
import { config } from '../config/config'

import { useMediaQuery } from "react-responsive"


gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText, ScrollToPlugin, Draggable)


function Home() {
  const [startingComplete, setStartingComplete] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [projects, setProjects] = useState([])
  const [isOpen, setIsOpen] = useState([])
  const projectRefs = useRef([])
  const draggableInstances = useRef([])
  const scrollTriggerInstances = useRef([])
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const resolveMediaUrl = (media) => {
    const mediaUrl = media?.url

    if (!mediaUrl) return ''
    if (mediaUrl.startsWith('http') || mediaUrl.startsWith('https')) return mediaUrl

    return `${config.CMS_API_URL}${mediaUrl}`
  }

  useEffect(() => {
    let mounted = true
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetchHomePage(controller.signal)
      .then(({ data }) => {
        if (!mounted) return

        setData(data)
        const cmsProjects = Array.isArray(data?.project)
          ? data.project
          : (Array.isArray(data?.projects) ? data.projects : [])
        const parsedProjects = cmsProjects.map((project, idx) => {
          const image1 = resolveMediaUrl(project?.image1)
          const image2 = resolveMediaUrl(project?.image2) || image1

          return {
            id: idx + 1,
            title: project?.title || '',
            description: project?.description || '',
            image1,
            image2,
            location: project?.location || '',
            year: project?.year ? String(project.year) : '',
          }
        })

        setProjects(parsedProjects)
        setIsOpen(Array(parsedProjects.length).fill(false))
      })
      .catch(err => {
        if (!mounted || err.name === 'AbortError') return
        console.error('Error fetching projects from CMS:', err)
        setError(err)
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => {
      mounted = false
      controller.abort()
    }
  }, [])

  useLayoutEffect(() => {
    // Configuración inmediata
    window.history.scrollRestoration = 'manual'

    // Detectar si hay scroll actual
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop
    const hasScroll = currentScroll > 0

    if (hasScroll) {
      // Si hay scroll, hacer transición suave
      gsap.set('body', { opacity: 0 })

      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 0.2,
        onComplete: () => {
          gsap.to('body', {
            opacity: 1,
            duration: 0.2,
            onComplete: () => setIsReady(true)
          })
        }
      })
    } else {
      // Si no hay scroll, mostrar inmediatamente
      gsap.set('body', { opacity: 1 })
      setIsReady(true)
    }

  }, [])

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#projects") {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (!isReady) return

    // Bloquear scroll
    document.documentElement.style.overflow = 'hidden'

    // Timeline maestro 
    const masterTL = gsap.timeline()

    const animateStarting = () => {
      const splitTitle = new SplitText('#starting-title', { type: 'chars' })
      const splitSections = new SplitText('#starting-sections', { type: 'chars' })

      const startingTL = gsap.timeline({
        onComplete: () => {
          setStartingComplete(true)
          document.documentElement.style.overflow = ''
        }
      })

      startingTL.from(splitTitle.chars, {
        duration: .5,
        opacity: 0,
        stagger: { each: 0.2 },
      }).from(splitSections.chars, {
        duration: .5,
        opacity: 0,
        stagger: { each: 0.2 },
      }, 0)
        .to('#starting-title', {
          duration: .5,
          x: (-window.innerWidth / 2) + 120,
          y: (-window.innerHeight / 2) + 40,
          stagger: 0.05,
          ease: 'power1.in'
        })
        .to('#starting-sections', {
          duration: .5,
          x: (window.innerWidth / 2) - 105,
          y: (-window.innerHeight / 2) + 40,
          stagger: 0.05,
          ease: 'power1.in'
        }, '<')
        .to(splitTitle.chars, {
          duration: .2,
          x: -20,
          opacity: 0,
          stagger: { each: 0.08, from: 'end' }
        })
        .to(splitSections.chars, {
          duration: .2,
          x: 20,
          opacity: 0,
          stagger: { each: 0.08 }
        }, '<')
        .to('#starting-bg', {
          y: -window.innerHeight,
          duration: 1
        }, '-=0.8')

      return startingTL
    }

    const animateHeader = () => {
      gsap.set('#nav', {
        y: -100,
        autoAlpha: 0
      })

      return gsap.to('#nav', {
        duration: 1,
        y: 0,
        autoAlpha: 1
      })
    }

    const animateHero = () => {
      const tl = gsap.timeline()

      tl.from('#header', {
        y: -20,
        duration: 0.5,
        alpha: 0,
        delay: 0.5,
      })
        .from('#projects', {
          y: -20,
          duration: 0.5,
          alpha: 0,
        }, '<')

      return tl
    }


    const animateProjects = () => {
      const projects = gsap.utils.toArray('.project')

      // Anima la escala en función del scroll
      projects.forEach((proj, index) => {
        const tween = gsap.from(proj, {
          scale: 0.8,
          scrollTrigger: {
            trigger: proj,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 0.5,
          },
        })

        // Guardar referencia del ScrollTrigger
        scrollTriggerInstances.current[index] = ScrollTrigger.getById(tween.scrollTrigger.id)
      })
    }

    masterTL
      .add(animateStarting())
      .add(animateHeader(), '-=0.7')
      .add(animateHero(), '<')
      .add(animateProjects())

  }, [isReady])

  const handleOpen = (idx) => {
    if (!projectRefs.current[idx]) return

    const newIsOpen = isOpen.map((open, i) => i === idx ? !open : open)
    setIsOpen(newIsOpen)

    const el = projectRefs.current[idx]
    const scrollTrigger = scrollTriggerInstances.current[idx]

    if (el) {
      const widthEl = el.offsetWidth

      // Si se está abriendo el proyecto
      if (!isOpen[idx] && newIsOpen[idx]) {
        gsap.from(el, {
          duration: 1,
          autoAlpha: 0,
          ease: "power1.out"
        })

        let heightToMove = isMobile ? 250 : 460
        let offSetX = isMobile ? -90 : 300

        gsap.to(el, {
          height: heightToMove,
          x: (widthEl / 2) - offSetX,
          duration: 1,
          ease: "power1.out"
        })

        // Pausar ScrollTrigger y resetear escala
        if (scrollTrigger) {
          scrollTrigger.disable()
        }
        gsap.set(el, { scale: 1 })

        // Crear draggable con bounds limitados al viewport
        draggableInstances.current[idx] = Draggable.create(el, {
          type: 'x',
          inertia: true
        })[0]
      }
      // Si se está cerrando el proyecto
      else if (isOpen[idx] && !newIsOpen[idx]) {
        // Destruir draggable si existe
        if (draggableInstances.current[idx]) {
          draggableInstances.current[idx].kill()
          draggableInstances.current[idx] = null
        }

        gsap.to(el, {
          height: "auto",
          x: 0,
          duration: .8,
          ease: "power1.out"
        })

        // Resetear posición
        gsap.set(el, { x: 0 })

        // Reactivar ScrollTrigger
        if (scrollTrigger) {
          scrollTrigger.enable()
          scrollTrigger.refresh()
        }
      }
    }
  }


  return (
    <>
      <SEOHead
        title="Milén Arquitectura - Inicio | Diseño Arquitectónico e Interiorismo en Ibagué"
        description="Somos un equipo de arquitectos apasionados por el diseño y la creación de espacios innovadores. Conoce nuestros proyectos arquitectónicos en Ibagué, Tolima."
        canonical="https://milenarquitectura.com/"
      />
      <SchemaMarkup type="Organization" />
      <Starting isComplete={startingComplete} />
      <Hero data={data} error={error} loading={loading} />
      <section
        id="projects"
        className="max-w-full flex flex-col gap-4 overflow-x-hidden pb-10"
        aria-label="Lista de proyectos arquitectónicos"
        tabIndex={-1}
      >
        {
          projects.length > 0 &&
          projects.map((p, idx) => (
            <div
              ref={(el) => (projectRefs.current[idx] = el)}
              key={p.id}
              onClick={() => handleOpen(idx)}
              className="project cursor-crosshair"
              role="button"
              tabIndex={0}
              aria-pressed={isOpen[idx]}
              aria-label={`Abrir detalles del proyecto ${p.title}`}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpen(idx)
                }
              }}
            >
              <ProjectGrid isOpen={isOpen[idx]} project={p} />
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Home