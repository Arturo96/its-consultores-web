# Design System Document: High-End Cybersecurity Editorial

## 1. Overview & Creative North Star

This design system is engineered to elevate IT & Security Consultores S.A.S. from a traditional service provider to a premium cybersecurity authority. Moving away from standard corporate templates, this system adopts a **"Cyber-Spatial Transparency"** North Star.

The goal is to visualize protection not as a heavy, opaque wall, but as an advanced, luminous field of energy. We achieve this through "Atmospheric Depth"—a combination of deep tonal layering, refractive glass elements, and a high-contrast typographic scale. The layout should feel like a high-end digital cockpit: sophisticated, precise, and intentionally spacious. We break the grid through overlapping glass panes and "cybernetic net" textures that bleed across sections, ensuring the experience feels cohesive rather than modular.

---

## 2. Colors

The palette is anchored in the deep obsidian of the digital void, punctuated by high-frequency light.

### Tonal Logic
- **Primary (`#4cd6fb`):** Used for critical interaction points and "active" security states. 
- **Surface & Background (`#001233`):** The foundation. It is never pure black, but a deep, pressurized navy that provides more "soul" and depth than hex #000.
- **Tertiary (`#ffb77d`):** Reserved strictly for high-priority warnings or secondary accents to provide a warm counterpoint to the cool-toned environment.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be established through:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Negative Space:** Using the Spacing Scale to create "islands" of content.
3.  **Luminous Gradients:** Using a subtle transition from `primary` to `primary-container` (at low opacity) to "wash" a section in light.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base Layer:** `surface` (The deep navy background).
- **Secondary Sectioning:** `surface-container-low` (Subtle lift).
- **Interactive Cards:** `surface-container-highest` with a `backdrop-blur` of 12px-20px. 

### The "Glass & Gradient" Rule
To achieve a signature look, all floating containers must utilize **Glassmorphism**. Apply `surface-variant` at 40% opacity with a `backdrop-filter: blur(16px)`. This allows the "cybernetic net" background textures to refract through the UI, creating an integrated, high-end feel.

---

## 3. Typography

The typography strategy pairs technical precision with editorial authority.

- **Display & Headlines (Plus Jakarta Sans):** These must be set with tight letter-spacing (-0.02em) and heavy weights. The "Montserrat Black" aesthetic is achieved here—bold, geometric, and imposing. Use `display-lg` for hero statements to command immediate attention.
- **Body & Labels (Manrope):** A highly legible, "tech-adjacent" sans-serif. It provides a clean, functional contrast to the aggressive headings.
- **Hierarchy as Identity:** Use extreme scale contrast. A `display-lg` header paired with a `label-md` uppercase sub-header creates an "editorial" look that feels custom-designed rather than "filled-in."

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than traditional drop shadows.

- **The Layering Principle:** Stack tiers to create focus. A `surface-container-lowest` card placed on a `surface-container-high` section creates a "recessed" look, while the inverse creates a "lifted" look.
- **Ambient Shadows:** Standard shadows are forbidden. If a "floating" effect is required, use a shadow color tinted with the background (`#001233`), with a blur radius of at least 40px and an opacity no higher than 8%. It should look like a soft glow, not a shadow.
- **The "Ghost Border":** For glass elements, use a 1px border using `outline-variant` at **15% opacity**. This simulates the "edge" of a piece of glass catching a light source without creating a hard visual stop.
- **Cybernetic Netting:** Background imagery (tech-shields/abstract nets) should sit between the `surface` and `surface-container` layers, appearing partially obscured by the glass cards.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill from `primary` to `primary_container`. Roundedness: `full`. Text must be `on_primary_fixed` for maximum contrast. Apply a subtle outer glow (0px 0px 15px) using the primary color at 30% opacity on hover.
- **Secondary:** Transparent fill with a "Ghost Border" (`outline`). On hover, the background shifts to `surface_variant` at 20% opacity.

### Glass Cards
- **Styling:** Use `surface_container_highest` at 50% opacity.
- **Constraints:** No internal dividers. Separate content using `8px` or `16px` vertical rhythm.
- **Header:** Use `title-lg` in `primary` color to anchor the card.

### Input Fields
- **Base:** `surface_container_lowest` with a "Ghost Border."
- **Focus State:** Border color shifts to `primary` at 100% opacity with a 2px thickness. Helper text uses `secondary` to remain non-intrusive.

### Chips (Security Tags)
- Small, pill-shaped (`rounded-full`) using `secondary_container` background and `on_secondary_container` text. These should feel like metadata tags on a digital dossier.

---

## 6. Do's and Don'ts

### Do:
- **Do** use intentional asymmetry. Overlap a glass card slightly over a background "shield" graphic.
- **Do** use `primary` sparingly. It is a "light source" in the design; too much of it will "blind" the user and devalue the premium feel.
- **Do** ensure all text on glass meets WCAG AA contrast ratios by adjusting the opacity of the backdrop-blur.

### Don'ts:
- **Don't** use pure yellow or harsh oranges (remnants of legacy branding). Use the `tertiary` token for alerts.
- **Don't** use standard 1px dividers. If you need to separate content, use a `surface-variant` horizontal gradient that fades to 0% at the edges.
- **Don't** use sharp corners. Every element must adhere to the Roundedness Scale (minimum `md: 0.75rem`) to feel modern and sophisticated.
- **Don't** use heavy, opaque backgrounds for cards. If it doesn't have a `backdrop-blur`, it doesn't belong in this system.