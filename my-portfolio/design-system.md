# Design System — AI Boss Portfolio (Next.js 14)
This document defines the UI/UX rules, tokens, and components used across the portfolio.  
It ensures consistency, scalability, and premium aesthetic quality.

---

# 1. Brand Colors

## 1.1 Primary Colors
| Token | Hex | Usage |
|-------|------|--------|
| premium.gold | #F7C17C | Highlights, gradient start |
| premium.purple | #A66CFF | Gradients, lighting |
| premium.blue | #6EC3F4 | Secondary highlight |
| premium.ocean | #004B82 | Deep backgrounds |

## 1.2 Neutral Colors
| Token | Hex | Usage |
|-------|------|--------|
| premium.dark | #0B0B0F | Main background |
| premium.light | #F5F7FA | Light text |
| white/xx | rgba | Borders, glass layers |

## 1.3 Utility Colors
| Token | Hex |
|-------|------|
| success | #4ade80 |
| error | #f87171 |

All of these live and are controlled through `tailwind.config.ts`.

---

# 2. Gradients

### 2.1 Gold Gradient
bg-grad-gold = linear-gradient(90deg, #F7C17C, #A66CFF)


### 2.2 Blue Gradient
bg-grad-blue = linear-gradient(90deg, #6EC3F4, #A66CFF)


### 2.3 Spotlight Cursor Gradient
radial-gradient(circle at cursor, rgba(166,108,255,0.25), transparent)


### 2.4 Depth Gradient (for 3D backdrop)
from-[#0B0B0F] to-transparent


---

# 3. Shadows

### 3.1 Soft Shadow
shadow-soft = 0 0 20px rgba(255,255,255,0.15)


### 3.2 Glow Shadow
shadow-glow = 0 0 30px rgba(166,108,255,0.6)


### 3.3 Deep Shadow for Cards
0 8px 24px rgba(0,0,0,0.3)


---

# 4. Typography

### 4.1 Font Families
--font-geist-sans (main UI font)
--font-geist-mono (technical text)


### 4.2 Font Scale
| Element | Size |
|---------|--------|
| h1 | 3.5rem–4rem |
| h2 | 2.5rem–3rem |
| h3 | 1.75rem–2rem |
| body-lg | 1.125rem |
| body | 1rem |
| label | 0.875rem |

### 4.3 Behaviors
- use `leading-tight`  
- use `tracking-wide` or `tracking-widest`  
- use `text-white/70` for secondary text  

---

# 5. Border Radius Tokens

| Token | Radius |
|--------|---------|
| rounded-xl | 12px |
| rounded-2xl | 16px |
| rounded-3xl | 20px |
| rounded-full | 9999px |

Usage:
- Buttons → rounded-xl  
- Cards → rounded-2xl  
- Containers → rounded-3xl  

---

# 6. Spacing System

### 6.1 Section Spacing
.section = py-24 md:py-32


### 6.2 Horizontal Padding
px-6 md:px-20

### 6.3 Card Padding
p-6 or p-10


### 6.4 Form Field Spacing
mb-6


---

# 7. Motion System

### 7.1 Entry Animations
```ts
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.7 }

staggerChildren: 0.08 – 0.12

bg-white/5
backdrop-blur-xl
border border-white/10
rounded-2xl
shadow-soft
hover:shadow-glow

bg-white/5
border border-white/10
focus:border-premium-purple
rounded-xl

a, button, input, textarea, [data-hover]

position: [0, 0, 5]
fov: 45


---

# Your Complete `design-system.md` Is Now Ready

You can copy the entire code block directly into a file named:

