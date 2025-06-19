import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { ShoppingCart, User, Heart, Search } from "lucide-react"
import { useState } from "react"

  

const dummyProducts = [
  {
    id: 1,
    name: "Basic T-Shirt",
    category: "Men",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    image: "/images/product-img-2.png",
  },
  {
    id: 2,
    name: "Summer Dress",
    category: "Women",
    price: 49.99,
    oldPrice: 59.99,
    rating: 5,
    image: "/images/product-img-1.png",
  },
  // Ek ürünler...
];

const HomePage = () => {

  return (

       <div>
      <Slider />
      
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Featured Products</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">BESTSELLER PRODUCTS</h2>
        <h3 className="text-l font-bold text-gray-800 mb-6">Problems trying to resolve the conflict between </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => {}} />
          ))}
        </div>
      </section>
      </div>
   

   
  );
};

export default HomePage;
