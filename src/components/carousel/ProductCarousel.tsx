import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ProductCard } from './ProductCard'

import 'swiper/css'
import 'swiper/css/navigation'

const products = [
  {
    id: 1,
    image: '/carousel/BLAZROMEBLUE-1.webp',
    brand: 'COMMON AREA',
    name: 'Blazer Rome',
    price: 380000,
    isExclusive: true
  },
  {
    id: 2,
    image: '/carousel/BLULEXIPRINT-1.webp',
    brand: 'COMMON AREA',
    name: 'Top Venecia',
    price: 280000,
    isExclusive: true
  },
  {
    id: 3,
    image: '/carousel/CAMISTITBLUE-1.webp',
    brand: 'COMMON AREA',
    name: 'Vestido Mesh',
    price: 420000,
    isExclusive: true
  },
  {
    id: 4,
    image: '/carousel/CINTUVENTGREY-1.webp',
    brand: 'COMMON AREA',
    name: 'Body Atic',
    price: 300000,
    isExclusive: true,
    isNew: true
  },
  {
    id: 4,
    image: '/carousel/FALDAREABLACK-1.webp',
    brand: 'COMMON AREA',
    name: 'Top Lein',
    price: 360000,
    isExclusive: true,
    isNew: true
  },
  {
    id: 5,
    image: '/carousel/MCMCANGEAZULXS-1.webp',
    brand: 'COMMON AREA',
    name: 'Chaqueta Luni',
    price: 480000,
    isExclusive: true,
    isNew: true
  },
  {
    id: 6,
    image: '/carousel/PANTREMOBLUE-1.webp',
    brand: 'COMMON AREA',
    name: 'Pantalóm Cut',
    price: 300000,
    isExclusive: true,
    isNew: true
  },
  {
    id: 7,
    image: '/carousel/TOPVENECIA.webp',
    brand: 'COMMON AREA',
    name: 'Body Atic',
    price: 680000,
    isExclusive: true,
    isNew: false
  }
  ,
  {
    id: 8,
    image: '/carousel/VESTIDOMESH.webp',
    brand: 'COMMON AREA',
    name: 'Falda Arena',
    price: 300000,
    isExclusive: true,
    isNew: false
  }
  ,
  {
    id: 9,
    image: '/carousel/VESTIDOPALERMO.webp',
    brand: 'COMMON AREA',
    name: 'Pantalóm Remo',
    price: 300000,
    isExclusive: true,
    isNew: false
  }
]

export default function ProductCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          swiper.params.navigation.prevEl = prevRef.current
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          swiper.params.navigation.nextEl = nextRef.current
        }}
        slidesPerView={1.2}
        spaceBetween={8}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="relative px-1 py-8"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

