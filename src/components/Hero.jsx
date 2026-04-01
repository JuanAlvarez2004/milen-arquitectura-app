import Markdown from 'markdown-to-jsx'
// import { config } from '../config/config'

const Hero = ({ data, error, loading }) => {
  const heroTitle = (data?.heroTitle || '').toUpperCase()
  const heroDescription = data?.heroDescription || ''
  const heroImgSrc = data?.heroImage

  return (
    <header id='header' className="w-full mt-15 p-20 text-gray-700 text-center md:text-left text-balance flex flex-col md:flex-row items-center justify-center flex-wrap gap-4" aria-label="Sección principal de presentación">
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error cargando contenido</p>
      ) : (
        <>
          <section className="w-full md:w-2xl mb-6 md:mb-0" aria-labelledby="title" aria-describedby="description">
            <h1 id="title" className="font-sans text-center md:text-left text-2xl md:text-5xl text-black font-bold py-3">{heroTitle}</h1>
            <Markdown id='description' className='text-black'>{heroDescription}</Markdown>
          </section>
          <div id="image-arqs" className="w-full md:w-auto h-64 md:h-96 overflow-hidden">
            <img className="w-full h-full object-cover object-top grayscale" src={heroImgSrc} alt="Fotografía de los arquitectos Valentina y Yamil" title="Valentina y Yamil, arquitectos de Milén" aria-label="Fotografía de los arquitectos Valentina y Yamil" />
          </div>
        </>
      )}
    </header>
  )
}

export default Hero