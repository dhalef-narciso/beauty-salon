/**
 * Centralized Salon Data Configuration
 * Edit this file to customize the salon's name, contact information,
 * prices, services, hours, and social media links.
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
  name: "Élodie Hair Studio",
  tagline: "Beautiful Hair, Designed Around You",
  eyebrow: "WOMEN’S HAIR & BEAUTY SALON · ENNIS, CO. CLARE",
  description:
    "From precision cuts and dimensional colour to elegant styling and restorative treatments, we create personalised looks that help you feel confident and beautiful.",

  // Contact & Location Details
  contact: {
    address: "4 Barrack St, Clonroad Beg, Ennis, Co. Clare, V95 VNE4, Ireland",
    phoneDisplay: "+353 65 684 2660",
    phoneTel: "+353656842660",
    whatsapp: "https://wa.me/353656842660",
    email: "appointments@elodiehairstudio.ie",
    mapsUrl:
      "https://www.google.com/maps?q=4+Barrack+St,+Clonroad+Beg,+Ennis,+Co.+Clare,+V95+VNE4,+Ireland",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=4%20Barrack%20St%2C%20Clonroad%20Beg%2C%20Ennis%2C%20Co.%20Clare%2C%20V95%20VNE4%2C%20Ireland&output=embed",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    bookingUrl: "#contact",
  },

  // Hours of Operation
  hours: [
    { days: "Tuesday – Wednesday", time: "9:00 AM – 5:30 PM" },
    { days: "Thursday – Friday", time: "9:00 AM – 7:00 PM" },
    { days: "Saturday", time: "8:30 AM – 5:00 PM" },
    { days: "Sunday & Monday", time: "Closed" },
  ],

  // Key Trust Highlights
  trustHighlights: [
    { title: "Personalised consultations", desc: "Tailored to your hair type & lifestyle" },
    { title: "Professional salon products", desc: "Nourishing, cruelty-free formulas" },
    { title: "Welcoming atmosphere", desc: "A relaxing, light-filled boutique space" },
  ],

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      title: "Personalised consultations",
      description:
        "Every appointment begins with a one-on-one consultation to understand your hair goals, face shape, and daily styling routine.",
    },
    {
      title: "Experienced professionals",
      description:
        "Passionate stylists trained in contemporary colour melting, effortless balayage, and precision structural haircuts.",
    },
    {
      title: "Quality hair products",
      description:
        "We selectively use high-performance salon care designed to fortify hair bonds, enhance luminous shine, and maintain colour vitality.",
    },
    {
      title: "Relaxing, welcoming salon",
      description:
        "An inviting, sun-drenched sanctuary where you can pause, unwind with artisan coffee or tea, and enjoy undivided attention.",
    },
  ],

  // Services Menu
  services: [
    {
      id: "cut-blowdry",
      title: "Cut & Blow-Dry",
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
      title: "Hair Colour",
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
      title: "Blow-Dry & Styling",
      category: "Finish & Volume",
      description:
        "A smooth, polished or voluminous finish for everyday confidence or a special occasion.",
      price: "From €40",
      duration: "45 mins",
      requiresConsultation: false,
    },
    {
      id: "hair-treatments",
      title: "Hair Treatments",
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
        "Elegant, long-lasting styling for weddings, celebrations and unforgettable moments.",
      price: "Price on consultation",
      duration: "75–90 mins",
      requiresConsultation: true,
    },
  ] as SalonService[],

  // NOTE FOR OWNER: Replace these placeholder client testimonials with your real verified reviews
  reviews: [
    {
      id: "rev-1",
      author: "Sarah M.",
      rating: 5,
      service: "Highlights & Balayage",
      comment:
        "The colour blend is simply stunning. The consultation made all the difference — she listened carefully to what I wanted and gave me the most natural golden balayage. The salon atmosphere is so warm and calm.",
      date: "Local Client",
    },
    {
      id: "rev-2",
      author: "Claire O'B.",
      rating: 5,
      service: "Cut & Blow-Dry",
      comment:
        "Finally found my go-to hair salon in Ennis! The cut has so much movement and the bouncy blow-dry lasted three days. Extremely professional and genuinely welcoming staff.",
      date: "Local Client",
    },
    {
      id: "rev-3",
      author: "Aoife K.",
      rating: 5,
      service: "Hair Treatments",
      comment:
        "My hair was so dry from heat styling, but the hydration treatment completely revived it. It feels silky, glossy, and healthy again. Loved the complimentary tea and gentle care.",
      date: "Local Client",
    },
  ] as SalonReview[],
};
