export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/9345930/pexels-photo-9345930.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Top gold band */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 z-10"
        style={{ background: "linear-gradient(90deg, #C9A84C, #E2C27D, #C9A84C)" }}
      />

      {/* Corner ornaments */}
      <div className="absolute top-16 left-6 text-3xl opacity-25 z-10" style={{ color: "#C9A84C" }}>❋</div>
      <div className="absolute top-16 right-6 text-3xl opacity-25 z-10" style={{ color: "#C9A84C" }}>❋</div>

      {/* ── Centre content — grows to fill available space ── */}
      <div
        className="relative z-10 flex-1 flex items-center justify-center text-center px-4 sm:px-6 w-full fade-up"
        style={{
          paddingTop: "calc(var(--announcement-h) + 88px)",
          paddingBottom: "2rem",
        }}
      >
        <div className="max-w-4xl mx-auto w-full">

          {/* Logo circle */}
          <div className="flex justify-center mb-5">
            <div
              className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 shadow-2xl"
              style={{ borderColor: "#C9A84C", boxShadow: "0 0 30px rgba(201,168,76,0.5)" }}
            >
              <img
                src="/logo.png"
                alt="Shova Laxmi Saree Ghar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.style.background = "linear-gradient(135deg,#8B0000,#C9A84C)";
                    parent.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:2.5rem;">🪷</div>`;
                  }
                }}
              />
            </div>
          </div>

          {/* Nepali tagline */}
          <p
            className="text-xs md:text-sm font-medium tracking-[0.25em] mb-2"
            style={{ color: "#E2C27D" }}
          >
            ✦ परम्परा हाम्रो &bull; सौन्दर्य तपाईंको ✦
          </p>

          {/* Main title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="shimmer-text">Shova Laxmi</span>
            <br />
            <span className="text-white">Saree Ghar</span>
          </h1>

          {/* Devanagari name */}
          <p
            className="text-xl md:text-2xl font-bold mb-4"
            style={{ color: "#C9A84C", fontFamily: "'Tiro Devanagari Hindi', serif" }}
          >
            शोभा लक्ष्मी सारी घर
          </p>

          {/* Tagline */}
          <p className="text-sm md:text-base text-white/85 max-w-lg mx-auto mb-6 leading-relaxed">
            Your trusted destination for{" "}
            <strong style={{ color: "#E2C27D" }}>Traditional &amp; Fancy Sarees</strong>,
            Kurta, and exquisite Ladies Ethnic Wear — in the heart of Bhadrapur, Jhapa
          </p>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 md:w-28" style={{ background: "linear-gradient(90deg,transparent,#C9A84C)" }} />
            <span style={{ color: "#C9A84C" }} className="text-xl">❂</span>
            <div className="h-px w-20 md:w-28" style={{ background: "linear-gradient(90deg,#C9A84C,transparent)" }} />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#collections" className="btn-gold text-sm md:text-base px-8 py-3 font-semibold">
              Explore Collections ✨
            </a>
            <a href="#contact" className="btn-primary text-sm md:text-base px-8 py-3 font-semibold">
              Visit Our Shop 📍
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats strip — always pinned to bottom, above gold band ── */}
      <div className="relative z-10 w-full" style={{ background: "rgba(0,0,0,0.35)" }}>
        {/* Top separator line */}
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />

        <div className="max-w-lg mx-auto px-4 py-5 grid grid-cols-3 gap-4 text-center">
          {[
            { num: "500+", label: "Saree Designs" },
            { num: "100%", label: "Authentic" },
            { num: "5★",   label: "Quality" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${i < 2 ? "border-r" : ""}`}
              style={{ borderColor: "rgba(201,168,76,0.3)" }}
            >
              <p
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#E2C27D", fontFamily: "'Playfair Display', serif" }}
              >
                {s.num}
              </p>
              <p className="text-xs text-white/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom gold band */}
        <div
          className="h-1.5 w-full"
          style={{ background: "linear-gradient(90deg, #C9A84C, #E2C27D, #C9A84C)" }}
        />
      </div>
    </section>
  );
}
