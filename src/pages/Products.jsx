import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  let filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      p => p.category === category
    );
  }

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center text-[#0A1A2F] mb-8">
          Our Products
        </h1>

        {/* Controls */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <input
            type="text"
            placeholder="Search envelopes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option value="">Sort by price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No products found.
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
