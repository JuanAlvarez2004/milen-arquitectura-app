import { useEffect, useState } from 'react'
import arqsImg from '../assets/images/arqs.webp'
import { fetchHomePage } from '../services/cmsApi'
import Markdown from 'markdown-to-jsx'
import { config } from '../config/config'

const Hero = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchHomePage()
      .then(({ data }) => {
        if (!mounted) return
        setData(data)
      })
      .catch(err => {
        if (!mounted) return
        setError(err)
        console.error('Error fetching home page data:', err)
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => { mounted = false }
  }, [])

  return (
    <header id='header' className="w-full mt-15 p-20 text-gray-700 text-center md:text-left text-balance flex flex-col md:flex-row items-center justify-center flex-wrap gap-4" aria-label="Sección principal de presentación">
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error cargando contenido</p>
      ) : (
        <>
          <section className="w-full md:w-2xl mb-6 md:mb-0" aria-labelledby="title" aria-describedby="description">
            {console.log('Home page data in Hero component:', data)}
            <h1 id="title" className="font-sans text-center md:text-left text-2xl md:text-5xl text-black font-bold py-3">{data?.heroTitle.toUpperCase()}</h1>
            <Markdown id='description' className='text-black'>{data?.heroDescription}</Markdown>
          </section>
          <div id="image-arqs" className="w-full md:w-auto h-64 md:h-96 overflow-hidden">
            {(() => {
              const mediaBase = config.CMS_API_URL
              const heroImgPath = data?.heroImage?.url
              const src = heroImgPath ? `${mediaBase}${heroImgPath}` : arqsImg
              return (
                <img className="w-full h-full object-cover object-top grayscale" src={src} alt="Fotografía de los arquitectos Valentina y Yamil" title="Valentina y Yamil, arquitectos de Milén" aria-label="Fotografía de los arquitectos Valentina y Yamil" />
              )
            })()}
          </div>
        </>
      )}
    </header>
  )
}

export default Hero