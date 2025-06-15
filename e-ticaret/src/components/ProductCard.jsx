import { Star } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>

        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < product.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill={i < product.rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-600">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm line-through text-gray-400">${product.oldPrice}</span>
          )}
        </div>

        <button
          onClick={onAddToCart}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 rounded-lg transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
