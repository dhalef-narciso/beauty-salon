import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Instagram,
  Facebook,
  Sparkles,
  Clock,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkle,
  Eye,
  Gem,
  Heart,
  Check,
} from "lucide-react";

import heroImg from "@/assets/hero-nails.jpg";
import specialistImg from "@/assets/specialist.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { SALON_CONFIG, type SalonService } from "@/data/salon";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "NailSalon"],
  name: SALON_CONFIG.name,
  image: "https://www.google.com/maps?cid=15724340356351169961",
  telephone: SALON_CONFIG.contact.phoneDisplay,
  email: SALON_CONFIG.contact.email,
  priceRange: "€€",
  url: "/",
  description: SALON_CONFIG.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "04 Barrack Street",
    addressLocality: "Ennis",
    addressRegion: "Co. Clare",
    postalCode: "V95 VNE4",
    addressCountry: "IE",
  },
  sameAs: [
    SALON_CONFIG.contact.instagram,
    SALON_CONFIG.contact.facebook,
    SALON_CONFIG.contact.mapsUrl,
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: `${SALON_CONFIG.name} | Professional Nails & Eyebrow Studio`,
      },
      {
        name: "description",
        content: `${SALON_CONFIG.subheadline} Specialising in Classic Manicures, Gel Polish, BIAB Builder Gel, Nail Extensions, Nail Art, Brow Shaping, Brow Tinting, and Brow Lamination.`,
      },
      {
        property: "og:title",
        content: `${SALON_CONFIG.name} | Nails & Eyebrow Studio`,
      },
      {
        property: "og:description",
        content: SALON_CONFIG.description,
      },
      { property: "og:type", content: "business.business" },
      { property: "og:locale", content: "en_IE" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
});

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_ICONS: Record<string, typeof Sparkles> = {
  "classic-manicure": Sparkles,
  "gel-polish": Gem,
  "biab-builder-gel": ShieldCheck,
  "nail-extensions": Sparkles,
  "nail-art": Sparkle,
  "eyebrow-shaping": Eye,
  "eyebrow-tinting": Sparkles,
  "brow-lamination": Eye,
};

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Nails" | "Brows">("All");
  const [sent, setSent] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [errors, setErrors] = useState<{ name?: string; contact?: string; message?: string }>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSelectService(serviceTitle: string) {
    setSelectedService(serviceTitle);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const contact = String(form.get("contact") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const next: { name?: string; contact?: string; message?: string } = {};

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^([^\s@]+@[^\s@]+\.[^\s@]+|[+\d][\d\s()-]{6,})$/.test(contact)) {
      next.contact = "Please provide a valid email address or phone number.";
    }
    if (message.length < 5) {
      next.message = "Please provide your preferred appointment date or any special requests.";
    }

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
      setSelectedService("");
    }
  }

  const filteredServices =
    selectedCategory === "All"
      ? SALON_CONFIG.services
      : SALON_CONFIG.services.filter((s) => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/25 selection:text-mocha">
      {/* 1. HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/80 bg-background/95 shadow-xs backdrop-blur-md"
            : "bg-gradient-to-b from-background/95 via-background/80 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          {/* Studio Brand Monogram & Name */}
          <a
            href="#top"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label={`${SALON_CONFIG.name} Home`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-surface shadow-xs transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-lg font-semibold text-gold">L</span>
            </div>
            <div className="leading-tight">
              <span className="block font-serif text-2xl font-bold tracking-wide text-mocha">
                {SALON_CONFIG.shortName}
              </span>
              <span className="block text-[0.68rem] font-bold tracking-[0.25em] text-taupe uppercase">
                Nails & Brows Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium tracking-wide text-mocha/85 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-mocha px-6 text-xs font-bold tracking-wider text-cream shadow-xs transition-all duration-200 hover:bg-mocha-deep hover:shadow-md hover:-translate-y-0.5"
            >
              Book an Appointment
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open mobile navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-mocha transition-colors hover:bg-nude lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-60 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-mocha/40 backdrop-blur-xs transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          aria-label="Mobile Navigation"
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col border-l border-border bg-background p-6 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border/80 pb-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-surface shadow-xs">
                <span className="font-serif text-base font-semibold text-gold">L</span>
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-mocha">
                  {SALON_CONFIG.shortName}
                </span>
                <span className="block text-[0.65rem] font-bold tracking-widest text-taupe uppercase">
                  Nails & Brows
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-mocha hover:bg-surface"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-3 font-serif text-2xl font-semibold text-mocha transition-colors hover:bg-blush hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-border/80">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-mocha px-5 font-bold text-cream shadow-xs transition-colors hover:bg-mocha-deep"
            >
              Book an Appointment
            </a>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${SALON_CONFIG.contact.phoneTel}`}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-border bg-surface text-xs font-bold text-mocha hover:bg-nude-light"
              >
                <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> Call
              </a>
              <a
                href={SALON_CONFIG.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-border bg-surface text-xs font-bold text-mocha hover:bg-nude-light"
              >
                <MessageCircle className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>

      <main id="top">
        {/* 2. HERO SECTION */}
        <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-20">
          <img
            src={heroImg}
            alt="Delicate manicure and manicured hands resting gently with warm natural studio light"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Luminous warm cream & nude gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/92 to-background/40 md:from-background/98 md:via-background/88 md:to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />

          <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-10">
            <div className="max-w-2xl">
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-surface/85 px-4 py-1.5 backdrop-blur-xs shadow-xs">
                <Sparkle className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-wider text-mocha uppercase">
                  {SALON_CONFIG.badge}
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-5 text-fluid-hero font-semibold text-mocha">
                {SALON_CONFIG.tagline}
              </h1>

              {/* Subheadline */}
              <p className="mt-5 text-lg sm:text-xl font-normal leading-relaxed text-taupe">
                {SALON_CONFIG.subheadline}
              </p>

              {/* Call to Actions */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mocha px-8 text-sm font-bold tracking-wide text-cream shadow-xs transition-all hover:bg-mocha-deep hover:shadow-md hover:-translate-y-0.5"
                >
                  Book Your Appointment{" "}
                  <ArrowRight className="h-4 w-4 text-gold" aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface/90 px-7 text-sm font-bold tracking-wide text-mocha backdrop-blur-xs transition-colors hover:border-gold hover:bg-blush"
                >
                  Explore Our Services
                </a>
              </div>

              {/* Discreet Phone / WhatsApp Option */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-taupe">
                <span>Call or Message:</span>
                <a
                  href={`tel:${SALON_CONFIG.contact.phoneTel}`}
                  className="inline-flex items-center gap-1.5 font-bold text-mocha hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {SALON_CONFIG.contact.phoneDisplay}
                </a>
                <span className="text-border" aria-hidden="true">
                  •
                </span>
                <a
                  href={SALON_CONFIG.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-mocha hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SERVIÇOS (SERVICES) */}
        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">OUR TREATMENTS</p>
            <h2 className="mt-3 text-fluid-section font-semibold text-mocha">
              Curated Nails & Brow Services
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-taupe font-normal">
              Specialized manicures, structured builder gel overlays, and bespoke brow styling
              designed to elevate your daily beauty with effortless sophistication.
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-8 inline-flex rounded-full border border-border bg-surface-2 p-1.5 shadow-xs">
              {(["All", "Nails", "Brows"] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-6 py-2 text-xs font-bold tracking-wider transition-all duration-200 uppercase ${
                    selectedCategory === cat
                      ? "bg-mocha text-cream shadow-xs"
                      : "text-taupe hover:text-mocha"
                  }`}
                >
                  {cat === "All" ? "All Services" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredServices.map((service: SalonService) => {
              const Icon = SERVICE_ICONS[service.id] || Sparkles;
              return (
                <article
                  key={service.id}
                  className="card-craft group flex flex-col justify-between p-7"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-blush text-mocha transition-colors group-hover:bg-nude">
                        <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[0.68rem] font-bold tracking-wider text-taupe uppercase">
                          {service.category}
                        </span>
                        {service.tag && (
                          <span className="rounded-full bg-nude px-2.5 py-0.5 text-[0.65rem] font-bold tracking-wider text-mocha uppercase">
                            {service.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-bold text-mocha">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-taupe font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-border/70 pt-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[0.7rem] font-semibold text-taupe uppercase tracking-wider">
                          Price
                        </span>
                        <p className="font-serif text-xl font-bold text-mocha">{service.price}</p>
                      </div>
                      <span className="text-xs font-medium text-taupe">{service.duration}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectService(service.title)}
                      className="mt-4 inline-flex w-full min-h-10 items-center justify-center gap-1.5 rounded-full border border-gold/50 bg-surface px-4 text-xs font-bold tracking-wider text-mocha uppercase transition-all duration-200 hover:bg-mocha hover:text-cream hover:border-mocha"
                    >
                      Book Now
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs sm:text-sm font-medium text-taupe">
              * High-hygiene protocol guaranteed: all implements are individually sterilised in
              hospital-grade autoclaves.
            </p>
          </div>
        </section>

        {/* 4. SEÇÃO DE DESTAQUE (FEATURE SECTION: "Beauty is in the details.") */}
        <section className="border-y border-border bg-surface-2/80 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">OUR PHILOSOPHY</p>
              <h2 className="mt-3 text-fluid-section font-semibold text-mocha">
                {SALON_CONFIG.featuredSection.headline}
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-taupe font-normal">
                {SALON_CONFIG.featuredSection.description}
              </p>
            </div>

            {/* 3 Pillars / Differentiators */}
            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {SALON_CONFIG.featuredSection.differentiators.map((diff, idx) => {
                const DiffIcon = [Heart, Gem, Sparkles][idx] || Sparkles;
                return (
                  <div
                    key={diff.title}
                    className="flex flex-col items-center text-center rounded-2xl border border-border/80 bg-surface p-8 shadow-xs transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blush text-mocha">
                      <DiffIcon className="h-6 w-6 text-gold" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-bold text-mocha">{diff.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-taupe font-normal">
                      {diff.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. GALERIA (GALLERY) */}
        <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">PORTFOLIO</p>
              <h2 className="mt-3 text-fluid-section font-semibold text-mocha">
                Artistry & Real Results
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-taupe font-normal">
                Authentic glimpses of our everyday work: precision cuticle preparation, glossy
                structured BIAB, delicate micro French lines, and fluffy brow lamination.
              </p>
            </div>
            <div>
              <a
                href={SALON_CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/50 bg-surface px-6 text-xs font-bold tracking-wider text-mocha transition-colors hover:bg-mocha hover:text-cream hover:border-mocha uppercase"
              >
                <Instagram className="h-4 w-4 text-gold" aria-hidden="true" />
                View More on Instagram
              </a>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: gallery1,
                title: "Classic & Natural Nails",
                subtitle: "Almond shaping & nude gloss finish",
                alt: "Immaculate classic manicure with nude glossy almond shaped nails",
              },
              {
                src: gallery2,
                title: "BIAB Builder Gel",
                subtitle: "Natural overlay with micro French tips",
                alt: "Builder gel BIAB nails with delicate minimalist French tip line",
              },
              {
                src: gallery3,
                title: "Minimalist Nail Art",
                subtitle: "Hand-painted fine lines & subtle gold leaf",
                alt: "Nude nails with delicate white abstract lines and subtle gold foil accents",
              },
              {
                src: gallery4,
                title: "Brow Lamination & Shaping",
                subtitle: "Feathered fluff, symmetry & custom tint",
                alt: "Naturally defined, fluffy, laminated and tinted eyebrows with glowing skin",
              },
            ].map((img, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-xs transition-all duration-500 hover:shadow-md hover:-translate-y-1"
              >
                <div className="aspect-[3/4] overflow-hidden bg-nude-light">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-104"
                  />
                </div>
                <figcaption className="p-5 bg-surface">
                  <h4 className="font-serif text-lg font-bold text-mocha">{img.title}</h4>
                  <p className="text-xs font-medium text-taupe mt-1">{img.subtitle}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 6. SOBRE A PROFISSIONAL (ABOUT THE SPECIALIST) */}
        <section id="about" className="border-y border-border bg-surface-2/80 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-10">
            <div>
              <p className="eyebrow">ABOUT THE ARTIST</p>
              <h2 className="mt-3 text-fluid-section font-semibold text-mocha">
                {SALON_CONFIG.specialist.title}
              </h2>
              <p className="mt-1 font-serif text-xl font-medium text-gold">
                {SALON_CONFIG.specialist.name} · {SALON_CONFIG.specialist.role}
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-taupe font-normal">
                {SALON_CONFIG.specialist.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Specialist Quality Standards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-border/80 pt-6">
                {SALON_CONFIG.specialist.features.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush text-gold">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold text-mocha">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialist Portrait */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border shadow-md bg-surface">
                <img
                  src={specialistImg}
                  alt={`Portrait of ${SALON_CONFIG.specialist.name}, beauty specialist in her studio`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full max-h-[36rem] w-full object-cover transition-transform duration-700 hover:scale-102"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden sm:block max-w-xs rounded-2xl border border-border bg-surface p-5 shadow-lg">
                <p className="font-serif text-sm italic font-medium text-mocha">
                  "{SALON_CONFIG.specialist.quote}"
                </p>
                <p className="mt-2 text-[0.7rem] font-bold text-gold uppercase tracking-wider">
                  — {SALON_CONFIG.specialist.name}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. DEPOIMENTOS (TESTIMONIALS) */}
        <section id="reviews" className="mx-auto max-w-6xl px-5 py-24 text-center lg:py-32">
          <p className="eyebrow">CLIENT LOVE</p>
          <h2 className="mt-3 text-fluid-section font-semibold text-mocha">
            What Our Clients Say
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-base text-taupe font-normal">
            Real feedback from clients who appreciate precise craftsmanship, meticulous hygiene,
            and enduring beauty.
          </p>

          {/* Testimonials Grid */}
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {SALON_CONFIG.reviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl border border-border bg-surface p-7 shadow-xs flex flex-col justify-between transition-all duration-300 hover:border-gold/60"
              >
                <div>
                  <div className="flex gap-1" aria-label={`${rev.rating} out of 5 stars`}>
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="mt-4 inline-block rounded-full bg-blush px-2.5 py-0.5 text-[0.68rem] font-bold text-mocha uppercase tracking-wider">
                    {rev.service}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-mocha/90 font-normal italic">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="mt-6 border-t border-border/70 pt-3 flex items-center justify-between">
                  <p className="font-serif text-base font-bold text-mocha">{rev.author}</p>
                  <p className="text-xs font-medium text-taupe">{rev.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={SALON_CONFIG.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-7 text-xs font-bold tracking-wider text-mocha transition-colors hover:border-gold hover:bg-surface-2 uppercase"
            >
              View Location & Reviews on Google Maps
            </a>
          </div>
        </section>

        {/* 8. CHAMADA PARA AGENDAMENTO (CTA: "Ready for your next beauty moment?") */}
        <section className="relative overflow-hidden bg-mocha py-24 text-cream">
          <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-10">
            <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              BESPOKE APPOINTMENTS
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-cream sm:text-4xl lg:text-5xl">
              Ready for your next beauty moment?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-cream/85 font-normal leading-relaxed">
              Book your appointment and enjoy a treatment created especially for you.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-8 text-sm font-bold tracking-wider text-mocha-deep shadow-xs transition-all duration-200 hover:bg-gold-light hover:shadow-md hover:-translate-y-0.5 uppercase"
              >
                Book Now
              </a>
              <a
                href={SALON_CONFIG.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/40 px-8 text-sm font-bold tracking-wider text-cream transition-colors hover:bg-cream/10 uppercase"
              >
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 9. INFORMAÇÕES E CONTATO (CONTACT & BOOKING) */}
        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Studio Information & Map */}
            <div>
              <p className="eyebrow">VISIT & CONNECT</p>
              <h2 className="mt-3 text-fluid-section font-semibold text-mocha">
                Studio Location & Hours
              </h2>
              <p className="mt-4 text-base leading-relaxed text-taupe font-normal">
                To request an appointment, please complete the form or reach out directly on
                WhatsApp. We look forward to welcoming you into our serene space.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-mocha">
                    <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-mocha">Studio Address</h3>
                    <address className="mt-1 text-sm sm:text-base not-italic text-taupe font-medium">
                      {SALON_CONFIG.contact.address}
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-mocha">
                    <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-serif text-lg font-bold text-mocha">Opening Hours</h3>
                    <div className="mt-2 space-y-1.5 text-sm">
                      {SALON_CONFIG.hours.map((h) => (
                        <div
                          key={h.days}
                          className="flex justify-between max-w-xs text-taupe font-medium"
                        >
                          <span>{h.days}</span>
                          <span className="font-bold text-mocha">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-mocha">
                    <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-mocha">Phone & WhatsApp</h3>
                    <p className="mt-1 text-sm sm:text-base text-taupe">
                      <a
                        href={`tel:${SALON_CONFIG.contact.phoneTel}`}
                        className="font-bold text-mocha hover:text-gold"
                      >
                        {SALON_CONFIG.contact.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush text-mocha">
                    <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-mocha">Email Enquiries</h3>
                    <p className="mt-1 text-sm sm:text-base text-taupe">
                      <a
                        href={`mailto:${SALON_CONFIG.contact.email}`}
                        className="font-semibold text-mocha hover:text-gold"
                      >
                        {SALON_CONFIG.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-xs">
                <iframe
                  title={`Map showing ${SALON_CONFIG.name} location`}
                  src={SALON_CONFIG.contact.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full border-0"
                />
              </div>
            </div>

            {/* Appointment Request Form */}
            <div className="card-craft p-8 sm:p-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-mocha">
                Request an Appointment
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe font-medium">
                Fill in your details and preferred treatment. We will contact you promptly to
                confirm your time.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-mocha uppercase tracking-wider"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="e.g. Clara Dupont"
                    className="mt-2 min-h-12 w-full rounded-xl border border-input bg-surface-2/60 px-4 text-base font-medium text-foreground outline-none transition-colors focus:border-gold focus:bg-surface"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-xs font-bold text-mocha uppercase tracking-wider"
                  >
                    Email or WhatsApp Number *
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    autoComplete="email"
                    required
                    placeholder="e.g. clara@example.com or 087 123 4567"
                    className="mt-2 min-h-12 w-full rounded-xl border border-input bg-surface-2/60 px-4 text-base font-medium text-foreground outline-none transition-colors focus:border-gold focus:bg-surface"
                  />
                  {errors.contact && (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">
                      {errors.contact}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-bold text-mocha uppercase tracking-wider"
                  >
                    Treatment Desired
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="mt-2 min-h-12 w-full rounded-xl border border-input bg-surface-2/60 px-4 text-base font-medium text-foreground outline-none transition-colors focus:border-gold focus:bg-surface"
                  >
                    <option value="">-- Select a treatment (Optional) --</option>
                    <optgroup label="Nail Treatments">
                      {SALON_CONFIG.services
                        .filter((s) => s.category === "Nails")
                        .map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.price})
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Eyebrow Treatments">
                      {SALON_CONFIG.services
                        .filter((s) => s.category === "Brows")
                        .map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title} ({s.price})
                          </option>
                        ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-mocha uppercase tracking-wider"
                  >
                    Preferred Date, Time or Notes *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Let us know your preferred day of the week, morning or afternoon, or any specific nail/brow details..."
                    className="mt-2 w-full rounded-xl border border-input bg-surface-2/60 p-4 text-base font-medium text-foreground outline-none transition-colors focus:border-gold focus:bg-surface"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-mocha px-8 text-sm font-bold tracking-wider text-cream shadow-xs transition-all hover:bg-mocha-deep hover:shadow-md hover:-translate-y-0.5 uppercase"
                >
                  Send Booking Request
                </button>

                {sent && (
                  <div
                    role="status"
                    className="rounded-xl border border-gold/40 bg-blush p-4 text-sm font-medium text-mocha flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <p>
                      Thank you! Your request has been received. Elena will contact you shortly to
                      confirm your appointment slot.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 pb-28 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:pb-14">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-surface shadow-xs">
                <span className="font-serif text-base font-semibold text-gold">L</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-mocha">
                {SALON_CONFIG.shortName}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-taupe">
              {SALON_CONFIG.contact.address}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold">
              <a
                href={`tel:${SALON_CONFIG.contact.phoneTel}`}
                className="text-mocha hover:text-gold"
              >
                {SALON_CONFIG.contact.phoneDisplay}
              </a>
              <span className="text-border">•</span>
              <a
                href={`mailto:${SALON_CONFIG.contact.email}`}
                className="text-mocha hover:text-gold"
              >
                {SALON_CONFIG.contact.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-6 text-sm font-semibold text-taupe"
            >
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="transition-colors hover:text-gold">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              <a
                href={SALON_CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SALON_CONFIG.name} on Instagram`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-mocha transition-colors hover:border-gold hover:bg-blush"
              >
                <Instagram className="h-4 w-4 text-gold" aria-hidden="true" />
              </a>
              <a
                href={SALON_CONFIG.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SALON_CONFIG.name} on Facebook`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-mocha transition-colors hover:border-gold hover:bg-blush"
              >
                <Facebook className="h-4 w-4 text-gold" aria-hidden="true" />
              </a>
              <a
                href={SALON_CONFIG.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SALON_CONFIG.name} on Google Maps`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-mocha transition-colors hover:border-gold hover:bg-blush"
              >
                <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/80 px-5 py-6 text-center text-xs font-semibold text-taupe">
          © {new Date().getFullYear()} {SALON_CONFIG.name}. All rights reserved. Professional Nails
          & Eyebrows Studio.
        </div>
      </footer>

      {/* STICKY MOBILE ACTION BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-surface/95 p-2.5 gap-2.5 shadow-lg backdrop-blur-md lg:hidden">
        <a
          href="#contact"
          className="flex min-h-12 items-center justify-center rounded-full bg-mocha font-bold text-xs tracking-wider text-cream shadow-xs uppercase"
        >
          Book Appointment
        </a>
        <a
          href={SALON_CONFIG.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-1.5 rounded-full border border-gold/60 bg-surface font-bold text-xs tracking-wider text-mocha shadow-xs uppercase"
        >
          <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
