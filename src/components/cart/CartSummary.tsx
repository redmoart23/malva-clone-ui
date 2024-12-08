import { useState } from 'react'

interface CartSummaryProps {
  subtotal: number
  onCheckout: () => void
}

export function CartSummary({ subtotal, onCheckout }: CartSummaryProps) {
  const [discountCode, setDiscountCode] = useState('')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-lg font-medium text-gray-900 mb-6">RESUMEN DE COMPRA</h2>
      
      <div className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Código de descuento"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-gray-400"
          />
          <button className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
            Aplicar
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Total estimado</span>
          <span className="font-medium">$ {subtotal.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-800"
      >
        Pagar pedido
      </button>

      <p className="mt-4 text-sm text-gray-500 text-center">
        Impuesto incluido. <a href="#" className="underline">Envío</a> y descuentos calculados en
        la pantalla de pago.
      </p>

      {/* Collapsible Sections */}
      <div className="mt-6 space-y-4">
        <div>
          <button
            onClick={() => toggleSection('help')}
            className="flex items-center justify-between w-full py-2 text-left text-gray-600 hover:text-gray-900"
          >
            <span>¿Necesitas ayuda?</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                expandedSection === 'help' ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all ${
            expandedSection === 'help' ? 'max-h-40' : 'max-h-0'
          }`}>
            <div className="py-2 text-sm text-gray-600">
              Contacta con nuestro servicio al cliente
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={() => toggleSection('payment')}
            className="flex items-center justify-between w-full py-2 text-left text-gray-600 hover:text-gray-900"
          >
            <span>Métodos de pago</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                expandedSection === 'payment' ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all ${
            expandedSection === 'payment' ? 'max-h-40' : 'max-h-0'
          }`}>
            <div className="py-2 text-sm text-gray-600">
              Aceptamos tarjetas de crédito y débito
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={() => toggleSection('shipping')}
            className="flex items-center justify-between w-full py-2 text-left text-gray-600 hover:text-gray-900"
          >
            <span>Envíos y Devoluciones</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                expandedSection === 'shipping' ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all ${
            expandedSection === 'shipping' ? 'max-h-40' : 'max-h-0'
          }`}>
            <div className="py-2 text-sm text-gray-600">
              Envío gratuito en compras superiores a $200.000
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

