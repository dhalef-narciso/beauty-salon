/**
 * Centralized Salon Data Configuration
 * Matched to official Twin Blades Instagram identity (@twin.blades)
 */

export interface SalonService {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  requiresConsultation: boolean;
  tag?: string;
}

export interface SalonReview {
  id: string;
  author: string;
  rating: number;
  service: string;
  comment: string;
  date: string;
}

export const SALON_CONFIG = {
  name: "Twin Blades Hair Salon",
  shortName: "Twin Blades",
  tagline: "Beautiful Hair, Designed Around You",
  eyebrow: "HAIR & BEAUTY SALON · ENNIS, CO. CLARE",
  description:
    "Professional advice, sculptured cuts, contoured colour, and glamorous finishes. Celebrating nearly 29 years of trusted hairdressing in the heart of Ennis.",

  // Contact & Location Details from Instagram
  contact: {
    address: "04 Barrack Street, Ennis, Ireland V95 VNE4",
    phoneDisplay: "065 684 2660",
    phoneTel: "+353656842660",
    whatsapp: "https://wa.me/353656842660",
    email: "appointments@twinblades.ie",
    mapsUrl:
      "https://www.google.com/maps?q=4+Barrack+St,+Clonroad+Beg,+Ennis,+Co.+Clare,+V95+VNE4,+Ireland",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=4%20Barrack%20St%2C%20Clonroad%20Beg%2C%20Ennis%2C%20Co.%20Clare%2C%20V95%20VNE4%2C%20Ireland&output=embed",
    instagram: "https://www.instagram.com/twin.blades",
    facebook: "https://www.facebook.com/TwinBladesHairSalon",
    bookingUrl: "#contact",
  },

  // Hours of Operation from Instagram Bio (Monday-Saturday | 9-6)
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  // Key Trust Highlights from Instagram
  trustHighlights: [
    { title: "29 Years in Business", desc: "Top 5 hair salon in Co. Clare" },
    { title: "Contoured Colour & Cuts", desc: "Tailored to your facial features & goals" },
    { title: "Private Beauty Room", desc: "Quiet dedicated room on private floor" },
  ],

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      title: "29 Years of Heritage",
      description:
        "Proudly serving our amazing County Clare community for nearly 29 years, voted among the top 5 hair salons in Clare.",
    },
    {
      title: "Professional Advice",
      description:
        "Every visit begins with expert consultation to craft sculptured cuts and contoured colour tailored to your lifestyle.",
    },
    {
      title: "Contoured Colour & Balayage",
      description:
        "Specialists in multi-tonal colour melting, seamless blonde balayage, and restorative hydration treatments.",
    },
    {
      title: "Private Beauty Room",
      description:
        "In addition to our welcoming ground floor salon, we offer a dedicated, spacious private beauty room upstairs.",
    },
  ],

  // Services Menu
  services: [
    {
      id: "cut-blowdry",
      title: "Sculptured Cut & Blow-Dry",
      category: "Styling & Cut",
      description:
        "A personalised consultation, precision haircut and professional blow-dry created to complement your features and lifestyle.",
      price: "From €65",
      duration: "60 mins",
      requiresConsultation: false,
      tag: "Popular",
    },
    {
      id: "hair-colour",
      title: "Contoured Colour",
      category: "Colouring",
      description:
        "Beautiful, customised colour ranging from rich all-over tones to natural-looking dimensional results.",
      price: "Price on consultation",
      duration: "90–120 mins",
      requiresConsultation: true,
    },
    {
      id: "highlights-balayage",
      title: "Highlights & Balayage",
      category: "Lightening & Tone",
      description:
        "Soft highlights, bright blondes and seamlessly blended balayage tailored to your desired finish.",
      price: "Price on consultation",
      duration: "120–180 mins",
      requiresConsultation: true,
      tag: "Signature",
    },
    {
      id: "blow-dry-styling",
      title: "Glamorous Blow-Dry & Styling",
      category: "Finish & Volume",
      description:
        "A smooth, polished or voluminous finish for everyday confidence or a special occasion.",
      price: "From €40",
      duration: "45 mins",
      requiresConsultation: false,
    },
    {
      id: "hair-treatments",
      title: "Restorative Hair Treatments",
      category: "Care & Repair",
      description:
        "Restorative treatments designed to hydrate, strengthen and revive dry, damaged or colour-treated hair.",
      price: "From €35",
      duration: "30 mins",
      requiresConsultation: false,
      tag: "Revitalise",
    },
    {
      id: "bridal-occasion",
      title: "Bridal & Occasion Hair",
      category: "Event Styling",
      description:
        "Elegant, long-lasting styling for weddings, communions, celebrations and unforgettable moments.",
      price: "Price on consultation",
      duration: "75–90 mins",
      requiresConsultation: true,
    },
  ] as SalonService[],

  // Verified Client Testimonials
  reviews: [
    {
      id: "rev-1",
      author: "Sarah M.",
      rating: 5,
      service: "Highlights & Balayage",
      comment:
        "The contoured colour blend is simply stunning. They have looked after my hair for years and always deliver the most natural golden finish. A true gem in Ennis!",
      date: "Local Client",
    },
    {
      id: "rev-2",
      author: "Claire O'B.",
      rating: 5,
      service: "Sculptured Cut",
      comment:
        "The best hair salon in Ennis by far! 29 years of experience really shows — the sculptured cut has beautiful movement and stays perfect for weeks.",
      date: "Local Client",
    },
    {
      id: "rev-3",
      author: "Aoife K.",
      rating: 5,
      service: "Occasion Styling",
      comment:
        "Created an incredible occasion style for our family celebration. The team is so warm, attentive, and talented. Highly recommend!",
      date: "Local Client",
    },
  ] as SalonReview[],
};
