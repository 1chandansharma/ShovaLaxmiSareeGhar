import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collections from "./components/Collections";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* ── Announcement bar ──────────────────────────────────────── */
const MARQUEE_TEXT =
  "🪷 Welcome to Shova Laxmi Saree Ghar — Traditional & Fancy Sarees | Kurta | Ethnic Wear \u00a0✦\u00a0 Visit us at Bhadrapur-5, Nayabazar, Jhapa, Nepal \u00a0✦\u00a0 📞 Call: 9705970521 \u00a0✦\u00a0 ✉️ shovalaxmisareeghar@gmail.com \u00a0✦\u00a0 परम्परा हाम्रो, सौन्दर्य तपाईंको 🌸 \u00a0✦\u00a0 ";

function AnnouncementBar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] announcement-bar overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #8B0000, #A52020, #8B0000)",
        borderBottom: "1px solid #C9A84C",
      }}
    >
      {/* Two identical copies so the loop is seamless */}
      <div className="marquee-track text-xs font-medium" style={{ color: "#E2C27D" }}>
        <span>{MARQUEE_TEXT}</span>
        <span>{MARQUEE_TEXT}</span>
      </div>
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <AnnouncementBar />
      {/* Spacer matching announcement bar height (--announcement-h = 32px) */}
      <div style={{ height: "var(--announcement-h)" }} />
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Collections />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/9779705970521"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.524 5.847L.057 23.568a.75.75 0 00.974.946l5.9-1.895A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.814-.563-5.368-1.537l-.385-.235-3.996 1.284 1.243-3.88-.252-.4A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25c5.386 0 9.75 4.365 9.75 9.75 0 5.386-4.364 9.75-9.75 9.75z" />
        </svg>
      </a>
    </div>
  );
}
