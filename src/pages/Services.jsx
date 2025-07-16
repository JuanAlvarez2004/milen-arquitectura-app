import { useEffect } from 'react'
import gsap from 'gsap'
import SEOHead from '../components/SEOHead.jsx'
import SchemaMarkup from '../components/SchemaMarkup.jsx'

function Services() {
  useEffect(() => {
    gsap.fromTo('#services-title', { y: 15, autoAlpha: 0, filter: 'blur(10px)' }, {
      duration: .5,
      y: 0,
      autoAlpha: 1,
      filter: '',
    })
  }, [])

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Architectural Services",
    "provider": {
      "@type": "Organization", 
      "name": "Milén Arquitectura"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Arquitectura",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño Arquitectónico",
            "description": "Creamos espacios únicos que reflejan la personalidad y necesidades de nuestros clientes"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría Arquitectónica",
            "description": "Asesoramiento especializado en todas las etapas de tu proyecto arquitectónico"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Diseño de Interiores",
            "description": "Transformamos espacios interiores con soluciones funcionales y estéticamente atractivas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestión de Proyecto",
            "description": "Coordinamos y supervisamos cada etapa de construcción para garantizar resultados excepcionales"
          }
        }
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    }
  }

  return (
    <div className="min-h-screen pt-24 p-2 text-gray-700">
      <SEOHead 
        title="Servicios - Milén Arquitectura | Diseño Arquitectónico e Interiorismo"
        description="Descubre nuestros servicios de diseño arquitectónico, interiorismo, consultoría y gestión de proyectos. Enfoque residencial y comercial en Ibagué, Tolima."
        keywords="servicios arquitectura, diseño arquitectónico Ibagué, interiorismo Tolima, consultoría arquitectónica, gestión proyectos construcción"
        canonical="https://milenarquitectura.com/services"
      />
      <SchemaMarkup type="custom" data={servicesSchema} />
      <div className="max-w-4xl mx-auto">
        <header id="services-title" className='py-3 mb-8' role="banner">
          <h1 className="font-serif text-4xl md:text-5xl text-black font-bold">
            SERVICIOS
          </h1>
          <p className='text-gray-700 mt-2'>Enfoque residencial y comercial con soluciones personalizadas</p>
        </header>
        
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12" aria-label="Lista de servicios profesionales ofrecidos">
          <article className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300" itemScope itemType="https://schema.org/Service">
            <h2 className="text-xl font-bold text-black mb-4" itemProp="name">Diseño Arquitectónico</h2>
            <p className='text-gray-700' itemProp="description">
              Creamos espacios únicos que reflejan la personalidad y necesidades de nuestros clientes. Desde conceptualización hasta planos ejecutivos.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
              <li>Diseño conceptual y desarrollo de proyecto</li>
              <li>Planos arquitectónicos y técnicos</li>
              <li>Renders y visualizaciones 3D</li>
            </ul>
          </article>
          
          <article className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300" itemScope itemType="https://schema.org/Service">
            <h2 className="text-xl font-bold text-black mb-4" itemProp="name">Consultoría Arquitectónica</h2>
            <p className='text-gray-700' itemProp="description">
              Asesoramiento especializado en todas las etapas de tu proyecto arquitectónico. Optimización de espacios y viabilidad técnica.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
              <li>Análisis de viabilidad de proyectos</li>
              <li>Asesoría técnica especializada</li>
              <li>Optimización de espacios y costos</li>
            </ul>
          </article>
          
          <article className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300" itemScope itemType="https://schema.org/Service">
            <h2 className="text-xl font-bold text-black mb-4" itemProp="name">Diseño de Interiores</h2>
            <p className='text-gray-700' itemProp="description">
              Transformamos espacios interiores con soluciones funcionales y estéticamente atractivas. Cada detalle cuenta en la experiencia del usuario.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
              <li>Diseño de espacios interiores</li>
              <li>Selección de materiales y mobiliario</li>
              <li>Ambientación y decoración</li>
            </ul>
          </article>
          
          <article className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300" itemScope itemType="https://schema.org/Service">
            <h2 className="text-xl font-bold text-black mb-4" itemProp="name">Gestión de Proyecto</h2>
            <p className='text-gray-700' itemProp="description">
              Coordinamos y supervisamos cada etapa de construcción para garantizar resultados excepcionales. Control de calidad y tiempos.
            </p>
            <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
              <li>Dirección y supervisión de obra</li>
              <li>Control de calidad y tiempos</li>
              <li>Coordinación con contratistas</li>
            </ul>
          </article>
        </main>
        
        <section className="my-12 p-6 bg-gray-50 rounded-lg" aria-labelledby="coverage-area">
          <h2 id="coverage-area" className="text-2xl font-bold text-black mb-4">Área de Cobertura</h2>
          <p className="text-gray-700">
            Ubicados en <strong>Ibagué, Tolima</strong>, ofrecemos nuestros servicios a nivel<strong> nacional e internacional </strong> 
            gracias a nuestro enfoque digital y metodología de trabajo remoto. Trabajamos con clientes en toda Colombia 
            y proyectos internacionales mediante herramientas colaborativas avanzadas.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Services