export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#C9A66B]/10 via-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to MailArt Creation - Your trusted partner in premium envelope solutions. 
            Delivering excellence and quality since our inception.
          </p>
        </div>
      </div>

      {/* Company Introduction Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Who We Are */}
          <div className="bg-[#0A1A2F] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-[#C9A66B] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-300 leading-relaxed">
              MailArt Creation is a premium-grade envelope manufacturer specializing in custom designs, bulk orders, and high-quality paper products for businesses, events, and personal use.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-[#0A1A2F] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-[#C9A66B] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To revolutionize the envelope market by providing premium-quality, eco-friendly solutions that combine tradition with innovation while exceeding customer expectations.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-[#0A1A2F] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-[#C9A66B] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become Sri Lanka's leading envelope provider and innovator, setting new standards in quality, sustainability, design, innovation, and professional reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Value Promise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At MailArt Creation, quality is not optional – it is the foundation. We ensure excellence in every envelope we produce.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow border-2 border-[#C9A66B]/20 group-hover:border-[#C9A66B]">
                <svg className="w-10 h-10 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Durable and Ethically Sourced Materials</h3>
              <p className="text-gray-600 text-sm">
                We use only the finest, sustainably sourced paper materials for lasting quality.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow border-2 border-[#C9A66B]/20 group-hover:border-[#C9A66B]">
                <svg className="w-10 h-10 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strict Quality Production Control</h3>
              <p className="text-gray-600 text-sm">
                Every envelope undergoes rigorous quality checks to ensure perfection.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow border-2 border-[#C9A66B]/20 group-hover:border-[#C9A66B]">
                <svg className="w-10 h-10 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Elegant Visual Presentation & Design</h3>
              <p className="text-gray-600 text-sm">
                Beautiful designs that make every correspondence memorable and professional.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow border-2 border-[#C9A66B]/20 group-hover:border-[#C9A66B]">
                <svg className="w-10 h-10 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Environmentally Protective Production Methods</h3>
              <p className="text-gray-600 text-sm">
                Committed to eco-friendly practices that protect our planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#C9A66B]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Unmatched Quality</h3>
                  <p className="text-gray-600">
                    At MailArt Creation, we believe that an envelope is more than just packaging – it is a unified representation of trust and prestige by providing premium-grade, high-quality envelopes that combine durability with aesthetic value. Our clients are ensured to bear the foundation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#C9A66B]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
                  <p className="text-gray-600">
                    We ensure that every product is made fresh, durable, stylishly colored, branded, and finished with close printing & traceable assurance. Whether you run a corporate office, a creative professional, or an event organizer, we have tailored envelope options that suit your vision.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#C9A66B]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#C9A66B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Practices</h3>
                  <p className="text-gray-600">
                    Environmental responsibility is at the heart of our operations. We use eco-friendly materials and sustainable production methods to minimize our ecological footprint while delivering exceptional quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#C9A66B]/20 to-amber-100/30 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📮</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Envelopes</h3>
                  <p className="text-gray-600">Crafted with excellence for every occasion</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C9A66B]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#0A1A2F] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#C9A66B] mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#C9A66B] mb-2">5000+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#C9A66B] mb-2">50+</div>
              <div className="text-gray-300">Envelope Designs</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#C9A66B] mb-2">100%</div>
              <div className="text-gray-300">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0A1A2F] rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Elevate Your Brand's First Impression?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Partner with Sri Lanka's leading provider of premium, sustainable envelope solutions for your company, event, or personal needs.
              </p>
              <button className="bg-gradient-to-r from-[#C9A66B] to-[#d4b57a] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#C9A66B]/30 hover:scale-[1.02] transition-all duration-300">
                Contact Us →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}