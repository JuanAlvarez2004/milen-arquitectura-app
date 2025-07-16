# Milén Arquitectura - Website

> Sitio web profesional para el estudio de arquitectura Milén, especializado en diseño arquitectónico e interiorismo en Ibagué, Tolima.

## 🏗️ Características

- **React 19** con React Router 7 para navegación SPA
- **Tailwind CSS 4** para estilos modernos y responsive
- **GSAP** para animaciones fluidas y profesionales
- **Vite** como bundler para desarrollo rápido
- **SEO optimizado** con meta tags, Schema.org y sitemap
- **Accesibilidad mejorada** siguiendo buenas prácticas web
- **Performance optimizado** con build configuration

## 🚀 Optimizaciones Implementadas

### SEO (Search Engine Optimization)
- ✅ Meta tags completas (title, description, keywords)
- ✅ Open Graph y Twitter Cards
- ✅ Schema.org JSON-LD para mejor indexación
- ✅ Sitemap.xml y robots.txt
- ✅ URLs canónicas y estructura semántica
- ✅ Componente SEOHead dinámico por página

### Accesibilidad
- ✅ Texto alternativo descriptivo para todas las imágenes
- ✅ Estructura semántica HTML5 (header, main, nav, article, section)
- ✅ Navegación por teclado completa
- ✅ ARIA labels y roles apropiados
- ✅ Formularios accesibles con labels correctos

### Performance
- ✅ Code splitting automático con Vite
- ✅ CSS optimizado con variables personalizadas
- ✅ Build optimizado para producción

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx           # Navegación principal
│   ├── Hero.jsx            # Sección principal
│   ├── Layout.jsx          # Layout base
│   ├── ProjectGrid.jsx     # Grid de proyectos
│   ├── SEOHead.jsx         # Meta tags dinámicas
│   ├── SchemaMarkup.jsx    # Schema.org JSON-LD
│   └── Starting.jsx        # Pantalla de carga
├── pages/
│   ├── Home.jsx           # Página principal
│   ├── About.jsx          # Página nosotros
│   ├── Contact.jsx        # Página contacto
│   └── Services.jsx       # Página servicios
├── assets/
│   ├── images/           # Imágenes optimizadas
│   └── icons/           # Iconos
├── global.css           # Estilos globales
└── main.jsx            # Punto de entrada
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar repositorio
git clone https://github.com/JuanAlvarez2004/MilenArquitectura.git
cd milen-arquitectura-web

# Instalar dependencias
npm install

# Configurar variables de entorno (opcional, para EmailJS)
cp .env.example .env
```

### Variables de Entorno
Crear archivo `.env` con:
```bash
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Comandos Disponibles

```bash
# Desarrollo
npm run dev           # Servidor de desarrollo en http://localhost:3000

# Producción
npm run build         # Build optimizado para producción
npm run preview       # Preview del build de producción

# Calidad
npm run lint          # Análisis de código con ESLint
```

## 🎨 Tecnologías Utilizadas

### Frontend
- **React 19** - Biblioteca de UI
- **React Router 7** - Enrutamiento SPA
- **Tailwind CSS 4** - Framework de CSS
- **GSAP** - Animaciones avanzadas

### Build & Desarrollo
- **Vite 6** - Build tool y dev server
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS

### SEO & Analytics
- **Schema.org** - Datos estructurados
- **Open Graph** - Compartir en redes sociales
- **Sitemap XML** - Indexación de motores de búsqueda

## 📊 Optimizaciones de Build

### Configuración Vite
```javascript
export default defineConfig({
  build: {
    target: 'es2015',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router'],
          animations: ['gsap']
        }
      }
    }
  }
})
```

## 🌐 SEO Features

### Meta Tags por Página
Cada página tiene meta tags específicos optimizados para:
- Motores de búsqueda (Google, Bing)
- Redes sociales (Facebook, Twitter, LinkedIn)
- Mensajería (WhatsApp, Telegram)

### Schema.org Markup
- Organization Schema para la empresa
- Service Schema para servicios
- ContactPoint Schema para información de contacto
- Person Schema para el equipo

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Features Responsive
- Navegación móvil con hamburger menu
- Grid adaptativo de proyectos
- Tipografía escalable
- Layout flexible

## 🔧 Configuración de Producción

### Deploy Checklist
- [ ] Variables de entorno configuradas
- [ ] Sitemap actualizado con URLs correctas
- [ ] Schema.org con datos reales
- [ ] Meta tags con dominio real
- [ ] Analytics configurado
- [ ] SSL certificado instalado

## 📞 Contacto y Soporte

**Milén Arquitectura**
- 📧 Email: info@milenarquitectura.com
- 📱 Teléfono: +57 300 123 4567
- 📍 Ubicación: Ibagué, Tolima, Colombia
- 📸 Instagram: [@milen.arquitectura](https://www.instagram.com/milen.arquitectura/)

---

### Desarrollado con ❤️ para Milén Arquitectura

> **Arquitectura Digital**: Sitio web optimizado para SEO y accesibilidad, reflejando la excelencia y profesionalismo del estudio.
