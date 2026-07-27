# Cinematic PM Portfolio — PRD

## Problem Statement
High-fidelity, cinematic Product Management portfolio with a "liquid-glass" design system, shared components, and a striking animated hero. Award-worthy (Awwwards-level) motion and craft.

## User Choices
- Placeholder/sample content (editable in /app/frontend/src/data/content.js)
- Sections: Hero, About, Skills, Past Product Work, Case Studies, Product Improvement (manifesto), Side Projects, Contact
- Static showcase (NO backend)
- Deep dark cinematic base + vibrant accents (agent-chosen palette)

## Architecture
- Frontend only (React 19 + CRA/craco + Tailwind). Backend/Mongo untouched & unused.
- Fonts: Cabinet Grotesk (head), Satoshi (body), JetBrains Mono (accent) via Fontshare/Google.
- Motion: framer-motion (reveals, parallax, masked hero, magnetic button), lenis (smooth scroll), react-fast-marquee.
- Palette: #050505 base, #00F0FF cyan + #FF007A magenta accents; liquid-glass (.glass) + grain overlay.

## Implemented (2026-07-27)
- Lenis smooth scroll wired in App.js (respects prefers-reduced-motion)
- Hero: masked line-by-line on-load reveal + parallax cinematic bg + scroll indicator
- Glass navbar w/ scroll-aware background + Lenis anchor scroll
- Editorial marquee, About (grayscale spotlight portrait + stat grid), Skills glass cards
- Past Work: per-item image parallax + outline index numbers
- Case Studies: glass cards, cyan/magenta accents, hover lift + glow, metric overlays
- Manifesto: 6 numbered chapters (mono numerals)
- Side Projects: bento cards w/ tech tags; Contact: giant CTA + magnetic email button + socials
- All interactive/informational elements have data-testid
- Verified via screenshots across all sections; no console errors

## Backlog / Next
- P1: Individual case-study detail pages/routes
- P1: Replace placeholder copy & product imagery with real content
- P2: Contact form w/ backend storage + Resend email notifications
- P2: Light/dark toggle; SEO meta + OG image; blog/writing section
