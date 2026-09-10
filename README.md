# Luxe Nails & Brow Studio Landing Page

A modern, elegant, delicate, and high-converting landing page for **Luxe Nails & Brow Studio**, an upscale beauty studio focused on professional nail and eyebrow treatments.

---

### STUDIO INFORMATION & CUSTOMIZATION

All business details, services, opening hours, contact details, specialist information, and social links are centrally organized and easily editable in:

📁 `src/data/salon.ts`

- **Studio Name**: `Luxe Nails & Brow Studio` (Short name: `Luxe Studio`)
- **Category / Industry**: Professional Nails & Eyebrows Studio
- **Location**: 04 Barrack Street, Ennis, Ireland V95 VNE4
- **Phone**: +353 65 684 2660
- **WhatsApp**: Available via verified direct WhatsApp link
- **Email**: hello@luxenailsandbrows.com

---

### DESIGN SYSTEM & VISUAL IDENTITY

- **Aesthetic Direction**: Delicate, feminine, minimalist, welcoming, and premium with ample whitespace and elegant typography.
- **Palette**:
  - Warm Ivory Cream (Background): `#FAF8F5`
  - Pure White (Cards): `#FFFFFF`
  - Soft Nude & Warm Beige: `#F8F3EE` / `#EFE6DF`
  - Delicate Powder Blush: `#F7ECE8`
  - Brushed Antique Champagne Gold: `#C5A572`
  - Deep Mocha Espresso (Headings & Primary CTA): `#2B2320`
  - Warm Taupe (Body copy & secondary text): `#6B5C55`
- **Typography**:
  - Headings: _Playfair Display_ (refined editorial serif)
  - Body & UI: _Plus Jakarta Sans_ (crisp, modern, highly legible sans-serif)

---

### PAGE SECTIONS

1. **Header & Navigation**: Fixed navigation with blurred backdrop on scroll, elegant studio monogram mark, navigation links, quick "Book an Appointment" CTA, and responsive mobile drawer.
2. **Hero Section**: High-resolution studio photography of immaculate manicured hands, single H1 (*"Beautiful Details, Made Just for You"*), subheadline, dual CTAs, trust highlight badge, and discreet Call/WhatsApp links.
3. **Services Menu**: 8 dedicated cards organized with category filters for **Nails** and **Brows**:
   - Classic Manicure
   - Gel Polish
   - BIAB / Builder Gel
   - Nail Extensions
   - Nail Art
   - Eyebrow Shaping
   - Eyebrow Tinting
   - Brow Lamination
   Each card features price, duration, description, and a "Book Now" action that pre-selects the treatment in the booking form.
4. **Philosophy Highlight ("Beauty is in the details.")**: Centered editorial statement with 3 core pillars:
   - *Personalised Treatments*
   - *Professional Products*
   - *Attention to Detail*
5. **Portfolio & Gallery**: High-resolution, natural-light showcase of classic nails, French BIAB builder gel, minimalist nail art, and brow lamination, with a direct "View More on Instagram" button.
6. **Meet Your Beauty Specialist**: Dedicated profile featuring portrait photo, background, sterile hygiene protocols, cruelty-free formulas, and individual consultation standards.
7. **Client Love (Testimonials)**: 3 authentic client reviews focusing on precision, long-lasting results, and welcoming atmosphere.
8. **Call to Action ("Ready for your next beauty moment?")**: Striking yet delicate dark-mocha banner with primary booking action and WhatsApp connection.
9. **Visit & Contact Form**: Address, hours, telephone, email, interactive Google Maps embed, and booking request form with live validation.
10. **Footer & Mobile Action Bar**: Comprehensive directory links and a sticky mobile action bar for one-tap booking and WhatsApp communication.

---

### LOCAL SEO

- **Title**: `Luxe Nails & Brow Studio | Professional Nails & Eyebrow Studio`
- **Description**: `Professional nail and eyebrow treatments designed to enhance your natural beauty. Specialising in Classic Manicures, Gel Polish, BIAB Builder Gel, Nail Extensions, Nail Art, Brow Shaping, Brow Tinting, and Brow Lamination.`
- **Schema.org**: Structured JSON-LD for `BeautySalon` and `NailSalon` with address, telephone, price range, and opening hours.

---

### DEVELOPMENT

```sh
npm install
npm run dev
```

To build for production:

```sh
npm run build
```
