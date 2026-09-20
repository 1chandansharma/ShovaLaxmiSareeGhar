const quickLinks = [
  { label: "Home",            href: "#home" },
  { label: "About Us",        href: "#about" },
  { label: "Collections",     href: "#collections" },
  { label: "Why Choose Us",   href: "#whyus" },
  { label: "Gallery",         href: "#gallery" },
  { label: "Contact",         href: "#contact" },
];

const categories = [
  "Silk Sarees",
  "Fancy Sarees",
  "Wedding Sarees",
  "Festival Sarees",
  "Cotton Sarees",
  "Designer Kurta",
  "Salwar Kameez",
  "Lehenga Choli",
  "Ethnic Wear",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #3a0800 0%, #5a1200 30%, #6B0000 70%, #4a1200 100%)",
      }}
    >
      {/* Top gold border */}
      <div
        className="h-1.5"
        style={{
          background:
            "linear-gradient(90deg, #8B0000, #C9A84C, #E2C27D, #C9A84C, #8B0000)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-8xl opacity-5 text-yellow-200 pointer-events-none select-none">❋</div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-5 text-yellow-200 pointer-events-none select-none">❋</div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 transition-transform duration-300 group-hover:scale-105"
                style={{ borderColor: "#C9A84C" }}
              >
                <img
                  src="/logo.png"
                  alt="Shova Laxmi Saree Ghar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    const parent = el.parentElement!;
                    parent.style.background = "linear-gradient(135deg,#8B0000,#C9A84C)";
                    parent.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">🪷</div>`;
                  }}
                />
              </div>
              <div>
                <h3
                  className="text-white font-bold text-base leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Shova Laxmi<br />Saree Ghar
                </h3>
                <p className="text-xs" style={{ color: "#C9A84C" }}>
                  शोभा लक्ष्मी सारी घर
                </p>
              </div>
            </a>

            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Your trusted destination for Traditional &amp; Fancy Sarees, Kurtas, and
              exquisite Ladies Ethnic Wear in the heart of Bhadrapur, Jhapa, Nepal.
            </p>

            {/* Tagline box */}
            <div
              className="py-3 px-4 rounded-xl text-center text-sm italic"
              style={{
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                color: "#E2C27D",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              "परम्परा हाम्रो, सौन्दर्य तपाईंको"
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-base mb-5 pb-2 relative"
              style={{ color: "#E2C27D", fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
              <span
                className="absolute bottom-0 left-0 w-10 h-0.5 rounded-full"
                style={{ background: "#C9A84C" }}
              />
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow-300 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span
                      className="text-xs transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
                      style={{ color: "#C9A84C" }}
                    >
                      ❯
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product categories */}
          <div>
            <h4
              className="font-bold text-base mb-5 pb-2 relative"
              style={{ color: "#E2C27D", fontFamily: "'Playfair Display', serif" }}
            >
              Our Products
              <span
                className="absolute bottom-0 left-0 w-10 h-0.5 rounded-full"
                style={{ background: "#C9A84C" }}
              />
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="text-white/70 text-sm flex items-center gap-2">
                    <span className="flex-shrink-0" style={{ color: "#C9A84C" }}>✦</span>
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="font-bold text-base mb-5 pb-2 relative"
              style={{ color: "#E2C27D", fontFamily: "'Playfair Display', serif" }}
            >
              Contact Info
              <span
                className="absolute bottom-0 left-0 w-10 h-0.5 rounded-full"
                style={{ background: "#C9A84C" }}
              />
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="text-xs tracking-wider mb-0.5" style={{ color: "#C9A84C" }}>Proprietor</p>
                <p
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Melina Shahi
                </p>
              </li>
              <li>
                <p className="text-xs tracking-wider mb-0.5" style={{ color: "#C9A84C" }}>Address</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Bhadrapur-5, Nayabazar<br />Jhapa, Nepal
                </p>
              </li>
              <li>
                <p className="text-xs tracking-wider mb-0.5" style={{ color: "#C9A84C" }}>Phone</p>
                <a
                  href="tel:9705970521"
                  className="text-white text-sm hover:text-yellow-300 transition-colors font-semibold"
                >
                  9705970521
                </a>
              </li>
              <li>
                <p className="text-xs tracking-wider mb-0.5" style={{ color: "#C9A84C" }}>Email</p>
                <a
                  href="mailto:shovalaxmisareeghar@gmail.com"
                  className="text-white/70 text-xs hover:text-yellow-300 transition-colors break-all"
                >
                  shovalaxmisareeghar@gmail.com
                </a>
              </li>
            </ul>

            {/* Contact icon buttons */}
            <div className="flex gap-3 mt-5">
              <a
                href="tel:9705970521"
                className="w-10 h-10 rounded-full flex items-center justify-center text-base transition-all duration-200 hover:scale-110"
                style={{
                  background: "linear-gradient(135deg,#8B0000,#A52020)",
                  border: "1px solid #C9A84C",
                }}
                title="Call Us"
                aria-label="Call Us"
              >
                📞
              </a>
              <a
                href="https://wa.me/9779705970521"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-base transition-all duration-200 hover:scale-110"
                style={{ background: "#25D366" }}
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href="mailto:shovalaxmisareeghar@gmail.com"
                className="w-10 h-10 rounded-full flex items-center justify-center text-base transition-all duration-200 hover:scale-110"
                style={{ background: "linear-gradient(135deg,#C9A84C,#A8832A)" }}
                title="Email"
                aria-label="Send Email"
              >
                ✉️
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/10 py-5 relative z-10"
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-white/60 text-xs">
              © {year}{" "}
              <span style={{ color: "#E2C27D" }}>Shova Laxmi Saree Ghar</span>. All Rights Reserved.
            </p>
            <p className="text-white/60 text-xs">
              Bhadrapur-5, Nayabazar, Jhapa, Nepal &nbsp;|&nbsp; 📞 9705970521
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
              <span style={{ color: "#C9A84C" }}>❁</span>
              <div className="h-px w-8" style={{ background: "#C9A84C" }} />
            </div>
          </div>
          <p className="text-center text-white/40 text-xs mt-2">
            Made with ❤️ for Shova Laxmi Saree Ghar
          </p>
        </div>
      </div>
    </footer>
  );
}
