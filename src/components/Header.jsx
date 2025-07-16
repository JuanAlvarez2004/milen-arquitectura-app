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
      gsap.to("#navBurger", {
        y: -30,
        autoAlpha: 0,
        duration: 0.1,
        ease: "power1.inOut",
        onComplete: () => setShowMenu(false),
      });
    }
  }, [isOpen, showMenu])

  useEffect(() => {
    if (showMenu && isOpen) {
      gsap.fromTo(
        "#navBurger",
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, ease: "power1.inOut" }
      );
    }
  }, [showMenu, isOpen])

  return (
    <nav id="nav" className="bg-white fixed top-0 left-0 right-0 z-10 " aria-label="Menú principal de navegación">
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        <div className="text-3xl font-bold font-serif" aria-label="Logo Milen Arquitectos">
          <Link to="/" onClick={handleNav} aria-label="Ir a inicio" title="Inicio">MA</Link>
        </div>
        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-3xl focus:outline-none"
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
              className={`text-gray-700 text-xs tracking-widest ${location.pathname === '/' ? 'font-bold text-black' : ''}`}
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
                className={`text-gray-700 text-xs tracking-widest ${location.hash === '#projects' ? 'font-bold text-black' : ''}`}
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
                className="text-gray-700 text-xs tracking-widest"
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
              className={`text-gray-700 text-xs tracking-widest ${location.pathname === '/services' ? 'font-bold text-black' : ''}`}
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
              className={`text-gray-700 text-xs tracking-widest ${location.pathname === '/about' ? 'font-bold text-black' : ''}`}
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
              className={`text-gray-700 text-xs tracking-widest ${location.pathname === '/contact' ? 'font-bold text-black' : ''}`}
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
        <ul id='navBurger' className="flex flex-col items-end pr-10 gap-3 bg-white py-8 md:hidden" role="menu" aria-label="Opciones móviles">          
          <li role="none">
            <Link
              className={`text-gray-700 text-base tracking-widest ${location.pathname === '/' ? 'font-bold text-black' : ''}`}
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
                className={`text-gray-700 text-base tracking-widest ${location.hash === '#projects' ? 'font-bold text-black' : ''}`}
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
                className="text-gray-700 text-base tracking-widest"
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
              className={`text-gray-700 text-base tracking-widest ${location.pathname === '/services' ? 'font-bold text-black' : ''}`}
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
              className={`text-gray-700 text-base tracking-widest ${location.pathname === '/about' ? 'font-bold text-black' : ''}`}
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
              className={`text-gray-700 text-base tracking-widest ${location.pathname === '/contact' ? 'font-bold text-black' : ''}`}
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
      )}
    </nav>
  );
};

export default Header;