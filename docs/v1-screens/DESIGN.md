---
name: Sonic Utility
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393d'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b1f'
  surface-container: '#1e1f23'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343539'
  on-surface: '#e3e2e7'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e3e2e7'
  inverse-on-surface: '#2f3034'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#c8c6c8'
  on-secondary: '#303032'
  secondary-container: '#474649'
  on-secondary-container: '#b6b4b7'
  tertiary: '#ffb595'
  on-tertiary: '#571e00'
  tertiary-container: '#ef6719'
  on-tertiary-container: '#4c1a00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e4e2e4'
  secondary-fixed-dim: '#c8c6c8'
  on-secondary-fixed: '#1b1b1d'
  on-secondary-fixed-variant: '#474649'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb595'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7c2e00'
  background: '#121317'
  on-background: '#e3e2e7'
  surface-variant: '#343539'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  headline-md:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  metadata:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-padding: 20px
  gutter: 12px
---

## Brand & Style
The brand personality is professional, hyper-functional, and high-fidelity. It targets power users and audiophiles who prioritize content over visual flair. The UI evokes a sense of organized precision, similar to studio hardware or high-end technical instruments.

This design system utilizes a **Minimalist** style with **Corporate/Modern** influences. It avoids all forms of decorative noise, such as gradients, background blurs, or drop shadows. The aesthetic is defined by flat surfaces, strict alignment, and "content-first" hierarchy where the album artwork and typography provide the only visual character.

## Colors
The palette is strictly dark-mode focused to reduce eye strain and emphasize the vibrant primary blue. 

- **Primary Blue:** Used exclusively for active states, playback progress, and primary call-to-action buttons.
- **Surface Strategy:** A true black (`#000000`) background is used for the main canvas to optimize for OLED displays. UI containers and cards use a deep charcoal (`#121212` or `#1C1C1E`) to create subtle separation.
- **Functional Grays:** Text is tiered between pure white for headlines and a muted neutral gray for metadata and secondary labels.

## Typography
The system relies on high-quality system sans-serifs (Inter is used here as the utilitarian proxy for SF Pro and Roboto). 

- **Weight Contrast:** Bold weights are applied to all titles and headers to ensure a clear information hierarchy against the dark background.
- **Metadata Treatment:** All secondary information (artist names, album years, durations) uses a muted gray color and a slightly smaller scale to keep the focus on the primary content.
- **Case Usage:** Labels for navigation and small headers may use uppercase with increased letter spacing for a technical, "labeled equipment" feel.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous safe-area margins. Content is prioritized through significant vertical breathing room between sections.

- **Rhythm:** A 4px baseline grid ensures consistent alignment. 
- **Padding:** Screen edges maintain a minimum of 20px padding. Vertical lists and horizontal carousels use 16px (md) spacing between items to prevent accidental taps and visual clutter.
- **Content-First:** Padding within cards is minimized to allow the artwork to occupy maximum space, while external margins are increased to define distinct functional zones.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-contrast Outlines** rather than shadows. 

- **Layering:** The base layer is black. Cards and persistent elements (like the mini player) are elevated by using a slightly lighter gray surface (`#1C1C1E`).
- **Separation:** 1px solid borders in a very dark gray (`#2C2C2E`) are used to define the edges of the bottom tab bar and the mini player, ensuring they feel physically distinct from the scrolling content beneath them.
- **Flatness:** No ambient shadows or blurs are permitted. If an element needs to stand out, its background color is shifted, or a primary-colored accent is added.

## Shapes
The shape language is structured and uniform. 

- **Standard Radius:** All cards, buttons, and artwork thumbnails use a base radius of 8px to 12px.
- **Artwork:** Album covers must remain square but with the 12px corner radius applied to soften the utilitarian edge.
- **Interactive Elements:** Circular shapes are reserved strictly for the primary playback controls (Play/Pause) to distinguish them from navigation or secondary actions.

## Components
- **Artwork Thumbnails:** Square aspect ratio with a 12px border radius. Include a 1px inner stroke for light-colored artwork to maintain definition.
- **Play Buttons:** Main player controls are circular. The primary Play button is a solid blue circle with a white icon. Secondary controls (Skip, Repeat) are icon-only in white or gray.
- **Lists:**
    - *Vertical:* Used for tracklists. Item height of 64px, featuring leading artwork (48px) and stacked title/metadata.
    - *Horizontal:* Used for "Recommended" or "Recent" carousels. Artwork-centric with titles placed below the image.
- **Mini Player:** A persistent, floating or docked bar (approx. 64px height) that sits above the bottom tab bar. It uses a solid surface color and contains a small thumbnail, track title, and a play/pause toggle.
- **Bottom Tab Bar:** A rigid, 1px-bordered container with clear, simple icons. The active tab is indicated by the primary blue color.
- **Progress Bars:** Thin 4px tracks. The "filled" portion is primary blue, while the "unfilled" portion is a dark neutral gray.