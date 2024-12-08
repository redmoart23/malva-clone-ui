interface CartItemProps {
    image: string
    brand: string
    name: string
    price: number
    size: string
    quantity: number
    onQuantityChange: (quantity: number) => void
    onRemove: () => void
  }
  
  export function CartItem({
    image,
    brand,
    name,
    price,
    size,
    quantity,
    onQuantityChange,
    onRemove
  }: CartItemProps) {
    return (
      <div className="flex gap-6 py-6">
        <img src={image} alt={name} className="w-32 h-40 object-cover" />
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{brand}</h3>
              <p className="text-gray-600">{name}</p>
              <p className="mt-1">$ {price.toLocaleString()}</p>
              <p className="mt-1 text-sm text-gray-500">Talla: {size}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button
                  onClick={() => quantity > 1 && onQuantityChange(quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => onQuantityChange(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={onRemove}
            className="mt-4 text-sm text-gray-500 hover:text-gray-900"
          >
            Eliminar
          </button>
        </div>
      </div>
    )
  }
  
  