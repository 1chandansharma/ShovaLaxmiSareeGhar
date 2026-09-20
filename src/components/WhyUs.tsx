const features = [
  {
    icon: "🪷",
    title: "Authentic Traditional Wear",
    desc: "Every piece in our collection is carefully selected to represent the rich culture and tradition of Nepali and Indian ethnic fashion.",
  },
  {
    icon: "💎",
    title: "Premium Quality Fabrics",
    desc: "We source only the finest silk, cotton, georgette, and chiffon to ensure comfort, elegance, and durability in every garment.",
  },
  {
    icon: "🎨",
    title: "Vast Collection",
    desc: "From everyday cotton sarees to luxurious bridal wear — we have hundreds of designs, colors, and styles for every budget.",
  },
  {
    icon: "🙏",
    title: "Trusted by Families",
    desc: "Generations of families in Jhapa trust Shova Laxmi Saree Ghar for all their traditional clothing needs and special occasions.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "We believe every woman deserves to look beautiful — that's why we offer competitive pricing without compromising on quality.",
  },
  {
    icon: "🌸",
    title: "Personalized Service",
    desc: "Our expert staff will help you find the perfect outfit that suits your taste, occasion, and personality with warmth and care.",
  },
];

const stats = [
  { num: "500+",  label: "Saree Designs" },
  { num: "15+",   label: "Years of Trust" },
  { num: "1000+", label: "Happy Customers" },
  { num: "100%",  label: "Authentic Products" },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="py-20 md:py-28 bg-cream floral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: "#C9A84C" }}>
            ✦ Our Promise ✦
          </p>
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="gold-divider mt-3">
            <div className="gold-line" />
            <span className="gold-diamond text-2xl">❁</span>
            <div className="gold-line" />
          </div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base mt-2">
            We are more than a store — we are your trusted companion in celebrating tradition, beauty, and culture.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="card-hover group p-6 rounded-2xl bg-white shadow-md relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-10 rounded-bl-full"
                style={{ background: "#C9A84C" }}
              />
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 shadow-md flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #8B0000, #A52020)",
                  border: "2px solid #C9A84C",
                }}
              >
                {f.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#8B0000", fontFamily: "'Playfair Display', serif" }}
              >
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              {/* Bottom hover accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "linear-gradient(90deg, #8B0000, #C9A84C)" }}
              />
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div
          className="rounded-2xl py-10 px-6 md:px-12 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #8B4513 100%)" }}
        >
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-4xl md:text-5xl font-bold mb-1 shimmer-text"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.num}
                </p>
                <p className="text-sm md:text-base text-white/80 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
