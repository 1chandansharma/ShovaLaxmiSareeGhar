/*
  Gallery component
  ─────────────────
  • Uses a simple, responsive CSS grid that works at every breakpoint.
  • Currently shows Pexels placeholder images. When you add your own
    images to /public/images/, update the `galleryImages` array:
      src: "/images/your-photo.jpg"
    The placeholder tiles will swap in automatically; the layout and
    hover effects stay identical.
  • Featured tiles (large) are marked with featured: true — they span
    2 columns on md+ screens, giving a magazine-style masonry feel.
*/

const galleryImages: {
  src: string;
  alt: string;
  label: string;
  featured?: boolean;
  placeholder?: boolean;
}[] = [
  {
    src: "https://images.pexels.com/photos/9345930/pexels-photo-9345930.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    alt: "Red Silk Saree",
    label: "Silk Saree",
    featured: true,
  },
  {
    src: "https://images.pexels.com/photos/7920055/pexels-photo-7920055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    alt: "Traditional Saree",
    label: "Traditional Wear",
  },
  {
    src: "https://images.pexels.com/photos/12850133/pexels-photo-12850133.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    alt: "Fashion Saree",
    label: "Festival Saree",
  },
  {
    src: "https://images.pexels.com/photos/8750027/pexels-photo-8750027.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    alt: "Women in Saree",
    label: "Festive Collection",
  },
  {
    src: "https://images.pexels.com/photos/35445207/pexels-photo-35445207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=600",
    alt: "Designer Kurta",
    label: "Designer Kurta",
  },
  {
    src: "https://images.pexels.com/photos/17503287/pexels-photo-17503287.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900",
    alt: "Ethnic Wear",
    label: "Ethnic Collection",
    featured: true,
  },
  /* ── Placeholder slots ────────────────────────────────────────
     Replace these with your own images later:
       src: "/images/your-photo.jpg"
     Until then they render as a shimmer tile with a "Coming soon"
     prompt so the layout looks intentional, not broken.
  ──────────────────────────────────────────────────────────── */
  {
    src: "",
    alt: "Your store photo",
    label: "Store Photo",
    placeholder: true,
  },
  {
    src: "",
    alt: "Your store photo",
    label: "Our Collection",
    placeholder: true,
  },
];

function PlaceholderTile({ label }: { label: string }) {
  return (
    <div className="relative w-full h-full gallery-placeholder flex flex-col items-center justify-center gap-3 rounded-2xl">
      {/* Mandala ornament */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center border-2 opacity-60"
        style={{
          borderColor: "#C9A84C",
          background: "rgba(201,168,76,0.12)",
        }}
      >
        <span className="text-2xl" style={{ color: "#C9A84C" }}>🪷</span>
      </div>
      <div className="text-center px-4">
        <p
          className="text-xs font-semibold"
          style={{ color: "#8B0000", fontFamily: "'Playfair Display', serif" }}
        >
          {label}
        </p>
        <p className="text-xs mt-1" style={{ color: "#A8832A" }}>
          Photo coming soon
        </p>
      </div>
      {/* Gold corner accents */}
      <div
        className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 rounded-tl-sm"
        style={{ borderColor: "#C9A84C" }}
      />
      <div
        className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 rounded-tr-sm"
        style={{ borderColor: "#C9A84C" }}
      />
      <div
        className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 rounded-bl-sm"
        style={{ borderColor: "#C9A84C" }}
      />
      <div
        className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 rounded-br-sm"
        style={{ borderColor: "#C9A84C" }}
      />
    </div>
  );
}

function GalleryTile({
  item,
}: {
  item: (typeof galleryImages)[0];
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-md ${
        item.featured ? "md:col-span-2" : ""
      }`}
      style={{ minHeight: "220px" }}
    >
      {item.placeholder || !item.src ? (
        <PlaceholderTile label={item.label} />
      ) : (
        <>
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            style={{ minHeight: "220px", display: "block" }}
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-5"
            style={{
              background:
                "linear-gradient(to top, rgba(139,0,0,0.88) 0%, transparent 55%)",
            }}
          >
            <p
              className="text-white font-semibold text-sm"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {item.label}
            </p>
            <div className="mt-1 w-8 h-0.5" style={{ background: "#C9A84C" }} />
          </div>
          {/* Corner badge */}
          <div
            className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md"
            style={{ background: "#C9A84C", color: "#8B0000" }}
          >
            ❁
          </div>
        </>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28" style={{ backgroundColor: "#F5E6CE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.25em] mb-3" style={{ color: "#C9A84C" }}>
            ✦ Visual Showcase ✦
          </p>
          <h2 className="section-title">Our Gallery</h2>
          <div className="gold-divider mt-3">
            <div className="gold-line" />
            <span className="gold-diamond text-2xl">❂</span>
            <div className="gold-line" />
          </div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base mt-2">
            A glimpse of the beauty, color, and elegance that awaits you at Shova Laxmi Saree Ghar.
          </p>
        </div>

        {/*
          Responsive grid:
          - mobile  (1 col): everything stacks, fixed row height
          - tablet  (2 col): featured spans 2
          - desktop (3 col): featured spans 2, normal tiles fill gaps
        */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          style={{ gridAutoRows: "240px" }}
        >
          {galleryImages.map((img, i) => (
            <GalleryTile key={i} item={img} />
          ))}
        </div>

        {/* Note about adding real photos */}
        <div
          className="mt-6 px-5 py-3 rounded-xl text-center text-sm inline-flex items-center gap-2 mx-auto table"
          style={{
            background: "rgba(201,168,76,0.12)",
            border: "1px dashed rgba(201,168,76,0.5)",
            color: "#A8832A",
          }}
        >
          <span>📸</span>
          <span>
            Drop your photos in <code className="font-mono text-xs">public/images/</code> and update the Gallery component to show your store.
          </span>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-4">
            Visit our store to explore our complete collection of traditional and fancy sarees.
          </p>
          <a href="#contact" className="inline-block btn-primary text-sm">
            Visit Us Today 🏪
          </a>
        </div>
      </div>
    </section>
  );
}
