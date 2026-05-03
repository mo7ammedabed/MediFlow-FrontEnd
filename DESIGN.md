---
name: Clinical Precision
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display-kpi:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  h1-bold:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  h2-semibold:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-margin: 24px
  gutter: 16px
  sidebar-width-expanded: 240px
  sidebar-width-collapsed: 64px
  table-row-height: 40px
---

## Brand & Style

The brand personality for this design system is authoritative, hyper-efficient, and clinical. Designed for the "Command Center" experience of the MediFlow Admin Web Portal, the UI prioritizes data density and rapid cognitive processing over decorative elements. The target audience consists of healthcare administrators and data analysts who require a "heads-up display" (HUD) for complex logistical workflows.

The design style is **Corporate / Modern** with a lean towards **High-Density Minimalism**. It utilizes a structured, grid-based architecture to manage vast amounts of information without overwhelming the user. The aesthetic evokes a sense of reliability and expert control, ensuring that critical medical data is always the primary focus.

## Colors

The color palette is anchored by **Deep Professional Blue** (#0F172A), used for high-level navigation and the sidebar to establish a strong structural frame. **Slate Gray** is employed for text and borders to maintain a soft but legible contrast that reduces eye strain during long shifts.

**Vibrant Blue** (#2563EB) is reserved exclusively for primary actions and interactive states, ensuring a clear "scent of information." The semantic system uses standard medical-industry conventions: **Success Green** for completed records, **Error Red** for urgent alerts, **Warning Yellow** for pending approvals, and **Info Cyan** for neutral status updates. The background uses a very light cool gray (#F8FAFC) to differentiate the dashboard canvas from white surface cards.

## Typography

This design system utilizes **Inter** for its exceptional legibility at small sizes and its robust tabular-numeric support. For a "Command Center" feel, we employ a high-contrast typographic scale where KPI numbers are bold and prominent, while data tables use a slightly reduced 13px font size to increase density.

Tabular data must always use **tabular-nums** (tnum) to ensure that columns of figures align vertically for quick scanning. Labels for table headers and metadata should use the `label-caps` style to distinguish them from dynamic content.

## Layout & Spacing

The layout follows a **Fluid Grid** model designed for 1920x1080 resolution, maximizing the horizontal real estate. A 12-column system is used for dashboard widgets, while data-heavy pages utilize a "Side-Rail" layout where the primary table spans the majority of the screen width.

Spacing is based on a strict 4px baseline grid. To achieve the "high-density" requirement, vertical padding in tables is kept to a minimum (8px top/bottom), and horizontal gutters are set to 16px. This allows for more rows to be visible above the fold, facilitating comprehensive data monitoring.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**. 

- **Level 0 (Canvas):** The #F8FAFC background.
- **Level 1 (Surface):** White cards used for widgets and table containers, featuring a 1px border in Slate-200 (#E2E8F0).
- **Level 2 (Popovers):** Modals and dropdown menus use a very subtle, highly diffused shadow (0px 4px 12px rgba(0,0,0,0.05)) to separate them from the interface without breaking the flat, professional aesthetic.
- **Sidebars:** The primary navigation uses a dark background to create a "frame" around the content, providing a clear psychological boundary between navigation and data.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a professional, modern look that feels precise but not aggressive. 

- **Primary Buttons & Inputs:** 4px border-radius.
- **Status Badges & Chips:** 2px or fully pill-shaped (16px) depending on the context, to distinguish them from clickable action elements.
- **Dashboard Widgets:** 8px border-radius (rounded-lg) to provide a slightly softer container for groups of data.

## Components

### Data Tables
Tables are the core of the experience. They must support "Zebra Striping" (even/odd row colors) and "Hover States." Headers remain sticky during scroll. Filtering is handled via a dedicated "Filter Bar" above the table containing compact select menus and search inputs.

### Collapsible Sidebar
The sidebar features two states: Expanded (showing icons and text labels) and Collapsed (icons only). The active state is indicated by a 3px vertical accent line in Vibrant Blue on the left edge.

### Interactive Charts
Charts use a refined palette derived from the primary and semantic colors. Line charts use a 2px stroke width with subtle area gradients. Tooltips are dark-themed to contrast against the white canvas.

### Notification Badges
Badges are small, high-contrast circles placed on the top-right of icons. They utilize the Semantic Red for urgent alerts and Primary Blue for general updates.

### Input Fields
Inputs use a "Flat" style with a 1px Slate-200 border. On focus, the border transitions to Vibrant Blue with a subtle 2px outer glow. Labels are placed above the input field in the `label-caps` typography style.

## Technical Architecture & Modularization

Following recent project updates, the MediFlow dashboard system has transitioned from a monolithic architecture to a highly modular file structure. This technical design choice aligns with our goal of maintainability and scalable performance:

- **Separation of Concerns:** Inline styles and scripts have been fully extracted. HTML handles structure, CSS handles styling (alongside Tailwind), and JS handles logic.
- **Tailwind Integration:** Tailwind CSS is utilized as the primary engine for styling, applying the design tokens (colors, typography, spacing) defined in this document directly into the HTML markup.
- **Component Reusability:** By segregating the codebase into `html`, `css`, and `js` directories, UI components (such as the Sidebar, Data Tables, and KPI Cards) can share common stylesheets and behavioral scripts, ensuring design consistency across all 8 dashboard pages.