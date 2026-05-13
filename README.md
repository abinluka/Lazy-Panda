# Lazy Panda Photography — Website Documentation

A complete, fully responsive, multi-page premium photography studio website.

---

## 📁 File Structure

```
lazy-panda-photography/
│
├── index.html          → Homepage (Hero, About, Services, Portfolio, Cinematic, Testimonials, Pricing, Booking, Blog, FAQ, Contact, Footer)
├── about.html          → About page (Philosophy, Founder, Team, Timeline, Gear, Awards)
├── services.html       → Services page (Full service cards, Process, Add-ons, FAQ)
├── portfolio.html      → Portfolio page (Masonry Gallery, Filter, Lightbox, Featured Projects)
├── pricing.html        → Pricing page (Category tabs, Package cards, Comparison table, Custom quote, FAQ)
├── blog.html           → Blog page (Featured article, Article grid, Search, Filter, Newsletter)
├── contact.html        → Contact page (Form, Map, Hours, Directions, Social)
├── book.html           → Book Now page (Full inquiry form, How it works, Testimonials, FAQ)
├── privacy.html        → Privacy Policy
├── terms.html          → Terms & Conditions
├── 404.html            → Custom 404 error page
│
├── shared.css          → Shared CSS variables, navbar, footer, buttons, form controls
└── shared.js           → Shared JavaScript (cursor, particles, navbar, FAQ, counter, etc.)
```

---

## 🎨 Design System

### Color Palette
| Variable         | Value           | Usage                     |
|-----------------|-----------------|---------------------------|
| `--black`        | `#0a0a0a`       | Primary background        |
| `--dark`         | `#111111`       | Section background        |
| `--dark-2`       | `#1a1a1a`       | Card background           |
| `--gold`         | `#c9a84c`       | Primary accent            |
| `--gold-light`   | `#e4c97e`       | Italic/hover gold         |
| `--white`        | `#f5f0eb`       | Primary text              |
| `--gray`         | `#888888`       | Secondary text            |

### Typography
- **Headings:** Cormorant Garamond (serif) — weights 300, 400, 600
- **Body / UI:** Outfit (sans-serif) — weights 300, 400, 500

### External Libraries Used
| Library         | Version | CDN |
|----------------|---------|-----|
| Font Awesome    | 6.5.1   | cdnjs |
| AOS (Animate on Scroll) | 2.3.4 | cdnjs |
| Swiper.js       | 11.0.5  | cdnjs |
| Google Fonts    | —       | fonts.googleapis.com |

---

## ✨ Features Implemented

### UI/UX
- ✅ Fully responsive — mobile, tablet, desktop
- ✅ Custom gold animated cursor
- ✅ Cinematic loading screen with progress counter
- ✅ Ambient particle animation (canvas-based)
- ✅ Sticky transparent navbar with blur-on-scroll
- ✅ Mobile hamburger menu with slide-in overlay
- ✅ Smooth AOS scroll animations throughout
- ✅ Hero image/background slider with auto-advance and dot navigation
- ✅ Back-to-top button (shows on scroll)
- ✅ Floating WhatsApp chat button
- ✅ Newsletter popup (appears after 5 seconds on homepage)
- ✅ Dark cinematic colour theme with gold accents

### Homepage Sections
- ✅ Fullscreen cinematic hero with slideshow, CTAs, social links, scroll indicator
- ✅ About section with image frame, stats counters
- ✅ Services grid (9 services) with hover animations
- ✅ Portfolio masonry gallery with filter and lightbox
- ✅ Cinematic showcase with BTS grid
- ✅ Before & After drag slider
- ✅ Testimonials carousel (Swiper.js)
- ✅ Pricing cards (3 tiers) with highlighted recommended package
- ✅ Booking inquiry form with validation and success state
- ✅ Instagram / social media feed preview
- ✅ Blog / stories grid
- ✅ Awards / trust badges row
- ✅ FAQ accordion
- ✅ Contact section with map placeholder
- ✅ Newsletter popup
- ✅ Professional footer with newsletter subscription

