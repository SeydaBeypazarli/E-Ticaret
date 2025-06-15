import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "Basic T-Shirt",
    category: "Men",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4,
    image: "/img/product1.jpg",
  },
  {
    id: 2,
    name: "Summer Dress",
    category: "Women",
    price: 49.99,
    oldPrice: 59.99,
    rating: 5,
    image: "/img/product2.jpg",
  },
  // Ek ürünler...
];

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Slider />

      <section className="px-4 py-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h2>
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
