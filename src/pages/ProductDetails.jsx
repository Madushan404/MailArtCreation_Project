import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Product not found</h2>
          <Link to="/products" className="text-[#C9A66B] hover:text-[#b8955a] font-medium underline mt-4 inline-block">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(prev => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/products"
            className="flex items-center gap-2 text-[#C9A66B] hover:text-[#b8955a] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Products</span>
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-gray-900 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A66B]/10 to-amber-100/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <img
                src={product.image}
                alt={product.name}
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-lg border border-gray-200 group-hover:scale-[1.02] group-hover:shadow-xl transition-all duration-300"
              />
              
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-[#C9A66B] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                Premium Quality
              </div>
            </div>

            {/* Thumbnail Gallery (placeholder for future images) */}
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-lg border-2 border-gray-200 hover:border-[#C9A66B] transition-colors cursor-pointer overflow-hidden bg-gray-50"
                >
                  <img
                    src={product.image}
                    alt={`Thumbnail ${i}`}
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">(128 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold text-black">
                Rs. {product.price}
              </span>
              <span className="text-3xl text-gray-400 line-through">
                Rs. {Math.round(product.price * 1.2)}
              </span>
              <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-semibold border border-green-200">
                17% OFF
              </span>
            </div>

            {/* Short Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Premium quality envelope designed for professional business use, branding, and secure communication. Perfect for corporate correspondence and special occasions.
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-5 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-6 py-3 font-semibold min-w-[60px] text-center border-x-2 border-gray-200 text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="px-5 py-3 hover:bg-gray-50 transition-colors text-gray-700"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <span className="text-gray-600">In Stock: <span className="text-green-600 font-semibold">250+ units</span></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-gradient-to-r from-[#C9A66B] to-[#d4b57a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#C9A66B]/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              
              <button className="bg-white border-2 border-gray-200 px-6 py-4 rounded-xl hover:bg-gray-50 hover:border-[#C9A66B] transition-all duration-300">
                <svg className="w-6 h-6 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#C9A66B] transition-colors">
                <div className="text-2xl mb-2">🚚</div>
                <div className="text-sm text-gray-700 font-medium">Free Shipping</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#C9A66B] transition-colors">
                <div className="text-2xl mb-2">↩️</div>
                <div className="text-sm text-gray-700 font-medium">Easy Returns</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#C9A66B] transition-colors">
                <div className="text-2xl mb-2">✓</div>
                <div className="text-sm text-gray-700 font-medium">Verified Quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16 bg-white">
          <div className="border-b border-gray-200">
            <div className="flex gap-8">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 font-semibold capitalize transition-colors relative ${
                    activeTab === tab
                      ? "text-[#C9A66B]"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A66B]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div className="prose prose-gray max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our premium envelopes are crafted with the finest materials to ensure your correspondence 
                  makes a lasting impression. Perfect for business communications, invitations, and special occasions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Each envelope features superior construction with reinforced seams and a professional finish. 
                  The elegant design complements any stationery while providing secure closure for your documents.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9A66B] mt-1">✓</span>
                    <span>High-quality paper stock for durability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9A66B] mt-1">✓</span>
                    <span>Professional appearance suitable for business use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9A66B] mt-1">✓</span>
                    <span>Secure adhesive seal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C9A66B] mt-1">✓</span>
                    <span>Available in various sizes</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Material", value: "Premium Paper Stock" },
                    { label: "Weight", value: "80 GSM" },
                    { label: "Finish", value: "Smooth Matte" },
                    { label: "Closure Type", value: "Adhesive Seal" },
                    { label: "Color", value: "Natural White" },
                    { label: "Dimensions", value: "Standard Size" },
                    { label: "Package Quantity", value: "100 pieces" },
                    { label: "Sustainability", value: "Recyclable" },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <span className="text-gray-600 font-medium">{spec.label}</span>
                      <span className="text-gray-900 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
                
                {/* Review Summary */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-[#C9A66B]">4.8</div>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#C9A66B] fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">128 reviews</div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3">
                          <span className="text-sm text-gray-600 w-8">{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-[#C9A66B] h-full rounded-full"
                              style={{ width: `${stars === 5 ? 75 : stars === 4 ? 20 : 5}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-8">{stars === 5 ? 96 : stars === 4 ? 25 : 7}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#C9A66B] rounded-full flex items-center justify-center font-bold text-white">
                            JD
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">John Doe</div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-[#C9A66B] fill-current" viewBox="0 0 20 20">
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Excellent quality envelopes! Perfect for our business correspondence. 
                        The paper weight is substantial and the finish is very professional.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}