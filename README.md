# Luxe Hair & Beauty Salon Landing Page (Demo)

A modern, elegant, and high-converting landing page for a premium hair and beauty salon demo.

### SALON INFORMATION & CUSTOMIZATION

All business details, services, opening hours, contact details, and social links are centrally organized and easily editable in:

📁 `src/data/salon.ts`

- **Salon Name**: `Luxe Hair & Beauty Salon` (Short name: `Luxe Salon`)
- **Category / Industry**: Luxury Hair & Beauty Salon
- **Location**: 04 Barrack Street, Ennis, Ireland V95 VNE4
- **Phone**: +353 65 684 2660
- **WhatsApp**: Available via verified wa.me link
- **Email**: appointments@luxesalon.com

### DESIGN SYSTEM

- **Aesthetic Direction**: Elegant, warm, feminine, and editorial with sophisticated typography and balanced contrast.
- **Palette**:
  - Deep plum / burgundy: `#4A2535`
  - Dusty rose: `#C98F9D`
  - Soft blush: `#E8C7CD`
  - Warm champagne gold: `#C6A15B`
  - Cream / off-white: `#FAF6F1`
  - Warm taupe: `#8A756C`
  - Dark text: `#2B2225`
  - White: `#FFFFFF`
- **Typography**:
  - Headings: _Playfair Display_ (sophisticated editorial serif)
  - Body & UI: _Montserrat_ & _Inter_ (clean, contemporary, highly readable)

### PAGE SECTIONS

1. **Header & Navigation**: Fixed navigation with blurred backdrop on scroll, elegant salon logo with hair/beauty icon mark, quick "Book Appointment" CTA, and mobile drawer.
2. **Hero Section**: Natural sunlit women's salon interior, single H1 (`Beautiful Hair, Designed Around You`), dual CTAs (`Book Your Appointment`, `Explore Our Services`), discreet Call/WhatsApp line, and core trust highlights.
3. **Services Menu**: 6 dedicated salon services with editable price placeholders:
   - Cut & Blow-Dry (From €65)
   - Hair Colour (Price on consultation)
   - Highlights & Balayage (Price on consultation)
   - Blow-Dry & Styling (From €40)
   - Hair Treatments (From €35)
   - Bridal & Occasion Hair (Price on consultation)
4. **About The Salon**: Personalized consultation philosophy, commitment to healthy hair, and 4 core client pillars.
5. **Gallery / Transformations**: Responsive visual showcase of precision cuts, dimensional balayage, occasion styling, and restorative gloss treatments.
6. **Client Reviews**: Authentic feedback layout with neutral local client testimonials and Google Maps review link.
7. **Consultation CTA**: "Ready for Your Next Look?" full-width section with primary booking and direct messaging actions.
8. **Visit & Contact Form**: Salon address, weekly operating hours, interactive booking request form with front-end validation, and embedded Google Maps view.
9. **Footer & Mobile Action Bar**: Comprehensive directory links and a sticky mobile action bar for one-tap booking and WhatsApp communication.

### LOCAL SEO

- **Title**: `Luxe Hair & Beauty Salon | Luxury Hair & Beauty Studio`
- **Description**: `Discover professional sculptured cuts, contoured colour, balayage, blow-dries and occasion styling at Luxe Hair & Beauty Salon. Book your appointment today.`
- **Schema.org**: Structured JSON-LD for `BeautySalon` and `HairSalon` with address, telephone, price range, and opening hours.

### DEVELOPMENT

```sh
npm install
npm run dev
```

To build for production:

```sh
npm run build
```
