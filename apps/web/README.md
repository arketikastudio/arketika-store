# Arketika Design System

## Overview

**Arketika** is a Colombian artisan furniture brand based in Bogotá. They design and handcraft Japandi-industrial furniture — a fusion of Japanese minimalism and Scandinavian warmth, using natural oak (*roble natural*), matte black iron (*hierro negro*), and integrated warm LED lighting. Their hero collection is **Lumina**.

The digital product is a React/Vite + Tailwind + shadcn/ui marketing website and storefront, with a WhatsApp-first contact flow.

---

## Index

| File | Description |
|---|---|
| `README.md` | This document — brand context + design system reference |
| `tokens.css` | CSS custom properties for all design tokens |
| `preview/Colors.html` | Color palette preview card |
| `preview/Typography.html` | Type scale preview card |
| `preview/Spacing.html` | Spacing, radius, shadow preview card |
| `preview/Components.html` | UI components preview card |

---

## CONTENT FUNDAMENTALS

- **Language:** Spanish (Colombia, es-CO). All user-facing copy is in Spanish.
- **Tone:** Warm, artisanal, poetic without being precious. Speaks to quality, craftsmanship, timelessness.
- **Voice:** Third-person brand ("Arketika"), second-person customer ("tu espacio", "tu hogar"). Direct and warm.
- **Casing:** Sentence case throughout. Section labels: `UPPERCASE TRACKING-WIDER`.
- **Tagline:** *"Arquitectura que se vuelve hogar"*
- **Key phrases:** "fabricado artesanalmente", "cada pieza es única", "materiales nobles", "calidez del roble natural", "fortaleza del hierro negro", "atemporal".
- **CTAs:** "Explorar catálogo", "Cotizar esta pieza", "Iniciar conversación", "Solicitar diseño personalizado".
- **Emoji:** Never used.
- **Specs:** Always metric (cm, kg). "Dimensiones aproximadas".
- **Contact channel:** WhatsApp-first. No email forms.

---

## VISUAL FOUNDATIONS

### Colors
| Role | Name | Hex |
|---|---|---|
| Primary | Roble natural | `#8B7355` |
| Background | Blanco roto | `#F9F7F4` |
| Foreground | Hierro negro | `#1A1A1A` |
| Muted bg | Gris cálido | `#E8E6E3` |
| Muted fg | Gris oscuro | `#595959` |
| Accent | LED blanco cálido | `#FFF8DC` |
| CTA | Verde WhatsApp | `#25D366` |

All colors have warm undertones — even neutrals lean warm beige, never cool gray.

### Typography
- **Font:** Outfit (Google Fonts, weights 300–800)
- **Display:** `font-bold` 700–800, `letter-spacing: -0.02em`, `text-wrap: balance`
- **Headings:** `font-semibold` 600, `leading-snug`
- **Body:** `font-normal` 400, `leading-relaxed`
- **Labels:** `text-xs font-medium uppercase tracking-wider`
- No serif font. Outfit provides warmth through rounded terminals.

### Spacing & Layout
- Container max-width: 1400px, centered, `padding: 2rem`
- Section vertical rhythm: `80–96px` (`py-20 md:py-24`)
- Grid: 1–3 columns, `gap: 32–48px`
- Cards: `overflow-hidden`, subtle border, `shadow-sm → shadow-lg` on hover

### Borders & Radius
- Global radius: `12px` (`--radius: 0.75rem`)
- `rounded-lg` = 12px, `rounded-md` = 10px, `rounded-sm` = 8px
- `rounded-2xl` = 16px (used on catalogue image containers)
- Borders: `border-border/40` or `border-border/50` (semi-transparent warm gray)

### Shadows
- `shadow-warm`: `0 4px 6px -1px rgba(139,115,85,0.10)` — warm-tinted subtle
- `shadow-warm-lg`: `0 10px 15px -3px rgba(139,115,85,0.10)` — elevated warm

### Animation & Motion
- Library: Framer Motion
- Entrance: `opacity 0→1, y 20→0`, 0.6–0.8s, staggered `index × 0.15s`
- Viewport: `whileInView`, `once: true`, margin `-100px`
- Image hover: `scale-105`, 500ms CSS transition
- Hover overlays: `opacity 0→100`, 300ms
- Easing: `ease-in-out`. No bounces.
- Active press: `active:scale-[0.98]`

### Iconography
- Library: Lucide React (stroke icons, 1.5px, rounded caps)
- Sizes: `16px` inline, `20px` nav, `28px` FAB, `32px` feature icons
- Feature icon containers: `64×64px`, `rounded-xl`, `bg-primary/10 text-primary`

### Photography
- Warm, natural-light interiors. Oak and linen tones, earthy backgrounds.
- Hero: full-bleed, dark gradient overlay `from-black/50 → to-black/60`
- Product: `object-cover`, hover `scale-105`, `h-256–320px`
- No SVG illustration. Purely photographic.
