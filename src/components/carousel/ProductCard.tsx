import { Link } from 'react-router-dom'

interface ProductCardProps {
  image: string
  brand: string
  name: string
  price: number
  isExclusive?: boolean
  isNew?: boolean
}

export function ProductCard({ image, brand, name, price, isExclusive, isNew }: ProductCardProps) {
  return (
    <Link to="#" className="block group">
      <div className="relative aspect-[3/4] mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        {isNew && (
          <span className="absolute top-4 right-4 bg-white px-2 py-1 text-xs">
            New in
          </span>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-gray-900">{brand}</h3>
        <p className="text-gray-600">{name}</p>
        <p className="text-gray-900">$ {price.toLocaleString()}</p>
        {isExclusive && (
          <p className="text-gray-500 text-sm">Exclusivo Malva</p>
        )}
      </div>
    </Link>
  )
}

