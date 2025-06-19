import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react"; // useEffect'i ekledik

const dummyProducts = [
  // ... (önceki dummyProducts listeniz, ID'ler ve isimler önemli)
  { id: 1, name: "Basic T-Shirt A", category: "Men", price: 29.99, rating: 4, image: "/images/product-img-2.png" },
  { id: 2, name: "Summer Dress B", category: "Women", price: 49.99, rating: 5, image: "/images/product-img-1.png" },
  { id: 3, name: "Jeans C", category: "Men", price: 59.99, rating: 3, image: "https://images.unsplash.com/photo-1576189871032-15f187a54483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHw4fHxjbG90aGluZ3xlbnwwfHx8fDE3MTg3NDY3NzlfMA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Hat D", category: "Accessories", price: 15.00, rating: 2, image: "https://images.unsplash.com/photo-1627963283921-b3b4f6e1f0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwxNXx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2Nzc5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 5, name: "Jacket E", category: "Women", price: 89.99, rating: 5, image: "https://images.unsplash.com/photo-1542060700-1c667086bc11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwyNXx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2ODkzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 6, name: "Sneakers F", category: "Footwear", price: 75.50, rating: 4, image: "https://images.unsplash.com/photo-1558769132-cb1ade28cdb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwyOHx8Y2xvdGhpbmd8ZW58MHx8fDE3MTg3NDY2NjZ8MA&lib=rb-4.0.3&q=80&w=1080" },
  { id: 7, name: "Polo Shirt G", category: "Men", price: 35.00, rating: 4, image: "https://images.unsplash.com/photo-1593032463773-f9f6e9b1f9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwyMHx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2Nzc5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 8, name: "Skirt H", category: "Women", price: 30.00, rating: 5, image: "https://images.unsplash.com/photo-1503342394128-c104d54bac9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHw3fHxjbG90aGluZ3xlbnwwfHx8fDE3MTg3NDY3NzlfMA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 9, name: "Scarf I", category: "Accessories", price: 20.00, rating: 3, image: "https://images.unsplash.com/photo-1576189871032-15f187a54483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHw4fHxjbG90aGluZ3xlbnwwfHx8fDE3MTg3NDY3NzlfMA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 10, name: "Dress J", category: "Women", price: 65.00, rating: 4, image: "https://images.unsplash.com/photo-1627963283921-b3b4f6e1f0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwxNXx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2Nzc5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 11, name: "Sweater K", category: "Men", price: 40.00, rating: 5, image: "https://images.unsplash.com/photo-1542060700-1c667086bc11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwyNXx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2ODkzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 12, name: "Shoes L", category: "Footwear", price: 95.00, rating: 3, image: "https://images.unsplash.com/photo-1558769132-cb1ade28cdb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwyOHx8Y2xvdGhpbmd8ZW58MHx8fDE3MTg3NDY2NjZ8MA&lib=rb-4.0.3&q=80&w=1080" },
  { id: 13, name: "Trousers M", category: "Men", price: 50.00, rating: 4, image: "https://images.unsplash.com/photo-1593032463773-f9f6e9b1f9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwyMHx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2Nzc5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 14, name: "Blouse N", category: "Women", price: 38.00, rating: 5, image: "https://images.unsplash.com/photo-1503342394128-c104d54bac9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHw3fHxjbG90aGluZ3xlbnwwfHx8fDE3MTg3NDY3NzlfMA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 15, name: "Socks O", category: "Accessories", price: 10.00, rating: 3, image: "https://images.unsplash.com/photo-1576189871032-15f187a54483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHw4fHxjbG90aGluZ3xlbnwwfHx8fDE3MTg3NDY3NzlfMA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 16, name: "Cardigan P", category: "Women", price: 55.00, rating: 4, image: "https://images.unsplash.com/photo-1627963283921-b3b4f6e1f0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwxNXx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2Nzc5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const ShopPage = () => {
  // Products state will now hold the *filtered/sorted* products
  const [displayedProducts, setDisplayedProducts] = useState(dummyProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Popularity"); // Yeni state: sortBy

  const brandLogos = [
    { id: 1, name: "Hooli", image: "https://i.imgur.com/k6R2oT8.png" },
    { id: 2, name: "Lyft", image: "https://i.imgur.com/Wl23p4F.png" },
    { id: 3, name: "Stripe", image: "https://i.imgur.com/8Q9lQ7F.png" },
    { id: 4, name: "AWS", image: "https://i.imgur.com/B9P90E4.png" },
    { id: 5, name: "Reddit", image: "https://i.imgur.com/1G0N7lP.png" },
  ];

  // Bu useEffect, sortBy veya dummyProducts değiştiğinde çalışır.
  useEffect(() => {
    let sortedProducts = [...dummyProducts]; // Orjinal listeyi bozmamak için kopyasını al
    if (sortBy === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Newest") {
      // Gerçek bir 'newest' için ürünlerde bir tarih/timestamp özelliği olmalı.
      // Şimdilik ID'ye göre sıralayalım (yüksek ID daha yeni varsayalım)
      sortedProducts.sort((a, b) => b.id - a.id);
    } else {
      // Popularity (Varsayılan) - Örneğin rating'e göre sıralayabiliriz
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }
    setDisplayedProducts(sortedProducts);
    setCurrentPage(1); // Sıralama veya filtreleme yapıldığında ilk sayfaya dön
  }, [sortBy, dummyProducts]); // Bağımlılıklar: sortBy ve dummyProducts

  // Pagination logic (displayedProducts üzerinden çalışacak)
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = displayedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(displayedProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white min-h-screen">
      {/* Top Navigation / Breadcrumbs */}
      <div className="bg-gray-100 py-4 px-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Shop</h1>
          <div className="text-sm text-gray-500">
            <span className="text-gray-700">Home</span> &gt; Shop
          </div>
        </div>
      </div>

      {/* Categories Section - Replicating the top section of the image */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="relative bg-gray-200 h-48 rounded-lg overflow-hidden flex items-end justify-start p-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593032463773-f9f6e9b1f9b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwyMHx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2Nzc5fDA&ixlib=rb-4.0.3&q=80&w=1080')" }}>
              <div className="text-white text-shadow-md">
                <h4 className="font-bold text-lg">CLOTHS</h4>
                <p className="text-sm">5 Items</p>
              </div>
            </div>
            <div className="relative bg-gray-200 h-48 rounded-lg overflow-hidden flex items-end justify-start p-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503342394128-c104d54bac9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHw3fHxjbG90aGluZ3xlbnwwfHx8fDE3MTg3NDY3NzlfMA&ixlib=rb-4.0.3&q=80&w=1080')" }}>
              <div className="text-white text-shadow-md">
                <h4 className="font-bold text-lg">CLOTHS</h4>
                <p className="text-sm">5 Items</p>
              </div>
            </div>
            <div className="relative bg-gray-200 h-48 rounded-lg overflow-hidden flex items-end justify-start p-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576189871032-15f187a54483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHw4fHxjbG90aGluZ3xlbnwwfHx8fDE3MTg3NDY3NzlfMA&ixlib=rb-4.0.3&q=80&w=1080')" }}>
              <div className="text-white text-shadow-md">
                <h4 className="font-bold text-lg">CLOTHS</h4>
                <p className="text-sm">5 Items</p>
              </div>
            </div>
            <div className="relative bg-gray-200 h-48 rounded-lg overflow-hidden flex items-end justify-start p-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1627963283921-b3b4f6e1f0b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwxNXx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2Nzc5fDA&ixlib=rb-4.0.3&q=80&w=1080')" }}>
              <div className="text-white text-shadow-md">
                <h4 className="font-bold text-lg">CLOTHS</h4>
                <p className="text-sm">5 Items</p>
              </div>
            </div>
            <div className="relative bg-gray-200 h-48 rounded-lg overflow-hidden flex items-end justify-start p-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542060700-1c667086bc11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTQyMjl8MHwxfHNlYXJjaHwyNXx8Y2xvdGhpbmd8ZW58MHx8fHwxNzE4NzQ2ODkzfDA&ixlib=rb-4.0.3&q=80&w=1080')" }}>
              <div className="text-white text-shadow-md">
                <h4 className="font-bold text-lg">CLOTHS</h4>
                <p className="text-sm">5 Items</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        {/* Filter and Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <p className="text-gray-600">Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, displayedProducts.length)} of {displayedProducts.length} results</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Views:</span>
            {/* Grid/List view icons - Placeholder */}
            <div className="flex gap-2">
              <button className="text-gray-500 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
            </div>
            <select
              className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={sortBy} // State'i buraya bağladık
              onChange={(e) => setSortBy(e.target.value)} // Değişikliği yakalayıp state'i güncelledik
            >
              <option value="Popularity">Popularity</option>
              <option value="Newest">Newest</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
            {/* Filter butonu şimdilik bir iş yapmayacak, çünkü sıralamayı select onChange'de tetikliyoruz */}
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-md transition">
              Filter
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={() => console.log(`Added ${product.name} to cart`)} />
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center items-center mt-12 mb-20 space-x-2">
          <button
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            First
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`px-4 py-2 border border-gray-300 rounded-md ${
                currentPage === pageNumber ? "bg-sky-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {pageNumber}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center gap-8">
            {brandLogos.map((brand) => (
              <img
                key={brand.id}
                src={brand.image}
                alt={brand.name}
                className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain filter grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;