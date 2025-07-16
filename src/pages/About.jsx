import { useEffect } from 'react'
import gsap from 'gsap'

import SEOHead from '../components/SEOHead.jsx'
import SchemaMarkup from '../components/SchemaMarkup.jsx'
import arqs from '../assets/images/arqs_3.webp'

function About() {
  useEffect(() => {
    gsap.fromTo('#about-title', { y: 15, autoAlpha: 0, filter: 'blur(10px)' }, {
      duration: .5,
      y: 0,
      autoAlpha: 1,
      filter: '',
    })
  }, [])

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Milén Arquitectura",
    "member": [
      {
        "@type": "Person",
        "name": "Yamil",
        "jobTitle": "Arquitecto",
        "description": "Especialista en visualización arquitectónica, renders y diseño conceptual",
        "alumniOf": "Universidad de Ibagué"
      },
      {
        "@type": "Person", 
        "name": "Valentina",
        "jobTitle": "Arquitecta",
        "description": "Especialista en interiorismo con enfoque perfeccionista en decisiones técnicas y estéticas",
        "alumniOf": "Universidad del Tolima"
      }
    ]
  }

  return (
    <div className="min-h-screen w-full pt-24 p-6 text-gray-700">
      <SEOHead 
        title="Nosotros - Milén Arquitectura | Conoce a Nuestro Equipo de Arquitectos"
        description="Conoce a Valentina y Yamil, los arquitectos fundadores de Milén Arquitectura. Especialistas en diseño arquitectónico e interiorismo en Ibagué, Tolima."
        keywords="arquitectos Ibagué, Valentina arquitecta, Yamil arquitecto, equipo Milén Arquitectura, interiorismo Tolima, diseño arquitectónico Colombia"
        canonical="https://milenarquitectura.com/about"
      />
      <SchemaMarkup type="custom" data={teamSchema} />
      <div className="max-w-4xl mx-auto">
        <h1 id="about-title" className="font-serif text-4xl md:text-5xl text-black font-bold py-3 mb-8" role="heading" aria-level="1">
          NOSOTROS
        </h1>
        
        <article id='about-container' className="w-full m-auto" aria-labelledby="about-title" aria-label="Historia y equipo de Milén Arquitectura">
          <div className='h-96 overflow-hidden mask-b-from-40%'>
            <img src={arqs} className='w-full object-cover' alt="Fotografía de los arquitectos Valentina y Yamil" title='Valentina y Yamil, arquitectos de Milén' aria-label="Fotografía de los arquitectos Valentina y Yamil" />
          </div>

          <div className='-mt-20 sm:-mt-9 flex flex-col gap-2 text-gray-700 text-pretty'>
            <section aria-labelledby="company-origin">
              <h2 id="company-origin" className="sr-only">Origen de Milén Arquitectura</h2>
              <p>
                <span className='font-bold text-black'>Milén Arquitectura</span> nace del encuentro entre dos profesionales apasionados por el diseño. Luego de coincidir trabajando en una misma empresa, descubrimos que compartíamos una visión similar sobre la arquitectura y los espacios: 
                <span className='text-black font-medium'> crear lugares pensados desde las personas, con identidad, funcionalidad y detalle.</span> Fue así como, motivados por la vocación y el deseo de emprender un camino propio, decidimos unir nuestras habilidades y dar vida a este proyecto.
              </p>
            </section>
            
            <section aria-labelledby="philosophy">
              <h2 id="philosophy" className="sr-only">Filosofía de Diseño</h2>
              <p>
                Diseñamos con propósito. No creemos en soluciones genéricas: <span className='text-black font-medium'> cada diseño debe hablar de ti, de tu estilo de vida, tus necesidades y tus sueños</span>. Por eso, nos enfocamos en crear espacios con identidad, porque sabemos que los mismos materiales no funcionan igual para todos, y que la verdadera belleza está en el detalle que conecta con lo personal. Somos un equipo apasionado, comprometido y altamente dedicado.
              </p>
            </section>
            
            <section aria-labelledby="team-members">
              <h2 id="team-members" className="sr-only">Miembros del Equipo</h2>
              <ul className='pl-6 my-2 border-l-4' aria-label="Perfiles profesionales del equipo">
                <li className='list-none p-0 m-0'>
                  <span className='font-bold text-black'>Yamil</span>, egresado de la <span className="text-black">Universidad de Ibagué</span>, es detallista con la visualización arquitectónica, amante de los renders y el diseño conceptual.
                </li>
                <li className='list-none p-0 m-0'>
                  <span className='font-bold text-black'>Valentina</span>, egresada de la <span className="text-black">Universidad del Tolima</span>, vive el interiorismo con una pasión perfeccionista que se refleja en cada decisión técnica y estética.
                </li>
              </ul>
            </section>
            
            <section aria-labelledby="services-coverage">
              <h2 id="services-coverage" className="sr-only">Servicios y Cobertura</h2>
              <p>
                Ofrecemos servicios de <strong>diseño arquitectónico</strong>, <strong>interiorismo</strong>, <strong>remodelación</strong>, <strong>ejecución o dirección de obra</strong>, <strong>asesorías y consultorías</strong>. Aunque estamos ubicados en <span className="text-black font-medium">Ibagué, Tolima</span>, trabajamos a nivel nacional e internacional gracias a nuestro enfoque digital, cercano y flexible. 
              </p>
            </section>
            
            <section aria-labelledby="mission-statement">
              <h2 id="mission-statement" className="sr-only">Declaración de Misión</h2>
              <p>
                En Milén no solo diseñamos: <span className='text-black font-medium'>interpretamos tu historia y la transformamos en espacios que se sienten muy tuyos</span>.
              </p>
              <blockquote className='pt-4 italic text-sm text-center' cite="Milén Arquitectura">
                <p>'Porque cada lugar merece tener alma. Y cada cliente, un diseño que lo represente.'</p>
                <footer className="sr-only">— Filosofía de Milén Arquitectura</footer>
              </blockquote>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

export default About