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
  Navigation,
  Car,
  Clock,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import craftImg from "@/assets/craft.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const PHONE_DISPLAY = "+353 65 684 2660";
const PHONE_TEL = "+353656842660";
const WHATSAPP = "https://wa.me/353656842660";
const MAPS = "https://www.google.com/maps?cid=15724340356351169961";
const INSTAGRAM = "https://www.instagram.com/twin.blades?igsh=ejVscDFjMTk2a3k0";
const FACEBOOK = "https://www.facebook.com/brogansennis/mentions/";
const ADDRESS = "4 Barrack St, Clonroad Beg, Ennis, Co. Clare, V95 VNE4, Ireland";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Twin Blades",
  image: "https://www.google.com/maps?cid=15724340356351169961",
  telephone: PHONE_DISPLAY,
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Barrack St, Clonroad Beg",
    addressLocality: "Ennis",
    addressRegion: "Co. Clare",
    postalCode: "V95 VNE4",
    addressCountry: "IE",
  },
  sameAs: [INSTAGRAM, FACEBOOK, MAPS],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "33",
  },
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Twin Blades | Premier Barber in Ennis, Ireland" },
      {
        name: "description",
        content:
          "Discover Twin Blades in Ennis, Ireland. Top-rated Barber services. Contact us today at +353 65 684 2660.",
      },
      { property: "og:title", content: "Twin Blades | Premier Barber in Ennis, Ireland" },
      {
        property: "og:description",
        content:
          "Discover Twin Blades in Ennis, Ireland. Top-rated Barber services. Contact us today at +353 65 684 2660.",
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
  { label: "Services", href: "#services" },
  { label: "Craft", href: "#craft" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#location" },
];

const SERVICES = [
  {
    icon: Scissors,
    title: "Signature Cut",
    copy: "A consultation-led haircut finished with precise scissor and clipper work, styled to suit how you wear it day to day.",
  },
  {
    icon: Sparkles,
    title: "Skin Fade",
    copy: "Seamless graduation from skin to length, blended clean at the neckline and around the ears for a sharp finish.",
  },
  {
    icon: Droplets,
    title: "Beard Grooming",
    copy: "Shape, line-up and trim with hot towel prep, conditioning oils and a razor-clean outline.",
  },
  {
    icon: Droplets,
    title: "Hot Towel Shave",
    copy: "Traditional wet shave: steamed towels, rich lather, straight razor pass and a cooling balm finish.",
  },
  {
    icon: Scissors,
    title: "Cut & Beard Combo",
    copy: "The full reset — haircut and beard service in one appointment, styled and finished together.",
  },
  {
    icon: Sparkles,
    title: "Kids & Seniors Cut",
    copy: "Relaxed, unhurried chair time with the same attention to detail for younger and older clients.",
  },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const contact = String(form.get("contact") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^([^\s@]+@[^\s@]+\.[^\s@]+|[+\d][\d\s()-]{6,})$/.test(contact))
      next.contact = "Enter a valid email address or phone number.";
    if (message.length < 10) next.message = "Tell us a little more (10 characters minimum).";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-brass/60 text-brass">
              <Scissors className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-2xl tracking-widest">TWIN BLADES</span>
              <span className="block text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                ENNIS · CO. CLARE
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-brass"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex min-h-11 items-center gap-2 bg-brass px-5 text-sm font-semibold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center border border-border text-foreground lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-60 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-background/80 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          aria-label="Mobile"
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-border bg-surface p-6 transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl tracking-widest">TWIN BLADES</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center border border-border"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-3xl tracking-wide transition-colors hover:text-brass"
              >
                {n.label}
              </a>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-brass px-5 font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-brass/60 px-5 font-semibold text-brass"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>

      <main id="top">
        {/* HERO */}
        <section className="relative flex min-h-[92svh] items-end overflow-hidden">
          <img
            src={heroImg}
            alt="Interior of a dark, warmly lit barbershop with a leather chair and brass-framed mirrors"
            width={1920}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 lg:px-10 lg:pb-24">
            <p className="eyebrow">Barbershop · 4 Barrack St, Ennis</p>
            <h1 className="mt-5 max-w-4xl text-fluid-hero uppercase">
              Twin Blades — Premier Barber in Ennis, Ireland
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Sharp fades, precision cuts and traditional hot towel grooming in the heart of Co.
              Clare. Walk in for a chat, leave looking your best.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-brass px-8 text-base font-semibold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book Appointment
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-brass/60 px-8 text-base font-semibold tracking-wide text-brass transition-colors hover:bg-brass/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-brass text-brass" aria-hidden="true" />
                <strong className="text-foreground">4.8</strong> · 33 Google reviews
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brass" aria-hidden="true" /> Ennis, Co. Clare
              </span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow">The Menu</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-fluid-section uppercase">Services built on detail</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Sample service list for the shop owner to customise — swap in your own names, times
              and prices.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="card-craft p-8">
                <s.icon className="h-6 w-6 text-brass" aria-hidden="true" />
                <h3 className="mt-6 text-2xl tracking-wide uppercase">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <p className="mt-6 text-xs tracking-[0.2em] text-brass-soft uppercase">
                  Price on request
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CRAFT */}
        <section id="craft" className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
            <div>
              <p className="eyebrow">The Craft</p>
              <h2 className="mt-4 text-fluid-section uppercase">
                Master barbers.
                <br />
                Local chair talk.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Twin Blades is a barbershop for Ennis — the kind of place where the clippers are
                sharp, the conversation is easy, and nobody leaves the chair until the line is
                right. Every cut starts with a proper consultation so the finish works for your
                hair, your routine and your week ahead.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Traditional technique, modern styling, and a welcome that keeps regulars coming
                back — rated 4.8 out of 5 across 33 Google reviews.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
                <div>
                  <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    Google Rating
                  </dt>
                  <dd className="mt-2 font-display text-4xl text-brass">4.8★</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    Reviews
                  </dt>
                  <dd className="mt-2 font-display text-4xl text-brass">33</dd>
                </div>
              </dl>
            </div>
            <img
              src={craftImg}
              alt="Leather waiting bench and barber chairs under warm pendant lighting"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-full max-h-[36rem] w-full object-cover"
            />
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow">The Work</p>
          <h2 className="mt-4 text-fluid-section uppercase">Fades, beards & atmosphere</h2>
          <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { src: gallery1, alt: "Barber cutting a crisp skin fade", tall: true },
              { src: gallery2, alt: "Hot towel shave in progress", tall: false },
              { src: gallery3, alt: "Straight razor, scissors and comb on slate", tall: false },
              { src: gallery4, alt: "Client with a sharp cut and shaped beard", tall: true },
            ].map((img, i) => (
              <figure
                key={i}
                className={`group overflow-hidden border border-border ${
                  img.tall ? "row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 border border-border px-5 text-sm transition-colors hover:border-brass hover:text-brass"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 border border-border px-5 text-sm transition-colors hover:border-brass hover:text-brass"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" /> Facebook
            </a>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:py-28">
            <p className="eyebrow">Verified on Google</p>
            <div className="mt-6 inline-flex flex-col items-center border border-brass/40 bg-background px-10 py-8">
              <div className="flex gap-1" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-brass text-brass" />
                ))}
              </div>
              <p className="mt-4 font-display text-6xl text-brass">4.8</p>
              <p className="mt-1 text-sm tracking-[0.2em] text-muted-foreground uppercase">
                Based on 33 Google reviews
              </p>
            </div>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Twin Blades holds a 4.8-star rating from 33 verified Google reviews — a rating earned
              chair by chair in Ennis. Read every review, or add yours, on our Google listing.
            </p>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-2 border border-brass/60 px-8 font-semibold text-brass transition-colors hover:bg-brass/10"
            >
              Read reviews on Google
            </a>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <p className="eyebrow">Find Us</p>
          <h2 className="mt-4 text-fluid-section uppercase">Location & directions</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden border border-border">
              <iframe
                title="Map showing Twin Blades, 4 Barrack St, Ennis"
                src="https://www.google.com/maps?q=4%20Barrack%20St%2C%20Clonroad%20Beg%2C%20Ennis%2C%20Co.%20Clare%2C%20V95%20VNE4%2C%20Ireland&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full grayscale-[0.4] contrast-125 lg:h-full lg:min-h-[26rem]"
              />
            </div>
            <div className="card-craft flex flex-col gap-6 p-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
                <div>
                  <h3 className="text-xl tracking-wide uppercase">Address</h3>
                  <address className="mt-2 text-sm not-italic text-muted-foreground">
                    {ADDRESS}
                  </address>
                </div>
              </div>
              <div className="flex gap-4">
                <Car className="mt-1 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
                <div>
                  <h3 className="text-xl tracking-wide uppercase">Parking & transit</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Barrack Street sits a short walk from Ennis town centre, with nearby public
                    car parks and town bus stops within easy reach. Check Google Maps for live
                    parking options on the day.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
                <div>
                  <h3 className="text-xl tracking-wide uppercase">Opening hours</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Hours are listed and kept up to date on our Google listing — placeholder for
                    the owner to add full weekly hours here.
                  </p>
                </div>
              </div>
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 bg-brass px-6 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border bg-surface">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
            <div>
              <p className="eyebrow">Book Your Chair</p>
              <h2 className="mt-4 text-fluid-section uppercase">Ready when you are</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Call the shop, message us on WhatsApp, or send a request below and we'll get back
                to you with a time.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 bg-brass px-7 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-brass/60 px-7 font-semibold text-brass transition-colors hover:bg-brass/10"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="card-craft p-8">
              <div className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="text-xs tracking-[0.2em] uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-2 min-h-12 w-full border border-input bg-background px-4 text-base outline-none focus:border-brass"
                  />
                  {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact" className="text-xs tracking-[0.2em] uppercase">
                    Email or phone
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    autoComplete="email"
                    className="mt-2 min-h-12 w-full border border-input bg-background px-4 text-base outline-none focus:border-brass"
                  />
                  {errors.contact && (
                    <p className="mt-2 text-sm text-destructive">{errors.contact}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="text-xs tracking-[0.2em] uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full border border-input bg-background p-4 text-base outline-none focus:border-brass"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center bg-brass px-6 font-semibold tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send Request
                </button>
                {sent && (
                  <p role="status" className="text-sm text-brass">
                    Thanks — your request has been noted. Please call or WhatsApp us to confirm a
                    time.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 pb-28 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:pb-12">
          <div>
            <p className="font-display text-2xl tracking-widest">TWIN BLADES</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">{ADDRESS}</p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-block text-sm text-brass hover:underline"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twin Blades on Instagram"
              className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-brass hover:text-brass"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twin Blades on Facebook"
              className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-brass hover:text-brass"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twin Blades on Google Maps"
              className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-brass hover:text-brass"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Twin Blades, Ennis, Co. Clare.
        </p>
      </footer>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur lg:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex min-h-14 items-center justify-center gap-2 bg-brass font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 font-semibold text-brass"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
