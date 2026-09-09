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
  Scissors,
  Sparkles,
  Droplets,
  Palette,
  Crown,
  HeartHandshake,
  Clock,
  CheckCircle2,
  Mail,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkle,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/craft.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { SALON_CONFIG, type SalonService } from "@/data/salon";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "HairSalon"],
  name: SALON_CONFIG.name,
  image: "https://www.google.com/maps?cid=15724340356351169961",
  telephone: SALON_CONFIG.contact.phoneDisplay,
  email: SALON_CONFIG.contact.email,
  priceRange: "€€",
  url: "/",
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
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
        title: `${SALON_CONFIG.name} | Hair & Beauty Salon in Ennis, Co. Clare`,
      },
      {
        name: "description",
        content: `Discover professional sculptured cuts, contoured colour, balayage, blow-dries and occasion styling at ${SALON_CONFIG.name} in Ennis, County Clare. In business for 29 years.`,
      },
      {
        property: "og:title",
        content: `${SALON_CONFIG.name} | Hair & Beauty Salon in Ennis, Co. Clare`,
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
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_ICONS: Record<string, typeof Scissors> = {
  "cut-blowdry": Scissors,
  "hair-colour": Palette,
  "highlights-balayage": Sparkles,
  "blow-dry-styling": Sparkles,
  "hair-treatments": Droplets,
  "bridal-occasion": Crown,
};

const BENEFIT_ICONS = [Award, HeartHandshake, Sparkle, ShieldCheck];

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    if (message.length < 8) {
      next.message = "Please share a brief note about your desired service or preferred date.";
    }

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
      setSelectedService("");
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/20 selection:text-plum">
      {/* HEADER & NAVIGATION */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/90 bg-background/95 shadow-sm backdrop-blur-md"
            : "bg-gradient-to-b from-background/95 via-background/70 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          {/* Authentic Instagram Logo Brand */}
          <a
            href="#top"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label={`${SALON_CONFIG.name} Home`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-white shadow-xs">
              <span className="font-serif text-xl font-bold text-gold">|</span>
            </div>
            <div className="leading-tight">
              <span className="block font-serif text-2xl font-bold tracking-wider text-plum">
                {SALON_CONFIG.shortName}
              </span>
              <span className="block text-[0.7rem] font-bold tracking-[0.25em] text-taupe uppercase">
                Hair Salon · Ennis
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold tracking-wide text-foreground transition-colors hover:text-plum"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-plum px-7 text-xs font-bold tracking-wider text-cream shadow-sm transition-all hover:bg-plum-deep hover:shadow-md hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open mobile navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-white text-plum transition-colors hover:bg-muted lg:hidden"
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
          className={`absolute inset-0 bg-plum/45 backdrop-blur-xs transition-opacity duration-300 ${
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
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-white shadow-xs">
                <span className="font-serif text-base font-bold text-gold">|</span>
              </div>
              <span className="font-serif text-xl font-bold text-plum">
                {SALON_CONFIG.shortName}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-white"
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
                className="rounded-lg px-3 py-3.5 font-serif text-2xl font-semibold text-foreground transition-colors hover:bg-blush/40 hover:text-plum"
              >
                {n.label}
              </a>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-border/80">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-plum px-5 font-bold text-cream transition-colors hover:bg-plum-deep"
            >
              Book Appointment
            </a>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${SALON_CONFIG.contact.phoneTel}`}
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-border bg-white text-xs font-bold text-plum hover:bg-cream"
              >
                <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> Call
              </a>
              <a
                href={SALON_CONFIG.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-border bg-white text-xs font-bold text-plum hover:bg-cream"
              >
                <MessageCircle className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>

      <main id="top">
        {/* HERO SECTION */}
        <section className="relative flex min-h-[94svh] items-center overflow-hidden pt-20">
          <img
            src={heroImg}
            alt="Bright and elegant salon interior with warm natural lighting and styling stations"
            width={1920}
            height={1080}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Enhanced forest & cream readability gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/92 to-background/50 md:from-background/98 md:via-background/90 md:to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />

          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-10">
            <div className="max-w-2xl bg-white/40 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none p-4 md:p-0 rounded-2xl">
              <p className="eyebrow">{SALON_CONFIG.eyebrow}</p>

              <h1 className="mt-4 text-fluid-hero font-semibold text-plum">
                {SALON_CONFIG.tagline}
              </h1>

              <p className="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-foreground">
                {SALON_CONFIG.description}
              </p>

              {/* Call to Actions */}
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-plum px-8 text-sm font-bold tracking-wide text-cream shadow-sm transition-all hover:bg-plum-deep hover:shadow-md hover:-translate-y-0.5"
                >
                  Book Your Appointment{" "}
                  <ArrowRight className="h-4 w-4 text-gold" aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-gold/70 bg-white/90 px-7 text-sm font-bold tracking-wide text-plum backdrop-blur-xs transition-colors hover:bg-gold hover:text-white hover:border-gold"
                >
                  Explore Our Services
                </a>
              </div>

              {/* Discreet Phone / WhatsApp Option */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-taupe">
                <span>Call or WhatsApp:</span>
                <a
                  href={`tel:${SALON_CONFIG.contact.phoneTel}`}
                  className="inline-flex items-center gap-1.5 font-bold text-plum hover:underline"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
                  {SALON_CONFIG.contact.phoneDisplay}
                </a>
                <span className="text-border" aria-hidden="true">
                  |
                </span>
                <a
                  href={SALON_CONFIG.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-plum hover:underline"
                >
                  <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                  Message via WhatsApp
                </a>
              </div>

              {/* Concise Trust Highlights */}
              <div className="mt-10 grid grid-cols-1 gap-4 border-t border-border/90 pt-8 sm:grid-cols-3">
                {SALON_CONFIG.trustHighlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-bold text-plum">{item.title}</p>
                      <p className="text-xs font-medium text-taupe mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow">OUR SERVICES</p>
            <h2 className="mt-3 text-fluid-section font-semibold text-plum">
              Everything Your Hair Deserves
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground font-normal">
              From sculptured cuts to contoured dimensional colour, discover hair services tailored
              to your style, texture and goals. Every appointment begins with professional advice.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SALON_CONFIG.services.map((service: SalonService) => {
              const Icon = SERVICE_ICONS[service.id] || Sparkles;
              return (
                <article
                  key={service.id}
                  className="card-craft group flex flex-col justify-between p-8"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-blush/30 text-plum transition-colors group-hover:bg-blush/60">
                        <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                      </div>
                      {service.tag && (
                        <span className="rounded-full bg-blush px-3.5 py-1 text-xs font-bold tracking-wider text-plum uppercase">
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-6 font-serif text-2xl font-semibold text-plum">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-taupe font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-border/80 pt-5">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs font-semibold text-taupe uppercase tracking-wider">
                          Pricing
                        </span>
                        <p className="font-serif text-xl font-bold text-plum">{service.price}</p>
                      </div>
                      <span className="text-xs font-semibold text-taupe">{service.duration}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleSelectService(service.title)}
                      className="mt-5 inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-full border border-gold/60 bg-cream px-4 text-xs font-bold tracking-wider text-plum uppercase transition-colors hover:bg-plum hover:text-cream hover:border-plum"
                    >
                      Book This Service
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs sm:text-sm font-medium text-taupe">
              * Colour and balayage services require a patch test at least 48 hours prior to your
              first appointment.
            </p>
          </div>
        </section>

        {/* ABOUT / THE SALON & 29 YEARS HERITAGE */}
        <section id="about" className="border-y border-border bg-surface-2/70">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-32">
            <div>
              <p className="eyebrow">ABOUT TWIN BLADES</p>
              <h2 className="mt-3 text-fluid-section font-semibold text-plum">
                Celebrating Nearly 29 Years in Ennis
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground font-normal">
                At {SALON_CONFIG.shortName}, we are proud to have served the wonderful County Clare
                community for nearly twenty-nine years. Voted among the top five hair salons in
                Clare, our craft is built on genuine listening, expert advice, and tailored
                hairdressing.
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground font-normal">
                From everyday precision maintenance to complete contoured colour transformations,
                our welcoming salon on Barrack Street is designed to be your sanctuary of
                relaxation. We also offer a dedicated, quiet **Beauty Room** on our private floor.
              </p>

              {/* 4 Pillars of "Why Choose Us" */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2 border-t border-border/90 pt-8">
                {SALON_CONFIG.whyChooseUs.map((item, idx) => {
                  const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
                  return (
                    <div key={item.title} className="flex gap-3.5">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blush/50 text-plum">
                        <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-bold text-plum">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-taupe font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stylist & Client Portrait */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border shadow-md">
                <img
                  src={aboutImg}
                  alt="Stylist consulting with a client in a warm salon setting"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full max-h-[38rem] w-full object-cover transition-transform duration-700 hover:scale-102"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden sm:block max-w-xs rounded-xl border border-border bg-white p-5 shadow-lg">
                <p className="font-serif text-base italic font-medium text-plum">
                  "Nearly 29 years of passion: sculptured cuts, contoured colour, and hair you love
                  wearing every single day."
                </p>
                <p className="mt-2 text-xs font-bold text-gold uppercase tracking-wider">
                  Twin Blades Team · Ennis, Clare
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">OUR WORK</p>
              <h2 className="mt-3 text-fluid-section font-semibold text-plum">
                Transformations & Styling
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground font-normal">
                A glimpse of recent client work crafted in our Ennis chairs — sculptured cuts,
                contoured colour, highlights, and occasion styling.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={SALON_CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-white px-5 text-xs font-bold text-plum transition-colors hover:border-gold hover:bg-cream"
              >
                <Instagram className="h-4 w-4 text-gold" aria-hidden="true" />
                Follow @twin.blades
              </a>
              <a
                href={SALON_CONFIG.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-white px-5 text-xs font-bold text-plum transition-colors hover:border-gold hover:bg-cream"
              >
                <Facebook className="h-4 w-4 text-gold" aria-hidden="true" />
                Facebook
              </a>
            </div>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: gallery1,
                title: "Sculptured Cut & Blow-Dry",
                subtitle: "Layered movement & soft caramel tones",
                alt: "Precision layered haircut with bouncy polished blow-dry",
              },
              {
                src: gallery2,
                title: "Contoured Colour & Balayage",
                subtitle: "Seamless golden dimensional blend",
                alt: "Multidimensional warm honey and blonde balayage with soft beach waves",
              },
              {
                src: gallery3,
                title: "Bridal & Occasion Styling",
                subtitle: "Romantic half-up styling with delicate accents",
                alt: "Romantic bridal half-up hairstyle with delicate twists and soft waves",
              },
              {
                src: gallery4,
                title: "Restorative Gloss Treatment",
                subtitle: "High-shine silk gloss & deep hydration",
                alt: "Silky, glossy chestnut brunette hair after a restorative hydration salon treatment",
              },
            ].map((img, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden rounded-xl border border-border bg-white shadow-xs transition-all duration-500 hover:shadow-md hover:-translate-y-1"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 bg-white">
                  <h4 className="font-serif text-lg font-bold text-plum">{img.title}</h4>
                  <p className="text-sm font-medium text-taupe mt-0.5">{img.subtitle}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* REVIEWS & TESTIMONIALS */}
        <section id="reviews" className="border-y border-border bg-surface-2/70">
          <div className="mx-auto max-w-5xl px-5 py-24 text-center lg:py-32">
            <p className="eyebrow">CLIENT LOVE</p>
            <h2 className="mt-3 text-fluid-section font-semibold text-plum">
              Loved by Our Local Community
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-base text-foreground font-normal">
              Voted among the top five hair salons in Clare with 29 years of dedicated service.
            </p>

            {/* Testimonials Grid */}
            <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
              {SALON_CONFIG.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="rounded-xl border border-border bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1" aria-label={`${rev.rating} out of 5 stars`}>
                      {[...Array(rev.rating)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="mt-4 text-xs font-bold text-gold uppercase tracking-wider">
                      {rev.service}
                    </p>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-foreground font-normal italic">
                      "{rev.comment}"
                    </p>
                  </div>
                  <div className="mt-6 border-t border-border/80 pt-3">
                    <p className="font-serif text-base font-bold text-plum">{rev.author}</p>
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
                className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-gold/60 bg-white px-8 text-xs font-bold tracking-wider text-plum transition-colors hover:bg-cream hover:border-plum"
              >
                View Location & Reviews on Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* READY FOR YOUR NEXT LOOK? CTA */}
        <section className="relative overflow-hidden bg-plum py-24 text-cream">
          <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-10">
            <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              YOUR PERSONAL CONSULTATION
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-cream sm:text-4xl lg:text-5xl">
              Ready for Your Next Look?
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-lg text-cream/90 font-normal leading-relaxed">
              Book your appointment and let our experienced stylists craft a sculptured cut and
              contoured colour designed around you.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-8 text-sm font-bold tracking-wide text-plum-deep shadow-sm transition-all hover:bg-gold-light hover:shadow-md hover:-translate-y-0.5"
              >
                Book Appointment
              </a>
              <a
                href={SALON_CONFIG.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-gold/70 px-8 text-sm font-bold tracking-wide text-cream transition-colors hover:bg-gold/20"
              >
                <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" />
                Call or WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT / VISIT / BOOKING FORM */}
        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Salon Details & Hours */}
            <div>
              <p className="eyebrow">VISIT & CONTACT</p>
              <h2 className="mt-3 text-fluid-section font-semibold text-plum">
                We Look Forward to Welcoming You
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground font-normal">
                To request an appointment, please complete the form below or contact us directly on
                phone or WhatsApp. We look forward to seeing you at 04 Barrack Street.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush/50 text-plum">
                    <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-plum">Salon Location</h3>
                    <address className="mt-1 text-sm sm:text-base not-italic text-foreground font-medium">
                      {SALON_CONFIG.contact.address}
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush/50 text-plum">
                    <Clock className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-serif text-lg font-bold text-plum">Opening Hours</h3>
                    <div className="mt-2 space-y-1.5 text-sm">
                      {SALON_CONFIG.hours.map((h) => (
                        <div
                          key={h.days}
                          className="flex justify-between max-w-xs text-taupe font-medium"
                        >
                          <span>{h.days}</span>
                          <span className="font-bold text-foreground">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush/50 text-plum">
                    <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-plum">Call or WhatsApp</h3>
                    <p className="mt-1 text-sm sm:text-base text-foreground">
                      <a
                        href={`tel:${SALON_CONFIG.contact.phoneTel}`}
                        className="font-bold text-plum hover:underline"
                      >
                        {SALON_CONFIG.contact.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush/50 text-plum">
                    <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-plum">Email Enquiries</h3>
                    <p className="mt-1 text-sm sm:text-base text-foreground">
                      <a
                        href={`mailto:${SALON_CONFIG.contact.email}`}
                        className="font-semibold text-plum hover:underline"
                      >
                        {SALON_CONFIG.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-xs">
                <iframe
                  title={`Map showing ${SALON_CONFIG.name} in Ennis, Co. Clare`}
                  src={SALON_CONFIG.contact.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full border-0"
                />
              </div>
            </div>

            {/* Appointment Request Form */}
            <div className="card-craft p-8 sm:p-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-plum">
                Request an Appointment
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-taupe font-medium">
                Fill in your details below and our team will get back to you promptly to confirm
                your preferred date and chair time.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-plum uppercase tracking-wider"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="e.g. Emma O'Connor"
                    className="mt-2 min-h-12 w-full rounded-lg border border-input bg-cream/50 px-4 text-base font-medium text-foreground outline-none transition-colors focus:border-plum focus:bg-white"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-xs font-bold text-plum uppercase tracking-wider"
                  >
                    Email or Phone Number *
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    autoComplete="email"
                    required
                    placeholder="e.g. emma@example.com or 087 123 4567"
                    className="mt-2 min-h-12 w-full rounded-lg border border-input bg-cream/50 px-4 text-base font-medium text-foreground outline-none transition-colors focus:border-plum focus:bg-white"
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
                    className="block text-xs font-bold text-plum uppercase tracking-wider"
                  >
                    Desired Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="mt-2 min-h-12 w-full rounded-lg border border-input bg-cream/50 px-4 text-base font-medium text-foreground outline-none transition-colors focus:border-plum focus:bg-white"
                  >
                    <option value="">-- Select a service (Optional) --</option>
                    {SALON_CONFIG.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-plum uppercase tracking-wider"
                  >
                    Preferred Date, Time or Notes *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Let us know your preferred day of the week, morning or afternoon, or any specific hair requests..."
                    className="mt-2 w-full rounded-lg border border-input bg-cream/50 p-4 text-base font-medium text-foreground outline-none transition-colors focus:border-plum focus:bg-white"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-semibold text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-plum px-8 text-sm font-bold tracking-wide text-cream shadow-sm transition-all hover:bg-plum-deep hover:shadow-md hover:-translate-y-0.5"
                >
                  Send Booking Request
                </button>

                {sent && (
                  <div
                    role="status"
                    className="rounded-lg border border-gold/40 bg-blush/35 p-4 text-sm font-medium text-plum flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <p>
                      Thank you! Your request has been received. Our team will contact you shortly
                      to confirm your appointment time.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 pb-28 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:pb-14">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-white shadow-xs">
                <span className="font-serif text-lg font-bold text-gold">|</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-plum">
                {SALON_CONFIG.shortName}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-taupe">
              {SALON_CONFIG.contact.address}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold">
              <a
                href={`tel:${SALON_CONFIG.contact.phoneTel}`}
                className="text-plum hover:underline"
              >
                {SALON_CONFIG.contact.phoneDisplay}
              </a>
              <span className="text-border">·</span>
              <a
                href={`mailto:${SALON_CONFIG.contact.email}`}
                className="text-plum hover:underline"
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
                <a key={n.href} href={n.href} className="transition-colors hover:text-plum">
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-plum transition-colors hover:border-gold hover:bg-cream"
              >
                <Instagram className="h-5 w-5 text-gold" aria-hidden="true" />
              </a>
              <a
                href={SALON_CONFIG.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SALON_CONFIG.name} on Facebook`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-plum transition-colors hover:border-gold hover:bg-cream"
              >
                <Facebook className="h-5 w-5 text-gold" aria-hidden="true" />
              </a>
              <a
                href={SALON_CONFIG.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SALON_CONFIG.name} on Google Maps`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-plum transition-colors hover:border-gold hover:bg-cream"
              >
                <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/80 px-5 py-6 text-center text-xs font-semibold text-taupe">
          © {new Date().getFullYear()} {SALON_CONFIG.name}, Ennis, Co. Clare. All rights reserved.
        </div>
      </footer>

      {/* STICKY MOBILE ACTION BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 p-2.5 gap-2.5 shadow-lg backdrop-blur-md lg:hidden">
        <a
          href="#contact"
          className="flex min-h-12 items-center justify-center rounded-full bg-plum font-bold text-xs tracking-wider text-cream shadow-xs uppercase"
        >
          Book Appointment
        </a>
        <a
          href={SALON_CONFIG.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-1.5 rounded-full border-2 border-gold/70 bg-white font-bold text-xs tracking-wider text-plum shadow-xs uppercase"
        >
          <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