### Inner Pages
- ✅ **About** — Philosophy cards, founder profile, 4-person team grid, interactive timeline, gear showcase, awards list
- ✅ **Services** — Full alternating service layout (6 services), 5-step process, 8 add-ons, FAQ
- ✅ **Portfolio** — Masonry gallery (12 items), category filter, keyboard-navigable lightbox, featured projects Swiper carousel
- ✅ **Pricing** — 5-category tab switcher, 3 tier cards per category, feature comparison table, custom quote form, trust badges, FAQ
- ✅ **Blog** — Featured article, 9 article cards, search bar, category filter, load more, newsletter CTA
- ✅ **Contact** — Full contact form with validation, business hours grid, map placeholder with pulse animation, 3 nearby landmark cards
- ✅ **Book Now** — Full 11-field booking form, urgency strip, how-it-works steps, 3 mini testimonials, FAQ
- ✅ **Privacy Policy** — 9 full sections with sticky sidebar navigation
- ✅ **Terms & Conditions** — 9 full sections with sticky sidebar navigation
- ✅ **404** — Animated floating 404 with quick links

---

## 🚀 Getting Started

### Option 1 — Open Directly
Simply open `index.html` in any modern web browser. No build step required.

### Option 2 — Local Development Server
For best results (especially loading shared.css/shared.js across pages):

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server . -p 8000

# Then open: http://localhost:8000
```

### Option 3 — Deploy to Web
Upload all files to any static hosting platform:
- **Netlify** — drag and drop the folder at netlify.com
- **Vercel** — `vercel deploy`
- **GitHub Pages** — push to a `gh-pages` branch
- **cPanel / FTP** — upload all files to `public_html/`

---

## 🛠 Customisation Guide

### Change Brand Name
Search and replace `Lazy Panda Photography` across all HTML files.

### Update Contact Details
Replace all instances of:
- `+91 94470 00000` — your phone number
- `hello@lazypandaphoto.com` — your email
- `42 Kowdiar Avenue, Thiruvananthapuram` — your address
- `https://wa.me/919447000000` — your WhatsApp link

### Replace Placeholder Images
All gallery and portrait images are CSS gradient placeholders. Replace `.ph-block`, `.ph-port`, `.sf-visual`, `.feat-visual`, and `.art-visual` backgrounds with real `<img>` tags or `background-image: url(...)`.

### Add Real Google Map
In `contact.html`, replace the `.map-container` section with:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%" height="100%"
  style="border:0;" allowfullscreen="" loading="lazy">
</iframe>
```

### Update Pricing
Edit the `₹` price values directly in `index.html`, `services.html`, and `pricing.html`.

### Change Gold Accent Colour
In `shared.css`, update:
```css
--gold: #c9a84c;
--gold-light: #e4c97e;
--gold-dark: #a07830;
```

---

## 📱 Responsive Breakpoints
| Breakpoint | Target |
|-----------|--------|
| Default | Desktop (1280px+) |
| `max-width: 1024px` | Tablet landscape |
| `max-width: 768px` | Tablet portrait / mobile |
| `max-width: 480px` | Small mobile |

---

## 🔗 Internal Navigation Map

| From | Links To |
|------|----------|
| All pages | Home, About, Services, Portfolio, Pricing, Blog, Contact, Book Now |
| Footer | All pages + Privacy Policy + Terms |
| Homepage CTAs | Book Now, Portfolio |
| Service cards | Book Now |
| Pricing cards | Book Now |
| Blog cards | # (placeholder) |
| WhatsApp float | wa.me link |

---

## 📦 Total Files: 13
- 11 HTML pages
- 1 shared CSS
- 1 shared JS

**Total size: ~350KB** (excluding CDN libraries loaded from internet)

---

## 📄 License
This website template was created for **Lazy Panda Photography**.
All design, code, and content are proprietary. Do not redistribute without permission.

---

*Built with ♥ — Lazy Panda Photography © 2025*
