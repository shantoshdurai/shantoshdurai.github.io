# Design System Document

## 1. Overview & Creative North Star: "The Analog Architect"

This design system is a sophisticated evolution of Neo-Brutalism, shifting away from generic "web" patterns toward a high-end, editorial aesthetic inspired by technical blueprints and architectural sketches. 

**Creative North Star: The Analog Architect**
The system rejects the "polite" softness of modern SaaS interfaces in favor of raw, intentional, and unapologetic structure. It utilizes a rigorous dot-grid foundation and heavy ink-black strokes to create a sense of permanence and "physicality." By combining high-contrast primary colors (Yellow, Purple, Blue) with an aggressive adherence to 0px border radii, we achieve a signature visual identity that feels both archival and cutting-edge. It is a digital space that celebrates its own construction.

---

## 2. Colors

The color palette is built on a foundation of high-contrast primitives. While the colors are bold, their application must be surgical to maintain a premium "editorial" feel rather than a chaotic one.

### Primary Palette
*   **Primary (Yellow):** `#6d5a00` | **Container:** `#fdd400`  
    *The "Informer." Used for high-priority highlights and key call-to-action blocks.*
*   **Secondary (Purple):** `#7541ac` | **Container:** `#e3c6ff`  
    *The "Disruptor." Used for section headers and distinct categorical tags.*
*   **Tertiary (Blue):** `#035f99` | **Container:** `#7ebefe`  
    *The "Utility." Used for interactive elements, links, and technical data.*

### Surface & Tonal Rules
*   **The "No-Line" Sectioning Rule:** To distinguish large structural sections, do not use thin 1px lines. Instead, swap the background from `surface` (`#f6f6f6`) to `surface-container-low` (`#f0f1f1`).
*   **Nesting Logic:** Always move "inward" toward brightness. A `surface-container` (`#e7e8e8`) section should host `surface-container-lowest` (`#ffffff`) cards to create a natural, tonal pop.
*   **Signature Textures:** Every layout must sit atop a 24px-spaced dot grid (using `on-surface-variant` at 15% opacity). This provides the "Analog Architect" feel and guides the eye through the white space.

---

## 3. Typography

The typographic scale is designed to mimic a technical journal. It pairs the geometric rigidity of **Space Grotesk** for display elements with the high-legibility of **Inter** for functional reading.

*   **Display (Space Grotesk):** Set with tight letter-spacing (-0.02em). Use `display-lg` (3.5rem) for hero statements. This is the "voice" of the portfolio.
*   **Headline (Space Grotesk):** Used for section titles. Must always be encased in a bold black border with a `secondary-container` or `tertiary-container` background to create "Title Blocks."
*   **Body (Inter):** Set at `body-lg` (1rem) for descriptions. High line-height (1.6) is mandatory to offset the visual weight of the bold outlines elsewhere.
*   **Label (Inter):** Used for tags and metadata. Always uppercase with increased letter-spacing (+0.05em) for a "blueprint" look.

---

## 4. Elevation & Depth: The "Hard Shadow" Principle

In this system, depth is not an illusion of light—it is a graphic statement.

*   **The Layering Principle:** Avoid traditional CSS box-shadows with blurs. Depth is achieved via **Hard Offsets**. A card should have a solid black (`#0c0f0f`) offset of 4px to 8px.
*   **Ambient Shadows (The Exception):** Only when an element is "actively floating" (e.g., a dragged item), use a large 32px blur at 8% opacity using the `on-surface` tint.
*   **The "Ghost Border" Fallback:** For secondary information that requires containment but not emphasis, use the `outline-variant` token at 20% opacity. 
*   **Glassmorphism Integration:** For navigation bars or fixed elements, use `surface` at 80% opacity with a `backdrop-filter: blur(12px)`. This softens the brutalism just enough to feel high-end.

---

## 5. Components

### Buttons & Chips
*   **Primary Button:** `primary-container` background, 2px solid `inverse-surface` border, 4px hard shadow. Hover state: shadow increases to 6px; Active state: shadow disappears (0px offset).
*   **Chips:** 1px solid black border. Backgrounds alternate between `surface-container-highest` (neutral) and `tertiary-container` (interactive). No rounded corners (0px).

### Input Fields
*   **Text Inputs:** `surface-container-lowest` background. 2px bottom-border only for "minimal" fields, or a full 2px box for "structural" fields. Label must be `label-md` placed strictly above the field.

### Cards & Lists
*   **Portfolio Cards:** Forbid the use of divider lines within a card. Use `3.5rem` (Spacing-10) of vertical white space to separate the header from the body content.
*   **Hard-Edge Rule:** All containers must have `0px` border-radius. Any rounding is a violation of the system's "Analog Architect" soul.

### The "Status" Indicator
*   A signature component for the 'Santosh Durai' style. A small box containing `label-sm` text (e.g., "STATUS: ONLINE") with a 1px border. Place in the top-right of containers to denote live data.

---

## 6. Do's and Don'ts

### Do:
*   **Asymmetry:** Offset containers by 1 or 2 grid dots to create a "drafted" look.
*   **High Contrast:** Use `on-primary-container` text on `primary-container` backgrounds to ensure AAA accessibility while maintaining the bold palette.
*   **Intentional Gaps:** Use the Spacing Scale (especially 8, 12, and 16) to let large headers breathe.

### Don't:
*   **No Border Radius:** Never use `border-radius`. Not even 2px.
*   **No Generic Icons:** Avoid thin, wispy icons. Use bold, filled, or high-stroke-weight iconography that matches the 2px line weight of the system.
*   **No Dividers:** Never use a horizontal rule `<hr>` to separate content. Use a background color shift or a literal 8.5rem gap.
*   **No Grey Shadows:** Never use `#ccc` or `#eee` for shadows. Shadows must be either `inverse-surface` (black) or a tonal shift of the background.