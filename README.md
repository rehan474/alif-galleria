# Alif Galleria — Kadhavu-inspired component website

This version is deliberately **componentized without adding a framework dependency**. It uses native ES modules so it can be opened and hosted as a normal static site while keeping each section isolated and reusable.

## Run

Because the site uses ES modules, run it through a small local server (do not double-click `index.html`).

### VS Code
Install Live Server, open this folder, then choose **Open with Live Server** on `index.html`.

### Python
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Components

- `components/header.js` — responsive navigation + active section state
- `components/brand.js` — logo mark + Alif Galleria wordmark used in header/footer
- `components/hero.js` — video hero and WhatsApp CTA
- `components/intro.js` — intro section
- `components/products.js` — filterable product section + product cards
- `components/video.js` — process video section
- `components/gallery.js` — mixed image/video gallery, filters and lightbox
- `components/about.js` — business overview
- `components/location.js` — address, phone and Google Map
- `components/footer.js` — footer branding and WhatsApp contacts
- `components/floating.js` — persistent WhatsApp CTA
- `data/site.js` — all business/product/gallery data
- `utils/whatsapp.js` — single WhatsApp URL/message builder

## Media supplied by you

### Videos
- `videos/hero.mp4` — 1920×1080, ~17.9 seconds; hero background
- `videos/process.mp4` — 1920×1080, ~13.8 seconds; process section
- `videos/showcase.mp4` — 480×272, ~18.8 seconds; gallery video

### Images
- `assets/images/brand/alif-galleria-mark.svg` — supplied logo mark
- `assets/images/brand/hero-poster.jpg` — poster from supplied workshop photo
- `assets/images/brand/process-poster.jpg` — poster from supplied UPVC installation photo
- `assets/images/products/steel-door-gl900.jpg`
- `assets/images/products/upvc-door-white.jpg`
- `assets/images/products/steel-door-gl500.jpg`
- `assets/images/products/modern-steel-door.jpg`
- `assets/images/products/georgian-wooden-door.jpg`
- `assets/images/gallery/workshop.jpg`
- `assets/images/gallery/upvc-window-installation.jpg`
- `assets/images/gallery/doors-and-windows-showcase.jpg`
- `assets/images/gallery/upvc-windows-project.jpg`

## Effects and fixes included

- Scroll reveal animations with reduced-motion support
- Hero video autoplay/muted/loop/playsInline with poster fallback
- Hero parallax movement
- Product image hover zoom + overlays
- Product filters
- Gallery filters
- Mixed photo/video gallery
- Video lightbox with autoplay for gallery clips
- Responsive mobile navigation
- Active navigation section tracking
- Header/footer brand mark + **Alif Galleria** wordmark
- Floating WhatsApp CTA
- Product-specific URL-encoded WhatsApp messages
- Secondary WhatsApp number in footer
- Google Map centered on the supplied address
- No email field and no contact form

## Important

Some product categories currently share a relevant uploaded image because a dedicated photo for every one of the ten categories was not supplied. Replace those image paths in `data/site.js` when dedicated product photos are available.
