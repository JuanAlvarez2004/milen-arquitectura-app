import { useEffect } from 'react'

const Starting = ({ isComplete }) => {
  useEffect(() => {
    // Manejar el estado de scroll durante la pantalla de inicio
    if (!isComplete) {
      document.body.style.overflow = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.height = ''
    }
  }, [isComplete])

  return (
    <div
      className={`m-0 p-0 h-dvh w-full fixed z-30 grid place-content-center grid-cols-2 gap-6 overflow-hidden transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : ''
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Pantalla de bienvenida de Milén Arquitectura"
      aria-hidden={isComplete}
    >
      <div 
        id="starting-bg" 
        className="bg-black h-full w-full absolute inset-0" 
        aria-hidden="true"
      ></div>
      <h1 className="sr-only">Milén Arquitectura - Cargando</h1>
      <span 
        id="starting-title" 
        className="text-2xl font-bold font-serif text-white justify-self-end relative z-10" 
        role="heading" 
        aria-level="2"
        aria-label="Milén"
      >
        MILÉN
      </span>
      <span 
        id="starting-sections" 
        className="text-2xl text-white tracking-widest relative z-10" 
        aria-label="Secciones de la página"
      >
        IPSNC
      </span>
    </div>
  )
}

export default Starting