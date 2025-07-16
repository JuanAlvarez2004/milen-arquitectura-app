import arqsImg from '../assets/images/arqs.webp'

const Hero = () => {
  return (
    <header className="w-full mt-15 p-20 text-gray-700 text-center md:text-left text-balance flex flex-col md:flex-row items-center justify-center flex-wrap gap-4" aria-label="Sección principal de presentación">
      <section className="w-full md:w-2xl mb-6 md:mb-0" aria-labelledby="title" aria-describedby="description">
        <h1 id="title" className="font-serif text-center md:text-left text-2xl md:text-5xl text-black font-bold py-3">MILÉN ARQUITECTURA</h1>
        <div id="description">
          Somos un equipo de arquitectos apasionados por el diseño y la creación de espacios con soluciones innovadoras con el objetivo de <span className="font-bold text-black">reflejar la esencia de nuestros clientes</span> y transformar espacios.
        </div>
      </section>
      <div id="image-arqs" className="w-full md:w-auto h-64 md:h-96 overflow-hidden">
        <img className="w-full h-full object-cover object-top" src={arqsImg} alt="Fotografía de los arquitectos Valentina y Yamil" title="Valentina y Yamil, arquitectos de Milén" aria-label="Fotografía de los arquitectos Valentina y Yamil" />
      </div>
    </header>
  )
}

export default Hero