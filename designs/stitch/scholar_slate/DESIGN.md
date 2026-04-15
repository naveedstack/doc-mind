```markdown
# Design System Specification: The Academic Sanctuary

## 1. Overview & Creative North Star
**Creative North Star: "The Focused Curator"**

This design system is engineered to facilitate deep cognitive work. Moving away from the frenetic, high-saturation "gamification" seen in many study tools, this system adopts an editorial, high-end SaaS aesthetic. It treats the user’s focus as a finite, precious resource.

To break the "standard template" look, we employ **Intentional Asymmetry** and **Tonal Depth**. By avoiding rigid, boxed-in grids and opting for varying content widths and overlapping surfaces, we create a layout that feels curated rather than generated. The experience should feel like a high-end physical workspace: clean, organized, and quietly sophisticated.

---

## 2. Colors & Surface Logic

### Palette Philosophy
We utilize a base of **Slate (`primary`)** for authoritative structural elements and **Deep Indigo (`secondary`)** as a surgical tool for focus. Note: We strictly avoid "Action Blue"; our Indigo is leaned toward the violet spectrum to feel more like premium ink than a digital link.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections.
Boundaries must be created through:
- **Background Shifts:** Placing a `surface-container-low` component against a `surface` background.
- **Negative Space:** Using generous padding (32px+) to define content blocks.
- **Tonal Transitions:** Subtle shifts in color temperature to guide the eye.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, premium paper stocks.
- **Level 0 (Base):** `surface` (#f7f9fb) – The desk.
- **Level 1 (Sections):** `surface-container-low` (#f0f4f7) – Large organizational zones.
- **Level 2 (Cards):** `surface-container-lowest` (#ffffff) – Individual interactive units. This "Inverse Elevation" (putting white on light gray) creates a crisp, modern lift.

### The "Glass & Gradient" Rule
To inject "soul" into the professional Slate palette, main CTAs and Hero backgrounds should utilize a subtle linear gradient: `primary` (#515f74) to `primary-dim` (#455368) at a 135-degree angle. Floating panels (like sidebars or floating action bars) should use a backdrop-blur (12px-20px) with a semi-transparent `surface-container-lowest` to feel integrated into the environment.

---

## 3. Typography
We use a dual-font system to balance character with utility.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "tech-editorial" feel. Use `display-lg` for welcome states and `headline-sm` for section headers.
*   **Body & UI (Inter):** The workhorse. Inter’s tall x-height ensures legibility during long reading sessions. Use `body-md` for general notes and `label-sm` for metadata.

**Editorial Scaling:** Don't be afraid of contrast. A `display-md` headline paired with a `body-sm` caption creates a high-end, asymmetric hierarchy that feels intentional and premium.

---

## 4. Elevation & Depth

### The Layering Principle
Forget traditional drop shadows for every card. Use **Tonal Layering**. 
*   *Example:* An active study session panel (`surface-container-highest`) sitting on a general workspace (`surface-container-low`). The 4-step difference in token value provides all the separation needed.

### Ambient Shadows
When an element must "float" (e.g., a modal or a floating action button):
- **Blur:** 24px - 40px.
- **Opacity:** 4% - 6%.
- **Tint:** Use a shadow color derived from `on-surface` (#2a3439), never pure black. This mimics natural ambient occlusion.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., input fields), use the `outline-variant` token (#a9b4b9) at **15% opacity**. This "Ghost Border" provides a hit of structure without breaking the minimalist flow.

---

## 5. Components

### Buttons
*   **Primary:** Slate gradient (`primary` to `primary-dim`), white text, 12px (`md`) rounded corners.
*   **Secondary:** `secondary-container` (#e3dfff) with `on-secondary-container` (#4338ca) text. High contrast, used for the "Next Step" in a workflow.
*   **Tertiary:** No background. `primary` text. Use for low-priority actions.

### Input Fields
Strictly use the **Soft-Inset style**. Background: `surface-container-high`. No border, except for the "Ghost Border" on focus. 12px corner radius. Focus state is indicated by a 2px `secondary` (Indigo) bottom-bar only.

### Cards & Lists
**Forbid the use of divider lines.** 
*   Separate list items using `12px` of vertical white space.
*   For complex lists, use alternating backgrounds (`surface-container-low` vs `surface-container-lowest`).

### Study-Specific Components
*   **Focus Timer:** A large `display-lg` Manrope readout using `primary-fixed`. 
*   **Knowledge Chips:** Selection chips using `secondary-fixed-dim` backgrounds with `on-secondary-fixed` text to denote active tags or subjects.
*   **The "Deep Work" Toggle:** A custom oversized switch that, when active, transforms the `surface` to `surface-dim` to physically signal a change in the environment.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. If the left margin is 80px, try a 120px right margin for a more editorial feel.
*   **Do** embrace white space. If a section feels "tight," double the padding.
*   **Do** use "Indigo" (#4338ca) only for the single most important action on a screen.

### Don't:
*   **Don't** use 1px solid, opaque borders. They are the enemy of this system's "Soft Minimalism."
*   **Don't** use pure blue. Our Slate is cool, but it must remain gray/stone-toned to maintain professionalism.
*   **Don't** use hard shadows. If a shadow looks like a shadow, it’s too heavy. It should look like a "glow of depth."
*   **Don't** crowd the screen. If the user is studying, the UI should disappear, leaving only the content and the necessary tools.