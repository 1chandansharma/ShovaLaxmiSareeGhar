export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream floral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: "#C9A84C" }}>
            ✦ Our Story ✦
          </p>
          <h2 className="section-title">About Us</h2>
          <div className="gold-divider mt-3">
            <div className="gold-line" />
            <span className="gold-diamond text-2xl">❁</span>
            <div className="gold-line" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Side */}
          <div className="relative">
            {/* Offset frame */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ border: "2px solid #C9A84C", opacity: 0.45, zIndex: 0 }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <img
                src="https://images.pexels.com/photos/7920055/pexels-photo-7920055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Traditional Saree Collection at Shova Laxmi"
                className="w-full h-80 lg:h-[480px] object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: "linear-gradient(to top, #8B0000 0%, transparent 60%)" }}
              />
            </div>

            {/* Proprietor badge */}
            <div
              className="absolute -bottom-6 right-4 md:-right-6 z-20 rounded-2xl shadow-xl px-5 py-4 text-center min-w-[160px]"
              style={{
                background: "linear-gradient(135deg, #8B0000, #6B0000)",
                border: "2px solid #C9A84C",
              }}
            >
              <div className="text-3xl mb-1">👑</div>
              <p
                className="text-white font-bold text-sm"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Melina Shahi
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#E2C27D" }}>
                Proprietor
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="mt-10 lg:mt-0">
            <p
              className="text-sm font-semibold tracking-widest mb-3"
              style={{ color: "#C9A84C" }}
            >
              Bhadrapur, Jhapa, Nepal
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
              style={{ color: "#8B0000", fontFamily: "'Playfair Display', serif" }}
            >
              Where Tradition Meets Elegance
            </h3>
            <div
              className="w-16 h-1 rounded-full mb-6"
              style={{ background: "linear-gradient(90deg, #8B0000, #C9A84C)" }}
            />

            <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
              Welcome to{" "}
              <strong style={{ color: "#8B0000" }}>Shova Laxmi Saree Ghar</strong> — a cherished
              destination for women who appreciate the beauty of traditional Indian and Nepali ethnic
              wear. Nestled in the vibrant Nayabazar of Bhadrapur-5, Jhapa, we have been serving
              our community with pride and passion.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
              Under the dedicated leadership of{" "}
              <strong style={{ color: "#8B0000" }}>Melina Shahi</strong>, our store brings you an
              exquisite collection of sarees, kurtas, and traditional ladies garments — carefully
              curated to celebrate the rich cultural heritage of our region.
            </p>

            {/* Value grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🪷", title: "Authentic",       desc: "100% traditional designs" },
                { icon: "💎", title: "Premium Quality",  desc: "Finest fabrics & craftsmanship" },
                { icon: "🎨", title: "Wide Range",       desc: "Hundreds of styles & colors" },
                { icon: "🤝", title: "Trusted",          desc: "Serving the community with love" },
              ].map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.25)",
                  }}
                >
                  <span className="text-2xl mt-0.5">{v.icon}</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#8B0000" }}>
                      {v.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#collections" className="btn-primary inline-block">
              Explore Our Collections →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
