---
name: design-review
description: Use before and after any visual change to this site's React/Tailwind components (Home, Pricing, Contact, CGV, MentionLegal, PolitiqueConfidentialite, Navbar, layout, etc.) — new sections, restyled cards, color/typography/spacing changes, animations. Also use when the user asks to "improve the design", "make it look better", "ajouter du style", or review a page's look and feel. Not for pure logic/bug fixes with no visual surface.
---

# Design review for pf-freelance

This is a freelance developer's portfolio/marketing site (React + TypeScript + Vite + Tailwind, `framer-motion` for animation, `lucide-react` / `react-icons` for icons). Audience: prospective clients evaluating whether to hire the site's owner. The site currently ships **light mode only** — no `dark:` classes, no theme toggle. Don't add dark-mode variants speculatively; if asked to add dark mode, treat it as its own task, not a byproduct of a styling change.

## Calibrate treatment, don't over-design

This is a commercial landing/marketing site — it *is* the editorial case (it exists to be shared, to persuade, to be memorable), but most individual asks here are incremental: a new pricing card, a section rewrite, a spacing fix. Match effort to the ask:
- A single section/component tweak → polish it well, don't redesign the whole page.
- A new page or a "make this section better" ask → apply the full process below.
- Never bolt on a giant new hero, gradient blob, or animation just because one exists elsewhere on the page — check the neighboring sections first (`Home.tsx`, `Pricing.tsx`) and stay consistent with them rather than inventing a new visual language per-section.

## Honor what's already there

Before touching CSS/Tailwind classes:
1. Check `tailwind.config.js` for existing custom `animation`/`keyframes` (`gradient-x`, `blob`, `float`, `spin-slow`, `pulse-ring`) and reuse those instead of inventing new ones.
2. Check `src/index.css` for existing utility classes (e.g. `.animation-delay-2000`).
3. Grep sibling components for the color/spacing/radius conventions already in use (e.g. what blue/purple/accent Tailwind shades `Home.tsx` and `Pricing.tsx` already lean on) before picking new ones — this site should read as one system across pages, not a patchwork.

## Fundamentals that still apply

- **Ground it in the subject.** This is a dev-for-hire site: the visual language should read as competent, current, technical — not generic SaaS-template. Real copy always (services actually offered, real pricing tiers), never lorem/placeholder text.
- **Typography.** Keep body copy near 65 characters per line in prose blocks (testimonials, legal pages, service descriptions). Stay on whatever type scale Tailwind's `text-*` classes already establish in the file being edited — don't introduce a one-off `text-[17px]`.
- **Neutrals are a choice.** If a section needs a grey, pick one with a slight bias toward the site's accent hue rather than reaching for plain `gray-500` by default.
- **Layout via flex/grid + gap.** Prefer `gap-*` utilities over stacking `mb-*`/`mt-*` on siblings, which is how spacing bugs (doubled or collapsed margins) creep into Tailwind markup.
- **Avoid AI-generated-design defaults**: no purple-to-blue gradient hero as a default reach, no `rounded-lg` applied reflexively to every card, no emoji as section markers, no everything-centered layouts. If the existing pages already use a gradient/blob motif (they do — see `animate-blob`, `gradient-x`), that's this site's established identity, not a generic default — keep using it consistently rather than introducing a competing look.
- **Motion.** `framer-motion` is already a dependency — prefer it for orchestrated reveals/hover states over ad-hoc CSS transitions when the interaction is non-trivial. Respect restraint: one deliberate motion idea per section, not scattered micro-animations. Respect `prefers-reduced-motion` for anything beyond subtle hover states.
- **Build cleanly.** Watch Tailwind class specificity conflicts (e.g. a shared `.section`-like wrapper fighting a component's own padding/margin utilities), keyboard focus states on interactive elements (buttons, links, form inputs — this site has real forms via `Contact.tsx` and Stripe checkout), and check both mobile and desktop breakpoints (`sm:`/`md:`/`lg:`) since this is a client-facing marketing site.

## Process for anything beyond a small tweak

1. State a one-line design intent: what this section/page needs to communicate and to whom.
2. Note the palette/type/spacing conventions already found in sibling files (per "Honor what's already there").
3. Make the change, then verify visually — use `claude-in-chrome` or the `run` skill to load the dev server and check the actual rendered page (not just the diff) at both mobile and desktop widths before calling it done.
