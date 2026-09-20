import { useState, useEffect } from "react";

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { label: "Home",        href: "#home" },
  { label: "About",       href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Why Us",      href: "#whyus" },
  { label: "Gallery",     href: "#gallery" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar({ scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* Track active section for nav underline */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Close menu on any link click */
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500`}
      style={{
        top: "var(--announcement-h)",
        background: scrolled
          ? "linear-gradient(135deg, #6B0000 0%, #8B0000 60%, #5a2d0c 100%)"
          : "transparent",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Top gold accent — only visible when scrolled */}
      {scrolled && (
        <div
          className="h-0.5 w-full"
          style={{ background: "linear-gradient(90deg, #C9A84C, #E2C27D, #C9A84C)" }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo + Brand ──────────────────────────────────── */}
          <a
            href="#home"
            className="flex items-center gap-3 group flex-shrink-0"
            onClick={closeMenu}
          >
            {/* Logo circle — fixed size, centred image */}
            <div
              className="relative flex-shrink-0 w-11 h-11 md:w-13 md:h-13 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105"
              style={{
                border: "2px solid #C9A84C",
                minWidth: "44px",
                minHeight: "44px",
              }}
            >
              <img
                src="/logo.png"
                alt="Shova Laxmi Saree Ghar Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.style.background = "linear-gradient(135deg,#8B0000,#C9A84C)";
                    parent.innerHTML = `<span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:1.4rem;">🪷</span>`;
                  }
                }}
              />
            </div>

            {/* Brand text — never wraps */}
            <div className="leading-tight min-w-0">
              <p
                className="text-xs font-semibold tracking-widest hidden sm:block truncate"
                style={{ color: "#C9A84C" }}
              >
                शोभा लक्ष्मी
              </p>
              <h1
                className="font-bold text-white text-sm md:text-base leading-tight whitespace-nowrap"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Shova Laxmi Saree Ghar
              </h1>
              <p className="text-xs hidden sm:block whitespace-nowrap" style={{ color: "#E2C27D" }}>
                Traditional &amp; Fancy Sarees
              </p>
            </div>
          </a>

          {/* ── Desktop Nav ───────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link px-3 py-2 text-sm font-medium text-white hover:text-yellow-300 transition-colors duration-200 ${
                  activeSection === link.href.slice(1) ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9705970521"
              className="ml-3 btn-gold text-sm px-4 py-2 whitespace-nowrap"
            >
              📞 Call Us
            </a>
          </nav>

          {/* ── Mobile Hamburger ──────────────────────────────── */}
          <button
            className="md:hidden p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ───────────────────────────────────── */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(160deg, #6B0000 0%, #8B0000 100%)",
          borderTop: "1px solid rgba(201,168,76,0.3)",
        }}
      >
        <div className="px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={`flex items-center gap-3 px-4 py-3 text-white font-medium rounded-xl hover:bg-white/10 transition-colors duration-200 ${
                activeSection === link.href.slice(1) ? "bg-white/10" : ""
              }`}
            >
              <span
                className="w-1 h-5 rounded-full flex-shrink-0"
                style={{
                  background:
                    activeSection === link.href.slice(1)
                      ? "#C9A84C"
                      : "rgba(201,168,76,0.4)",
                }}
              />
              {link.label}
            </a>
          ))}
          <a
            href="tel:9705970521"
            onClick={closeMenu}
            className="block text-center btn-gold mt-3 text-sm"
          >
            📞 Call Now: 9705970521
          </a>
        </div>
      </div>
    </header>
  );
}
