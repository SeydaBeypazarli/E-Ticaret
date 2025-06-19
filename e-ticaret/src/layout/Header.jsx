import { ShoppingCart, User, Heart, Search, Menu, X } from "lucide-react" // Menu ve X ikonlarını ekledik
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Yeni state: Mobil menünün açık/kapalı durumu

  return (
    <header className="w-full border-b border-gray-200 text-sm">
      {/* TOP BAR - Masaüstü görünümünde gizli */}
      <div className="hidden md:flex justify-between items-center bg-[#584dc8] text-white text-xs px-6 py-1">
        <div>
          (225) 555-0118 &nbsp; | &nbsp; michelle.rivera@example.com
        </div>
        <div className="flex items-center gap-2">
          <span>Follow Us and get a chance to win 80% off</span>
          <span className="ml-4 flex gap-2">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
          </span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="flex justify-between items-center px-6 py-4 md:px-8"> {/* Responsive padding */}
        {/* Logo */}
        <div className="font-bold text-xl text-[#252B42]">Bandage</div>

        {/* Mobile Icons (Arama, Sepet, Hamburger Menü) - Masaüstü görünümünde gizli */}
        <div className="flex items-center gap-4 md:hidden">
          <Search className="w-5 h-5 text-gray-700" />
          <ShoppingCart className="w-5 h-5 text-gray-700" />
          {isMobileMenuOpen ? ( // Eğer mobil menü açıksa X ikonu göster
            <X
              className="w-6 h-6 text-gray-700 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ) : ( // Değilse Hamburger menü ikonu göster
            <Menu
              className="w-6 h-6 text-gray-700 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            />
          )}
        </div>

        {/* Navigation - Masaüstü görünümünde görünür */}
        <nav className="hidden md:flex items-center gap-6 relative">
          <Link to="/" className="hover:text-[#23A6F0]">Home</Link>
          <div
            onMouseEnter={() => setIsShopOpen(true)}
            onMouseLeave={() => setIsShopOpen(false)}
            className="relative"
          >
            <button className="hover:text-[#23A6F0]">Shop ▾</button>
            {isShopOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg p-6 grid grid-cols-2 gap-12 z-50 w-[400px] text-sm border">
                <div>
                  <h4 className="font-semibold mb-2">Kadın</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li><Link to="/shop/bags">Bags</Link></li>
                    <li><Link to="/shop/belts">Belts</Link></li>
                    <li><Link to="/shop/cosmetics">Cosmetics</Link></li>
                    <li><Link to="/shop/hats">Hats</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Erkek</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li><Link to="/shop/bags">Bags</Link></li>
                    <li><Link to="/shop/belts">Belts</Link></li>
                    <li><Link to="/shop/cosmetics">Cosmetics</Link></li>
                    <li><Link to="/shop/hats">Hats</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-[#23A6F0]">About</Link>
          <Link to="/blog" className="hover:text-[#23A6F0]">Blog</Link>
          <Link to="/contact" className="hover:text-[#23A6F0]">Contact</Link>
          <Link to="/shop" className="hover:text-[#23A6F0]">Pages</Link>
        </nav>

        {/* Right Icons - Masaüstü görünümünde görünür */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-[#23A6F0]">Login / Register</Link>
          <Search className="w-4 h-4 text-gray-700" />
          <ShoppingCart className="w-4 h-4 text-gray-700" />
          <Heart className="w-4 h-4 text-gray-700" />
          <User className="w-4 h-4 text-gray-700" />
        </div>
      </div>

      {/* MOBILE MENU - Mobil görünümde hamburger ikonuna tıklandığında açılır */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 text-2xl font-bold z-40 animate-slideIn"> {/* z-40 ve animate-slideIn ekledik */}
          <Link to="/" className="text-gray-800 hover:text-[#23A6F0]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/shop" className="text-gray-800 hover:text-[#23A6F0]" onClick={() => setIsMobileMenuOpen(false)}>Product</Link>
          <Link to="/pricing" className="text-gray-800 hover:text-[#23A6F0]" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link> {/* Pricing ve Contact eklendi */}
          <Link to="/contact" className="text-gray-800 hover:text-[#23A6F0]" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          {/* Mobil menü içinde ek ikonlar veya oturum açma/kayıt bağlantısı eklenebilir */}
          <div className="flex gap-6 mt-8">
            <Link to="/login" className="text-[#23A6F0] text-base" onClick={() => setIsMobileMenuOpen(false)}>Login / Register</Link>
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <Heart className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header