import { Outlet } from 'react-router'
import Header from './Header.jsx'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'

function Layout() {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Header />
      <main id="main-content" tabIndex={-1} aria-label="Contenido principal de la página">
        <Outlet />
      </main>
    </>
  )
}

export default Layout