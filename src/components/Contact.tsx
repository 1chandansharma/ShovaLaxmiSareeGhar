export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-cream floral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#C9A84C" }}
          >
            ✦ Get In Touch ✦
          </p>
          <h2 className="section-title">Visit & Contact Us</h2>
          <div className="gold-divider mt-3">
            <div className="gold-line" />
            <span className="gold-diamond text-2xl">❁</span>
            <div className="gold-line" />
          </div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base mt-2">
            We'd love to welcome you to our store. Come visit us or get in touch — we're always here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info Card */}
          <div
            className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "2px solid rgba(201,168,76,0.4)" }}
          >
            {/* Card Header */}
            <div
              className="px-6 py-5 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #8B0000 0%, #6B0000 100%)",
              }}
            >
              <div className="absolute top-2 right-4 text-5xl opacity-10 text-yellow-200">❋</div>
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className="w-14 h-14 rounded-full overflow-hidden border-2 flex-shrink-0"
                  style={{ borderColor: "#C9A84C" }}
                >
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Shova Laxmi Saree Ghar
                  </h3>
                  <p style={{ color: "#E2C27D" }} className="text-sm">
                    Traditional & Fancy Sarees
                  </p>
                </div>
              </div>
            </div>

            {/* Info Items */}
            <div className="bg-white p-6 space-y-5">
              {/* Proprietor */}
              <div className="flex items-start gap-4 pb-4" style={{ borderBottom: "1px solid #f0e0c8" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: "linear-gradient(135deg, #8B0000, #A52020)" }}
                >
                  👑
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#C9A84C" }}>
                    Proprietor
                  </p>
                  <p className="font-bold text-base" style={{ color: "#8B0000", fontFamily: "'Playfair Display', serif" }}>
                    Melina Shahi
                  </p>
                  <p className="text-gray-500 text-sm">Owner & Founder</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 pb-4" style={{ borderBottom: "1px solid #f0e0c8" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: "linear-gradient(135deg, #8B0000, #A52020)" }}
                >
                  📍
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#C9A84C" }}>
                    Our Address
                  </p>
                  <p className="font-semibold text-gray-800 text-sm md:text-base leading-relaxed">
                    Bhadrapur-5, Nayabazar<br />
                    Jhapa, Nepal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pb-4" style={{ borderBottom: "1px solid #f0e0c8" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: "linear-gradient(135deg, #8B0000, #A52020)" }}
                >
                  📞
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#C9A84C" }}>
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:9705970521"
                    className="font-bold text-base hover:underline transition-colors"
                    style={{ color: "#8B0000" }}
                  >
                    9705970521
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pb-4" style={{ borderBottom: "1px solid #f0e0c8" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: "linear-gradient(135deg, #8B0000, #A52020)" }}
                >
                  ✉️
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#C9A84C" }}>
                    Email Address
                  </p>
                  <a
                    href="mailto:shovalaxmisareeghar@gmail.com"
                    className="font-semibold text-sm hover:underline transition-colors break-all"
                    style={{ color: "#8B0000" }}
                  >
                    shovalaxmisareeghar@gmail.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: "linear-gradient(135deg, #8B0000, #A52020)" }}
                >
                  🕐
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#C9A84C" }}>
                    Store Hours
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Sun – Fri:</span> 7:00 AM – 8:00 PM
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Saturday:</span> 7:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="px-6 py-4 grid grid-cols-2 gap-3"
              style={{ background: "#FDF6EC", borderTop: "2px solid rgba(201,168,76,0.3)" }}
            >
              <a
                href="tel:9705970521"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #8B0000, #A52020)", border: "1px solid #C9A84C" }}
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/9779705970521"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:opacity-90"
                style={{ background: "#25D366" }}
              >
                💬 WhatsApp
              </a>
              <a
                href="mailto:shovalaxmisareeghar@gmail.com"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 col-span-2 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E2C27D)", color: "#5a2d0c", border: "1px solid #8B0000" }}
              >
                ✉️ Send Email
              </a>
            </div>
          </div>

          {/* Map + Visit Info */}
          <div className="space-y-6">
            {/* Map Embed */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ border: "2px solid rgba(201,168,76,0.4)" }}
            >
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #8B0000, #6B0000)" }}
              >
                <span className="text-lg">📍</span>
                <p className="text-white font-semibold text-sm">
                  Bhadrapur-5, Nayabazar, Jhapa, Nepal
                </p>
              </div>
              <iframe
                title="Shova Laxmi Saree Ghar Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.3!2d88.066!3d26.513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5b2d2a8e00001%3A0x9b4db0f0a7b5d4b1!2sBhadrapur%2C+Jhapa%2C+Nepal!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Visit Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="p-5 rounded-2xl text-center"
                style={{
                  background: "white",
                  border: "1px solid rgba(201,168,76,0.3)",
                  boxShadow: "0 4px 15px rgba(139,0,0,0.08)",
                }}
              >
                <div className="text-4xl mb-2">🪷</div>
                <h4
                  className="font-bold text-sm mb-1"
                  style={{ color: "#8B0000", fontFamily: "'Playfair Display', serif" }}
                >
                  Located in Nayabazar
                </h4>
                <p className="text-gray-600 text-xs">
                  Easily accessible from the main Nayabazar market area of Bhadrapur
                </p>
              </div>

              <div
                className="p-5 rounded-2xl text-center"
                style={{
                  background: "white",
                  border: "1px solid rgba(201,168,76,0.3)",
                  boxShadow: "0 4px 15px rgba(139,0,0,0.08)",
                }}
              >
                <div className="text-4xl mb-2">🎁</div>
                <h4
                  className="font-bold text-sm mb-1"
                  style={{ color: "#8B0000", fontFamily: "'Playfair Display', serif" }}
                >
                  Special Occasions
                </h4>
                <p className="text-gray-600 text-xs">
                  Bulk orders & special event discounts available — call us for details
                </p>
              </div>

              <div
                className="p-5 rounded-2xl text-center sm:col-span-2"
                style={{
                  background: "linear-gradient(135deg, rgba(139,0,0,0.06), rgba(201,168,76,0.1))",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                <p
                  className="text-sm font-medium italic"
                  style={{ color: "#8B0000", fontFamily: "'Playfair Display', serif" }}
                >
                  "परम्परा हाम्रो, सौन्दर्य तपाईंको"
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Our tradition, your beauty — visit us and experience the difference!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
