const Footer = () => {
  return (
    <footer className="bg-green-400 mt-10 py-8 text-sm text-gray-600">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">BrandName</h4>
          <p>High-quality products for everyday use. Discover our latest collections.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-green-800 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/shop" className="hover:text-black">Shop</a></li>
            <li><a href="/about" className="hover:text-black">About</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-black">Facebook</a>
            <a href="#" className="hover:text-black">Instagram</a>
            <a href="#" className="hover:text-black">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-8 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} BrandName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
