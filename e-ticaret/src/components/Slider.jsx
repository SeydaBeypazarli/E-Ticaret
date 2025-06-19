import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/images/shop-hero-1-product-slide-1.png",
    title: "New Collection",
    subtitle: "Summer 2020",
    description: "We know how large objects will act, but things on a small scale.",
    buttonText: "Shop Now",
  },
  {
    image: "/images/shop-hero-1-product-slide-2.png",
    title: "Men’s Fashion",
    subtitle: "Trending 2020",
    description: "Explore the latest trends in men's wear this season.",
    buttonText: "Explore",
  },
]

const Slider = () => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* İçerik Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg space-y-4">
            <p className="text-sm font-semibold uppercase text-white">{slides[current].subtitle}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white">{slides[current].title}</h1>
            <p className="text-sm md:text-base text-white">{slides[current].description}</p>
            <button className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition">
              {slides[current].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Sol-Sağ Oklar */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/40 hover:bg-white/60 p-2 rounded-full"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/40 hover:bg-white/60 p-2 rounded-full"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Slide Göstergeleri */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Slider
