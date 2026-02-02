import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-3 text-[#0A1A2F]">
        {product.name}
      </h2>

      <p className="text-sm text-gray-500">{product.category}</p>

      <p className="text-[#C9A66B] font-bold mt-1">
        Rs. {product.price}
      </p>

      <Link
        to={`/products/${product.id}`}
        className="block mt-4 text-center bg-[#0A1A2F] text-white py-2 rounded hover:opacity-90"
      >
        View Details
      </Link>
    </div>
  );
}
