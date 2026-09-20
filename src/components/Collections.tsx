import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Traditional Silk Saree",
    category: "Saree",
    badge: "Bestseller",
    desc: "Pure silk sarees with intricate zari work — timeless elegance for every occasion.",
    image: "https://images.pexels.com/photos/12850133/pexels-photo-12850133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: "🪷",
  },
  {
    id: 2,
    name: "Fancy Wedding Saree",
    category: "Saree",
    badge: "New Arrival",
    desc: "Stunning bridal and wedding sarees with rich embroidery and luxurious fabrics.",
    image: "https://images.pexels.com/photos/7920188/pexels-photo-7920188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: "💍",
  },
  {
    id: 3,
    name: "Designer Kurta Set",
    category: "Kurta",
    badge: "Popular",
    desc: "Elegant kurta sets for daily wear and festive occasions — comfort meets style.",
    image: "https://images.pexels.com/photos/35445207/pexels-photo-35445207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: "✨",
  },
  {
    id: 4,
    name: "Festival Saree Collection",
    category: "Festive",
    badge: "Festive",
    desc: "Vibrant and colorful sarees perfect for Dashain, Tihar, and all celebrations.",
    image: "https://images.pexels.com/photos/8750027/pexels-photo-8750027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: "🎊",
  },
  {
    id: 5,
    name: "Ethnic Lehenga Choli",
    category: "Ethnic Wear",
    badge: "Trending",
    desc: "Beautiful lehenga cholis for weddings and special events — be the center of attention.",
    image: "https://images.pexels.com/photos/17503287/pexels-photo-17503287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: "👸",
  },
  {
    id: 6,
    name: "Cotton Daily Wear",
    category: "Kurta",
    badge: "Comfort",
    desc: "Comfortable cotton kurtas and salwar kameez for everyday elegance and ease.",
    image: "https://images.pexels.com/photos/32664191/pexels-photo-32664191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    icon: "🌸",
  },
];

const CATEGORIES = ["All", "Saree", "Kurta", "Ethnic Wear", "Festive"];

const categoryColors: Record<string, string> = {
  Saree: "#8B0000",
  Kurta: "#6B3A2A",
  "Ethnic Wear": "#7A4800",
  Festive: "#5a3d1a",
};

export default function Collections() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="collections"
      className="py-20 md:py-28 mandala-bg"
      style={{ backgroundColor: "#F5E6CE" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-[0.25em] mb-3"
            style={{ color: "#C9A84C" }}
          >
            ✦ Our Offerings ✦
          </p>
          <h2 className="section-title">Our Collections</h2>
          <div className="gold-divider mt-3">
            <div className="gold-line" />
            <span className="gold-diamond text-2xl">❂</span>
            <div className="gold-line" />
          </div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base mt-2">
            Explore our wide range of traditional and fancy ethnic wear — handpicked for every occasion and budget.
          </p>
        </div>

        {/* Category filter pills — interactive */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filter categories">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{
                  borderColor: "#8B0000",
                  color: isActive ? "white" : "#8B0000",
                  background: isActive
                    ? "linear-gradient(135deg, #8B0000, #A52020)"
                    : "transparent",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                  boxShadow: isActive ? "0 4px 12px rgba(139,0,0,0.3)" : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="card-hover rounded-2xl overflow-hidden shadow-lg bg-white group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60 md:h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(139,0,0,0.65)" }}
                >
                  <a
                    href="#contact"
                    className="btn-gold text-sm px-6 py-2.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Enquire Now
                  </a>
                </div>
                <div className="product-badge">{product.badge}</div>
                <div
                  className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{
                    background: categoryColors[product.category] || "#8B0000",
                    border: "1px solid #C9A84C",
                  }}
                >
                  {product.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5" style={{ borderTop: "3px solid #C9A84C" }}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{product.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-bold text-base mb-1"
                      style={{ color: "#8B0000", fontFamily: "'Playfair Display', serif" }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 italic">Available in store</span>
                  <a
                    href="tel:9705970521"
                    className="text-xs font-semibold transition-colors duration-200"
                    style={{ color: "#8B0000" }}
                  >
                    📞 Call for price
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="mt-16 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4a1a00 100%)" }}
        >
          <div className="absolute top-4 left-4 text-5xl opacity-10 text-yellow-300">❋</div>
          <div className="absolute bottom-4 right-4 text-5xl opacity-10 text-yellow-300">❋</div>
          <p className="text-xs font-semibold tracking-[0.2em] mb-2" style={{ color: "#E2C27D" }}>
            ✦ Special Offer ✦
          </p>
          <h3
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Looking for Something Special?
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-6 max-w-md mx-auto">
            Visit our store in Bhadrapur or call us — we have hundreds of unique designs waiting for you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9705970521" className="btn-gold font-semibold">
              📞 Call: 9705970521
            </a>
            <a href="#contact" className="btn-primary font-semibold">
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
