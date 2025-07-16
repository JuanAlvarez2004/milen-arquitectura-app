import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'
import SEOHead from '../components/SEOHead.jsx'
import SchemaMarkup from '../components/SchemaMarkup.jsx'
import instagramIcon from '../assets/icons/instagram.webp'

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


function Contact() {
  const [user, setUser] = useState({
    name: '',
    message: '',
    email: ''
  })
  
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useRef()

  useEffect(() => {
    gsap.fromTo('#contact-title', { y: 15, autoAlpha: 0, filter: 'blur(10px)' }, {
      duration: .5,
      y: 0,
      autoAlpha: 1,
      filter: '',
    })
  }, [])

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleChange = ({ target }) => {
    setUser(prev => ({
      ...prev,
      [target.name]: target.value
    }))
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user.name || !user.email || !user.message) {
      setError('Por favor completa todos los campos.');
      return;
    }
    if (!validateEmail(user.email)) {
      setError('Por favor ingresa un email válido.');
      return;
    }
    
    setIsSubmitting(true)
    
    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      setSuccess('¡Mensaje enviado correctamente! Te contactaremos pronto.')
      setUser({ name: '', message: '', email: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setError('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Milén Arquitectura",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+573001234567",
          "contactType": "customer service",
          "email": "info@milenarquitectura.com",
          "availableLanguage": "Spanish"
        }
      ]
    }
  }

  return (
    <div className="min-h-screen pt-24 p-14 text-gray-700">
      <SEOHead 
        title="Contacto - Milén Arquitectura | Consulta tu Proyecto Arquitectónico"
        description="Contacta con Milén Arquitectura para tu proyecto de diseño arquitectónico e interiorismo. Ubicados en Ibagué, Tolima. Servicio nacional e internacional."
        keywords="contacto arquitectos Ibagué, consulta proyecto arquitectónico, Milén Arquitectura Tolima, presupuesto diseño"
        canonical="https://milenarquitectura.com/contact"
      />
      <SchemaMarkup type="custom" data={contactSchema} />
      <div className="max-w-4xl mx-auto">
        <header>
          <h1 id="contact-title" className="font-serif text-4xl md:text-5xl text-black font-bold py-3 mb-8">
            CONTACTO
          </h1>
        </header>
        
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-700" role="alert" aria-live="assertive">
            <strong>Error:</strong> {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md text-green-700" role="status" aria-live="polite">
            <strong>Éxito:</strong> {success}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <section aria-labelledby="contact-info">
            <h2 id="contact-info" className="text-2xl font-bold text-black mb-6">Conversemos sobre tu proyecto</h2>
            <p className="mb-8">
              Estamos aquí para hacer realidad tus ideas. Cuéntanos sobre tu proyecto 
              y descubramos juntos las posibilidades arquitectónicas que mejor se adapten a tus necesidades.
            </p>
            
            <address className="space-y-4 not-italic" aria-label="Información de contacto">
              <div itemScope itemType="https://schema.org/ContactPoint">
                <h3 className="font-bold text-black">Email</h3>
                <p>
                  <a 
                    href="mailto:info@milenarquitectura.com" 
                    aria-label="Enviar correo electrónico a info@milenarquitectura.com"
                    className="text-blue-600 hover:text-blue-800 underline"
                    itemProp="email"
                  >
                    info@milenarquitectura.com
                  </a>
                </p>
              </div>
              
              <div itemScope itemType="https://schema.org/ContactPoint">
                <h3 className="font-bold text-black">Teléfono</h3>
                <p>
                  <a 
                    href="tel:+573001234567" 
                    aria-label="Llamar al número +57 300 123 4567"
                    className="text-blue-600 hover:text-blue-800 underline"
                    itemProp="telephone"
                  >
                    +57 300 123 4567
                  </a>
                </p>
              </div>
              
              <div itemScope itemType="https://schema.org/PostalAddress">
                <h3 className="font-bold text-black">Ubicación</h3>
                <p>
                  <span itemProp="addressLocality">Ibagué</span>, <span itemProp="addressRegion">Tolima</span><br />
                  <span itemProp="addressCountry">Colombia</span>
                </p>
              </div>

              <div>
                <h3 className="font-bold text-black mb-2">Síguenos</h3>
                <div className='h-7 w-7'>
                  <a 
                    href="https://www.instagram.com/milen.arquitectura/" 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    aria-label="Visitar perfil de Instagram de Milén Arquitectura (se abre en nueva ventana)"
                  >
                    <img className='w-full object-cover hover:scale-110 transition-transform duration-75' src={instagramIcon} alt="Instagram de Milén Arquitectura" title="Instagram de Milén Arquitectura" />
                  </a>
                </div>
              </div>
            </address>
          </section>
          
          <section aria-labelledby="contact-form">
            <h2 id="contact-form" className="sr-only">Formulario de contacto</h2>
            <form 
              ref={form} 
              onSubmit={handleSubmit} 
              className="space-y-6" 
              aria-labelledby="contact-title" 
              noValidate
            >
              <div>
                <label className="block text-sm font-bold text-black mb-2" htmlFor="name">
                  Nombre <span className="text-red-500" aria-label="campo requerido">*</span>
                </label>
                <input 
                  id="name"
                  name='name'
                  onChange={handleChange}
                  value={user.name}
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                  aria-required="true"
                  aria-describedby="name-error"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2" htmlFor="email">
                  Email <span className="text-red-500" aria-label="campo requerido">*</span>
                </label>
                <input 
                  id="email"
                  name='email'
                  onChange={handleChange}
                  value={user.email}
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                  aria-required="true"
                  aria-describedby="email-error"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2" htmlFor="message">
                  Mensaje <span className="text-red-500" aria-label="campo requerido">*</span>
                </label>
                <textarea 
                  id="message"
                  name='message'
                  onChange={handleChange}
                  value={user.message}
                  rows="5" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-vertical"
                  required
                  aria-required="true"
                  aria-describedby="message-error"
                  placeholder="Cuéntanos sobre tu proyecto arquitectónico..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensaje de contacto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact