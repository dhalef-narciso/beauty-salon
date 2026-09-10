/**
 * Centralized Salon Data Configuration
 * Premium Nails & Eyebrows Studio
 */

export interface SalonService {
  id: string;
  title: string;
  category: "Nails" | "Brows";
  description: string;
  price: string;
  duration: string;
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

export interface DifferenceItem {
  title: string;
  description: string;
}

export const SALON_CONFIG = {
  name: "Luxe Nails & Brow Studio",
  shortName: "Luxe Studio",
  tagline: "Beautiful Details, Made Just for You",
  subheadline:
    "Professional nail and eyebrow treatments designed to enhance your natural beauty.",
  eyebrow: "NAILS & BROWS STUDIO",
  badge: "Professional care • Beautiful results • Relaxing experience",
  description:
    "Delicate, long-lasting manicures, builder gel sculpting, and precision brow design. A calm, sophisticated space focused on hygiene, precision, and personalized care.",

  // Feature Section ("Beauty is in the details.")
  featuredSection: {
    headline: "Beauty is in the details.",
    description:
      "Every treatment is completely personalized, combining advanced professional techniques with meticulous attention to the smallest details for healthy, radiant, and long-lasting results.",
    differentiators: [
      {
        title: "Personalised Treatments",
        description:
          "Customized shaping, tones, and styling tailored to your natural nails, brow geometry, and personal aesthetic.",
      },
      {
        title: "Professional Products",
        description:
          "Premium salon-grade builder gels, gentle vegan polishes, and dermatologically tested brow pigments that protect your health.",
      },
      {
        title: "Attention to Detail",
        description:
          "Medical-grade sterilization, flawless cuticle precision, and unhurried appointments focused entirely on you.",
      },
    ] as DifferenceItem[],
  },

  // About the Specialist
  specialist: {
    title: "Meet Your Beauty Specialist",
    name: "Elena Vance",
    role: "Certified Nail & Brow Specialist",
    quote:
      "True beauty is created in the subtle, meticulous details. My studio is dedicated to providing you with gentle care, uncompromising hygiene, and results you will adore.",
    bio: [
      "With years of passionate experience in advanced manicures, builder gel sculpting, and brow architecture, I believe your beauty ritual should be a calming, luxurious pause in your day.",
      "Every client receives dedicated 1-on-1 attention, beginning with an individual consultation to understand your lifestyle, nail health, and desired brow shape. Using exclusively certified, cruelty-free professional formulations, I strive for enduring elegance that feels effortlessly natural.",
    ],
    features: [
      "Medical-Grade Sterilization",
      "Cruelty-Free & Vegan Formulations",
      "Private 1-on-1 Consultation",
      "Long-Lasting High-Gloss Finish",
    ],
  },

  // Contact & Location Details
  contact: {
    address: "04 Barrack Street, Ennis, Ireland V95 VNE4",
    phoneDisplay: "065 684 2660",
    phoneTel: "+353656842660",
    whatsapp: "https://wa.me/353656842660",
    email: "hello@luxenailsandbrows.com",
    mapsUrl:
      "https://www.google.com/maps?q=4+Barrack+St,+Clonroad+Beg,+Ennis,+Co.+Clare,+V95+VNE4,+Ireland",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=4%20Barrack%20St%2C%20Clonroad%20Beg%2C%20Ennis%2C%20Co.%20Clare%2C%20V95%20VNE4%2C%20Ireland&output=embed",
    instagram: "https://www.instagram.com/luxenailsandbrows",
    instagramHandle: "@luxenailsandbrows",
    facebook: "https://www.facebook.com/luxenailsandbrows",
    bookingUrl: "#contact",
  },

  // Hours of Operation
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:30 PM" },
    { days: "Saturday", time: "9:00 AM – 6:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  // Core Services Menu (8 items: Nails & Brows)
  services: [
    {
      id: "classic-manicure",
      title: "Classic Manicure",
      category: "Nails",
      description:
        "Detailed cuticle care, precision nail shaping, gentle buffing, relaxing hand massage, and professional long-wear polish.",
      price: "From €35",
      duration: "45 mins",
    },
    {
      id: "gel-polish",
      title: "Gel Polish",
      category: "Nails",
      description:
        "High-gloss, chip-free gel manicure with expert nail prep, durable colour application, and nourishing cuticle treatment.",
      price: "From €45",
      duration: "50 mins",
      tag: "Popular",
    },
    {
      id: "biab-builder-gel",
      title: "BIAB / Builder Gel",
      category: "Nails",
      description:
        "Strengthening builder gel overlay designed to protect natural nails, promote healthy growth, and deliver an immaculate structured finish.",
      price: "From €55",
      duration: "65 mins",
      tag: "Signature",
    },
    {
      id: "nail-extensions",
      title: "Nail Extensions",
      category: "Nails",
      description:
        "Seamless full-cover tips or sculpted gel extensions tailored to your ideal length, shape, and natural curvature.",
      price: "From €70",
      duration: "80 mins",
    },
    {
      id: "nail-art",
      title: "Nail Art",
      category: "Nails",
      description:
        "Bespoke hand-painted nail artistry, micro French tips, chrome glazes, gold foil accents, or minimalist geometric designs.",
      price: "From €15",
      duration: "20–35 mins",
      tag: "Custom",
    },
    {
      id: "eyebrow-shaping",
      title: "Eyebrow Shaping",
      category: "Brows",
      description:
        "Precision brow mapping, delicate waxing, threading, and tweezing tailored to harmonise with your facial features.",
      price: "From €22",
      duration: "30 mins",
    },
    {
      id: "eyebrow-tinting",
      title: "Eyebrow Tinting",
      category: "Brows",
      description:
        "Custom-blended tinting that adds depth, definition, and rich tone to sparse or fair brow hairs for a fuller appearance.",
      price: "From €20",
      duration: "25 mins",
    },
    {
      id: "brow-lamination",
      title: "Brow Lamination",
      category: "Brows",
      description:
        "Keratin-infused brow lifting technique that restructures brow hairs into a feathered, fluffy, and flawlessly styled shape.",
      price: "From €60",
      duration: "55 mins",
      tag: "Trending",
    },
  ] as SalonService[],

  // Verified Client Testimonials
  reviews: [
    {
      id: "rev-1",
      author: "Olivia Richardson",
      rating: 5,
      service: "BIAB / Builder Gel",
      comment:
        "The BIAB treatment completely transformed my natural nails. Over four weeks later without a single lift or chip! The cuticle work and shape are absolute perfection.",
      date: "Verified Client",
    },
    {
      id: "rev-2",
      author: "Sophie Lauren",
      rating: 5,
      service: "Brow Lamination & Shaping",
      comment:
        "My brows have never looked this fluffy, symmetrical, and natural. Elena takes her time with mapping and makes you feel so pampered. The studio is spotless and calming.",
      date: "Verified Client",
    },
    {
      id: "rev-3",
      author: "Camille Beaumont",
      rating: 5,
      service: "Gel Polish & Minimalist Nail Art",
      comment:
        "Elena's attention to detail is unmatched. The micro-French and gold foil details were so delicate and chic. Booking is seamless and the atmosphere is pure serenity.",
      date: "Verified Client",
    },
  ] as SalonReview[],
};
