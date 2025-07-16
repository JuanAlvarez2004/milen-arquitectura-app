import { useEffect } from 'react'

const SchemaMarkup = ({ type = "Organization", data = {} }) => {
  
  useEffect(() => {
    const defaultOrganizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Milén Arquitectura",
      "description": "Estudio de arquitectura especializado en diseño arquitectónico, interiorismo y consultoría en Ibagué, Tolima",
      "url": "https://milenarquitectura.com",
      "logo": "https://milenarquitectura.com/src/assets/icons/M.png",
      "sameAs": [
        "https://www.instagram.com/milen.arquitectura/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ibagué",
        "addressRegion": "Tolima",
        "addressCountry": "CO"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+573001234567",
        "contactType": "customer service",
        "email": "info@milenarquitectura.com"
      },
      "founder": [
        {
          "@type": "Person",
          "name": "Yamil",
          "jobTitle": "Arquitecto"
        },
        {
          "@type": "Person", 
          "name": "Valentina",
          "jobTitle": "Arquitecta"
        }
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Colombia"
      },
      "knowsAbout": [
        "Diseño Arquitectónico",
        "Interiorismo", 
        "Consultoría Arquitectónica",
        "Gestión de Proyectos",
        "Remodelación"
      ]
    }

    const schema = type === "Organization" ? { ...defaultOrganizationSchema, ...data } : data

    // Remover script anterior si existe
    const existingScript = document.getElementById('schema-org')
    if (existingScript) {
      existingScript.remove()
    }

    // Crear nuevo script
    const script = document.createElement('script')
    script.id = 'schema-org'
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById('schema-org')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [type, data])

  return null
}

export default SchemaMarkup
