import { Link } from "react-router-dom";

export default function Home() {
  // Sample featured products - replace with actual data from your backend
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Business Envelope",
      price: 2500,
      image: "/api/placeholder/400/300",
      category: "Business"
    },
    {
      id: 2,
      name: "Luxury Wedding Envelope",
      price: 3500,
      image: "/api/placeholder/400/300",
      category: "Wedding"
    },
    {
      id: 3,
      name: "Standard Office Envelope",
      price: 1500,
      image: "/api/placeholder/400/300",
      category: "Office"
    },
    {
      id: 4,
      name: "Custom Branded Envelope",
      price: 4000,
      image: "/api/placeholder/400/300",
      category: "Custom"
    }
  ];

  const categories = [
    { name: "Business", icon: "💼", count: 45 },
    { name: "Wedding", icon: "💝", count: 32 },
    { name: "Office", icon: "📄", count: 58 },
    { name: "Custom", icon: "🎨", count: 24 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0A1A2F] via-[#1a2942] to-[#0A1A2F] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-[#C9A66B]/20 border border-[#C9A66B] text-[#C9A66B] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Premium Quality Envelopes
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Elevate Your <span className="text-[#C9A66B]">Correspondence</span> with Premium Envelopes
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Discover our exclusive collection of high-quality envelopes designed for businesses, events, and personal use. Where quality meets elegance.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products"
                  className="bg-gradient-to-r from-[#C9A66B] to-[#d4b57a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#C9A66B]/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2"
                >
                  Shop Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  to="/about"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#C9A66B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm">Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Eco-Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">Fast Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="aspect-square bg-gradient-to-br from-[#C9A66B]/20 to-amber-100/10 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">📮</div>
                      <p className="text-xl font-semibold">Premium Collection</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A66B]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Find the perfect envelope for every occasion</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="group bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#C9A66B]"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} Products</p>
                <div className="mt-4 text-[#C9A66B] font-semibold group-hover:gap-2 flex items-center justify-center gap-1 transition-all">
                  Explore
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-600 text-lg">Our most popular envelope designs</p>
            </div>
            <Link 
              to="/products"
              className="text-[#C9A66B] font-semibold hover:text-[#b8955a] flex items-center gap-2"
            >
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#C9A66B] hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#C9A66B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#C9A66B] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#C9A66B]">Rs. {product.price}</span>
                    <button className="bg-gray-100 group-hover:bg-[#C9A66B] text-gray-600 group-hover:text-white p-2 rounded-lg transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MailArt Creation?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide exceptional quality and service that sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-[#C9A66B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Made from the finest materials with rigorous quality control to ensure perfection in every envelope.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-[#C9A66B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Design</h3>
              <p className="text-gray-600">
                Personalize your envelopes with custom designs, logos, and branding to make a lasting impression.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-[#C9A66B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround times and reliable shipping to get your envelopes when you need them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">Trusted by thousands of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C9A66B] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Excellent quality envelopes! Perfect for our corporate needs. The customization options are fantastic and the delivery was super fast."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C9A66B] rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Miller</div>
                  <div className="text-sm text-gray-600">CEO, TechCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C9A66B] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Beautiful wedding envelopes that made our invitations truly special. The quality exceeded our expectations. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C9A66B] rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <div className="font-bold text-gray-900">John & Diana</div>
                  <div className="text-sm text-gray-600">Wedding Couple</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C9A66B] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Great service and amazing product quality. We order bulk envelopes monthly and they never disappoint. A reliable partner!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C9A66B] rounded-full flex items-center justify-center text-white font-bold">
                  RP
                </div>
                <div>
                  <div className="font-bold text-gray-900">Robert Patel</div>
                  <div className="text-sm text-gray-600">Office Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-[#0A1A2F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Browse our extensive collection of premium envelopes and find the perfect match for your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/products"
              className="bg-gradient-to-r from-[#C9A66B] to-[#d4b57a] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#C9A66B]/30 hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2"
            >
              Shop Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}