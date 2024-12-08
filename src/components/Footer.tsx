import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const isSectionExpanded = (section: string) => expandedSections.includes(section)

  return (
    <footer className="bg-zinc-800 text-white pt-12 pb-6">
      <div className="mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Social Media */}
          <div>
            <h4 className="font-medium mb-4">Síguenos</h4>
            <hr  className='border-gray-600'/>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-gray-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <button
              onClick={() => toggleSection('service')}
              className="flex items-center justify-between w-full font-medium mb-4"
              aria-expanded={isSectionExpanded('service')}
              aria-controls="service-content"
            >
              Servicio al cliente
              <svg className={`h-4 w-4 transition-transform ${
                isSectionExpanded('service') ? 'rotate-180' : ''
              }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <hr className='border-gray-600'/>
            <div 
              id="service-content"
              className={`space-y-2 mt-4 overflow-hidden transition-all ${
                isSectionExpanded('service') ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <Link to="/contacto" className="block text-sm text-gray-300 hover:text-white">Contáctanos/PQRS</Link>
              <Link to="/tiendas" className="block text-sm text-gray-300 hover:text-white">Recoge en tienda</Link>
              <Link to="/localizador" className="block text-sm text-gray-300 hover:text-white">Localizador de tiendas</Link>
            </div>
          </div>

          {/* About Us */}
          <div>
            <button
              onClick={() => toggleSection('about')}
              className="flex items-center justify-between w-full font-medium mb-4"
              aria-expanded={isSectionExpanded('about')}
              aria-controls="about-content"
            >
              Quienes Somos
              <svg className={`h-4 w-4 transition-transform ${
                isSectionExpanded('about') ? 'rotate-180' : ''
              }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <hr className='border-gray-600'/>
            <div 
              id="about-content"
              className={`space-y-2 mt-4 overflow-hidden transition-all ${
                isSectionExpanded('about') ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <Link to="/equipo" className="block text-sm text-gray-300 hover:text-white">Nuestro equipo</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">Suscríbete a nuestro Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Regístrate para recibir 10% de descuento en tu primera orden y ofertas exclusivas a lo largo del año.
            </p>
            <form className="space-y-4">
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-600 text-primary focus:ring-primary" />
                  <span className="text-sm">Mujer</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-600 text-primary focus:ring-primary" />
                  <span className="text-sm">Hombre</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-600 text-primary focus:ring-primary" />
                  <span className="text-sm">Niños</span>
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="flex-1 bg-transparent border border-gray-600 rounded px-3 py-2 text-sm focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100"
                >
                  Suscribirme
                </button>
              </div>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 rounded border-gray-600 text-primary focus:ring-primary" />
                <span className="text-sm text-gray-300">
                  Autorizo el tratamiento de{' '}
                  <Link to="/privacy" className="underline hover:text-white">
                    datos personales
                  </Link>
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <hr className='border-gray-600'/>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <Link to="/privacy" className="hover:text-white">Política de tratamiento de datos</Link>
            <Link to="/terms" className="hover:text-white">Términos y condiciones</Link>
            <Link to="/sic" className="hover:text-white">SIC</Link>
          </div>
          <div>
            © 2024, MALVA ONLINE
          </div>
        </div>
      </div>
    </footer>
  )
}

