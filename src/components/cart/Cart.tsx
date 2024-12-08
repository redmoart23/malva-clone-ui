import { useState } from 'react'
import { CartItem } from './CartItem'
import { CartSummary } from './CartSummary'

const initialItem = {
  image: '/CHAQUELUNIGREY-1.webp',
  brand: 'COMMON AREA',
  name: 'Chaqueta Luni',
  price: 480000,
  size: 'XS',
  quantity: 1
}

export default function Cart() {
  const [items, setItems] = useState([initialItem])

  const handleQuantityChange = (index: number, quantity: number) => {
    const newItems = [...items]
    newItems[index] = { ...newItems[index], quantity }
    setItems(newItems)
  }

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium text-gray-900 mb-2">Tu carrito</h1>
      <p className="text-gray-600 mb-8">{items.length} Artículo(s)</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item, index) => (
            <CartItem
              key={index}
              {...item}
              onQuantityChange={(quantity) => handleQuantityChange(index, quantity)}
              onRemove={() => handleRemoveItem(index)}
            />
          ))}
        </div>
        <div>
          <CartSummary
            subtotal={subtotal}
            onCheckout={() => console.log('Checkout clicked')}
          />
        </div>
      </div>
    </div>
  )
}

