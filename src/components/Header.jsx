import { useState } from "react";
import { Link, useLocation } from "react-router"

import gsap from "gsap"
import { useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation()

  const handleNav = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      setShowMenu(true);
    } else if (showMenu) {
      // Cierre: primero ítems desaparecen, luego el fondo se contrae
      const liBurger = document.querySelectorAll("#navBurger li")
      const underlines = document.querySelectorAll("#navBurger .nav-underline")
      const tl = gsap.timeline({ onComplete: () => setShowMenu(false) })
      tl
        .to(underlines, {
          scaleX: 0, duration: 0.18, ease: "power2.in",
          stagger: { each: 0.06, from: "end" }, transformOrigin: "left center"
        })
        .to(liBurger, {
          y: -8, alpha: 0, duration: 0.18, ease: "power1.in",
          stagger: { each: 0.06, from: "end" }
        }, "<")
        .to("#navBurgerWrapper", { height: 0, duration: 0.4, ease: "power2.inOut", marginLeft: 60, marginRight: 60}, ">-.05")
    }
  }, [isOpen, showMenu])

  // Apertura: fondo se estira → luego aparecen los ítems con stagger
  useEffect(() => {
    if (showMenu && isOpen) {
      const liBurger = document.querySelectorAll("#navBurger li")
      const underlines = document.querySelectorAll("#navBurger .nav-underline")

      gsap.set(liBurger, { y: 12, alpha: 0 })
      gsap.set(underlines, { scaleX: 0 })
      gsap.set("#navBurgerWrapper", { height: 0, marginLeft: 60, marginRight: 60 })

      const tl = gsap.timeline()
      tl
        .to("#navBurgerWrapper", {
          height: "auto", duration: 0.45, marginLeft: 20, marginRight: 20, ease: "power2.inOut"
        })
        .to(liBurger, {
          y: 0, alpha: 1, duration: 0.22, ease: "power2.out", stagger: 0.09
        }, "<.3")
        .to(underlines, {
          scaleX: 1, duration: 0.4, ease: "power2.out", stagger: 0.09, transformOrigin: "left center"
        }, "<")
    }
  }, [showMenu, isOpen])

  return (
    <nav id="nav" className="bg-white fixed top-0 left-0 right-0 z-10 " aria-label="Menú principal de navegación">
      <div className="flex justify-between items-center p-5">
        <div className="text-3xl font-bold font-serif" aria-label="Logo Milen Arquitectos">
          <Link to="/" onClick={handleNav} aria-label="Ir a inicio" title="Inicio">MA</Link>
        </div>
        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-3xl focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={isOpen}
          aria-controls="navBurger"
        >
          {isOpen ? "✕" : "☰"}
        </button>
        {/* Menú horizontal (desktop) */}
        <ul className="hidden md:flex gap-12 items-center" role="menubar" aria-label="Opciones principales">
          <li role="none">
            <Link
              className={`text-xs tracking-widest ${location.pathname === '/' ? 'font-bold text-black' : ''}`}
              to="/"
              onClick={handleNav}
              role="menuitem"
              aria-current={location.pathname === '/' ? "page" : undefined}
              tabIndex={0}
              title="Inicio"
            >
              INICIO
            </Link>
          </li>
          <li role="none">
            {location.pathname === '/' ? (
              <a
                className={`text-xs tracking-widest ${location.hash === '#projects' ? 'font-bold text-black' : ''}`}
                href="#projects"
                onClick={handleNav}
                role="menuitem"
                aria-current={location.hash === '#projects' ? "page" : undefined}
                tabIndex={0}
                title="Proyectos"
              >
                PROYECTOS
              </a>
            ) : (
              <Link
                className="text-xs tracking-widest"
                to="/"
                onClick={handleNav}
                role="menuitem"
                tabIndex={0}
                title="Proyectos"
              >
                PROYECTOS
              </Link>
            )}
          </li>
          <li role="none">
            <Link
              className={`text-xs tracking-widest ${location.pathname === '/services' ? 'font-bold text-black' : ''}`}
              to="/services"
              onClick={handleNav}
              role="menuitem"
              aria-current={location.pathname === '/services' ? "page" : undefined}
              tabIndex={0}
              title="Servicios"
            >
              SERVICIOS
            </Link>
          </li>
          <li role="none">
            <Link
              className={`text-xs tracking-widest ${location.pathname === '/about' ? 'font-bold text-black' : ''}`}
              to="/about"
              onClick={handleNav}
              role="menuitem"
              aria-current={location.pathname === '/about' ? "page" : undefined}
              tabIndex={0}
              title="Nosotros"
            >
              NOSOTROS
            </Link>
          </li>
          <li role="none">
            <Link
              className={`text-xs tracking-widest ${location.pathname === '/contact' ? 'font-bold text-black' : ''}`}
              to="/contact"
              onClick={handleNav}
              role="menuitem"
              aria-current={location.pathname === '/contact' ? "page" : undefined}
              tabIndex={0}
              title="Contacto"
            >
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
      {/* Menú hamburguesa (mobile) */}
      {showMenu && (
        <div id="navBurgerWrapper" className="md:hidden overflow-hidden bg-black" style={{ height: 0 }}>
        <ul id='navBurger' className="flex flex-col items-end pr-10 gap-3 py-8" role="menu" aria-label="Opciones móviles">
          <li role="none" className="flex flex-col">
            <Link
              className={`text-white tracking-widest ${location.pathname === '/' ? 'font-bold' : ''}`}
              to="/"
              onClick={handleNav}
              role="menuitem"
              aria-current={location.pathname === '/' ? "page" : undefined}
              tabIndex={0}
              title="Inicio"
            >
              Inicio
            </Link>
            <span className="nav-underline block h-px bg-white"></span>
          </li>
          <li role="none" className="flex flex-col">
            {location.pathname === '/' ? (
              <a
                className={`text-white tracking-widest ${location.hash === '#projects' ? 'font-bold' : ''}`}
                href="#projects"
                onClick={handleNav}
                role="menuitem"
                aria-current={location.hash === '#projects' ? "page" : undefined}
                tabIndex={0}
                title="Proyectos"
              >
                Proyectos
              </a>
            ) : (
              <Link
                className="text-white tracking-widest"
                to="/"
                onClick={handleNav}
                role="menuitem"
                tabIndex={0}
                title="Proyectos"
              >
                Proyectos
              </Link>
            )}
            <span className="nav-underline block h-px bg-white"></span>
          </li>
          <li role="none" className="flex flex-col">
            <Link
              className={`text-white tracking-widest ${location.pathname === '/services' ? 'font-bold' : ''}`}
              to="/services"
              onClick={handleNav}
              role="menuitem"
              aria-current={location.pathname === '/services' ? "page" : undefined}
              tabIndex={0}
              title="Servicios"
            >
              Servicios
            </Link>
            <span className="nav-underline block h-px bg-white"></span>
          </li>
          <li role="none" className="flex flex-col">
            <Link
              className={`text-white tracking-widest ${location.pathname === '/about' ? 'font-bold' : ''}`}
              to="/about"
              onClick={handleNav}
              role="menuitem"
              aria-current={location.pathname === '/about' ? "page" : undefined}
              tabIndex={0}
              title="Nosotros"
            >
              Nosotros
            </Link>
            <span className="nav-underline block h-px bg-white"></span>
          </li>
          <li role="none" className="flex flex-col">
            <Link
              className={`text-white tracking-widest ${location.pathname === '/contact' ? 'font-bold' : ''}`}
              to="/contact"
              onClick={handleNav}
              role="menuitem"
              aria-current={location.pathname === '/contact' ? "page" : undefined}
              tabIndex={0}
              title="Contacto"
            >
              Contacto
            </Link>
            <span className="nav-underline block h-px bg-white"></span>
          </li>
        </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;