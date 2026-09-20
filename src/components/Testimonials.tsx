const testimonials = [
  {
    name: "Sunita Rai",
    location: "Bhadrapur, Jhapa",
    rating: 5,
    text: "Shova Laxmi Saree Ghar has the most beautiful collection of sarees I've ever seen! Melina didi helped me find the perfect saree for my wedding. The quality is outstanding and the price is very reasonable. Highly recommended!",
    avatar: "S",
  },
  {
    name: "Kamala Thapa",
    location: "Nayabazar, Jhapa",
    rating: 5,
    text: "I've been coming to this store for years and I'm always impressed by the new arrivals. The kurta designs are so elegant and the fabric quality is top-notch. This is my go-to shop for all traditional wear.",
    avatar: "K",
  },
  {
    name: "Mina Limbu",
    location: "Damak, Jhapa",
    rating: 5,
    text: "Excellent service and a wonderful collection! I bought a silk saree for Dashain and got so many compliments. The staff is very helpful and friendly. Will definitely come back for more!",
    avatar: "M",
  },
  {
    name: "Priya Sharma",
    location: "Bhadrapur",
    rating: 5,
    text: "The variety of sarees here is amazing! From simple cotton to heavy bridal sarees, they have it all. Melina ji gave great suggestions for my daughter's wedding. Very trustworthy store!",
    avatar: "P",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #8B0000 0%, #6B0000 60%, #4a1a00 100%)" }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-8 left-8 text-8xl opacity-5 text-yellow-200">❋</div>
      <div className="absolute bottom-8 right-8 text-8xl opacity-5 text-yellow-200">❋</div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] opacity-5 text-yellow-200">❁</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#E2C27D" }}
          >
            ✦ Customer Love ✦
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-16 md:w-24" style={{ background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
            <span className="text-2xl" style={{ color: "#C9A84C" }}>❂</span>
            <div className="h-px w-16 md:w-24" style={{ background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl relative group transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(201,168,76,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-4 right-6 text-5xl font-bold leading-none opacity-20"
                style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <svg key={si} width="18" height="18" viewBox="0 0 24 24" fill="#C9A84C">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-white/85 text-sm md:text-base leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #A8832A)" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="font-semibold text-white text-sm"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#E2C27D" }}>
                    📍 {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-white/70 text-sm mb-4">
            Join hundreds of happy customers — visit us today!
          </p>
          <a
            href="https://wa.me/9779705970521"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block"
          >
            💬 Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
}
