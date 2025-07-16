import { useEffect } from 'react'

const SEOHead = ({ 
  title = "Milén Arquitectura - Diseño Arquitectónico e Interiorismo",
  description = "Milén Arquitectura: especialistas en diseño arquitectónico, interiorismo y consultoría. Creamos espacios únicos que reflejan tu personalidad en Ibagué, Tolima.",
  keywords = "arquitectura, diseño, interiorismo, Ibagué, Tolima, Colombia, arquitectos, construcción, remodelación, consultoría arquitectónica",
  canonical = "https://milenarquitectura.com/",
  ogImage = "https://milenarquitectura.com/src/assets/images/arqs.webp"
}) => {
  
  useEffect(() => {
    // Actualizar title
    document.title = title
    
    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
    
    // Actualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    }
    
    // Actualizar canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]')
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonical)
    } else {
      linkCanonical = document.createElement('link')
      linkCanonical.rel = 'canonical'
      linkCanonical.href = canonical
      document.head.appendChild(linkCanonical)
    }
    
    // Actualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', title)
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', description)
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', canonical)
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]')
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage)
    }
    
    // Actualizar Twitter Card
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title)
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description)
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage)
    }
    
  }, [title, description, keywords, canonical, ogImage])

  return null // Este componente no renderiza nada visible
}

export default SEOHead
