# Academic Portfolio

A modern, responsive academic portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Project Structure

```
academic-portfolio/
├── client/
│   ├── public/
│   │   ├── favicon.svg          # Site favicon
│   │   └── profile.webp         # Profile image
│   ├── src/
│   │   ├── components/ui/       # Reusable UI components (Button, Card, Badge, etc.)
│   │   ├── contexts/            # Theme context
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/utils.ts         # Utility functions
│   │   ├── pages/Home.tsx       # Main portfolio page (all sections)
│   │   ├── index.css            # Global styles & theme variables
│   │   ├── App.tsx              # App entry with providers
│   │   └── main.tsx             # React DOM entry
│   └── index.html               # HTML template
├── CONTENT_REFERENCE.md         # Reference of all portfolio content
└── package.json                 # Dependencies and scripts
```

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

---

## How to Add a New Section

All sections are defined in `client/src/pages/Home.tsx`.

### Step 1: Add Data (if needed)

At the top of `Home.tsx`, add a data constant for your new section:

```typescript
// Example: Adding a "Volunteer Work" section
const volunteerData = [
  { 
    title: "AI Workshop Instructor", 
    organization: "Local Community Center", 
    year: "2024",
    description: "Taught introductory AI concepts to high school students"
  },
  // Add more items...
];
```

### Step 2: Add the Section JSX

Find where you want to insert your section (between existing `<section>` tags) and add:

```tsx
{/* Volunteer Section */}
<section id="volunteer" className="py-20 bg-white">
  <div className="container mx-auto px-6 md:px-12 lg:px-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-4xl [font-family:Poppins] font-bold text-foreground mb-2 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <Heart className="w-5 h-5 text-blue-600" />
        </div>
        Volunteer Work
      </h2>
      <p className="text-muted-foreground">Community involvement and outreach</p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {volunteerData.map((item, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {item.organization} • {item.year}
            </p>
            <p className="text-sm text-foreground">{item.description}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
```

### Step 3: Add Navigation Link (optional)

In the `<nav>` section at the top, add a link:

```tsx
<a href="#volunteer" className="text-sm font-medium hover:text-primary transition">
  Volunteer
</a>
```

### Step 4: Import Icons (if needed)

Add any new icons to the lucide-react import at the top:

```typescript
import { Heart } from "lucide-react";  // Add to existing import
```

---

## How to Remove a Section

### Step 1: Remove the Section JSX

Find the section you want to remove in `Home.tsx`. Each section is wrapped in a `<section>` tag with an `id`. Delete the entire section block:

```tsx
{/* Delete everything from <section id="sectionName"> to </section> */}
```

### Step 2: Remove Navigation Link

Remove the corresponding `<a href="#sectionName">` from the nav.

### Step 3: Remove Data (optional)

Remove the associated data constant at the top of the file if no longer needed.

### Step 4: Remove Unused Imports

Remove any icons or components that are no longer used.

---

## How to Change Styling

### Theme Colors

All theme colors are defined in `client/src/index.css` using CSS variables:

```css
:root {
  --primary: #1e40af;           /* Main brand color (blue) */
  --primary-foreground: #f0f9ff; /* Text on primary background */
  --accent: #06b6d4;            /* Accent color (cyan) */
  --accent-foreground: #0c4a6e;  /* Text on accent background */
  --background: #ffffff;         /* Page background */
  --foreground: #1e293b;         /* Main text color */
  --card: #f8fafc;              /* Card background */
  --card-foreground: #1e293b;    /* Card text color */
  --muted: #e2e8f0;             /* Muted backgrounds */
  --muted-foreground: #64748b;   /* Muted text */
  --border: #e2e8f0;            /* Border color */
  --radius: 0.65rem;            /* Border radius */
}
```

**To change the color scheme:**

1. Open `client/src/index.css`
2. Modify the hex values in `:root` for light mode
3. Modify values in `.dark` for dark mode

**Example - Change to Purple Theme:**

```css
:root {
  --primary: #7c3aed;           /* Purple */
  --accent: #a855f7;            /* Light purple */
  /* ... other variables */
}
```

### Section Backgrounds

Each section uses Tailwind classes for backgrounds:

- `bg-white` - White background
- `bg-slate-50` - Light gray background
- `bg-gradient-to-br from-blue-50 to-white` - Gradient background

**To change a section background:**

Find the section and modify the `className`:

```tsx
// Before
<section className="py-20 bg-white">

// After (gray background)
<section className="py-20 bg-slate-50">

// After (gradient)
<section className="py-20 bg-gradient-to-br from-purple-50 to-white">
```

### Typography

Font families are controlled via Tailwind classes:

- `[font-family:Poppins]` - Used for headings
- Default system font stack for body text

**To change heading font:**

1. Add font import in `client/index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
   ```

2. Update classes in `Home.tsx`:
   ```tsx
   // Change from
   <h2 className="text-4xl [font-family:Poppins] font-bold">
   
   // To
   <h2 className="text-4xl [font-family:Inter] font-bold">
   ```

### Spacing

Sections use `py-20` for vertical padding. Common spacing utilities:

- `py-12` - Less spacing
- `py-20` - Default spacing
- `py-24` - More spacing
- `gap-4` / `gap-6` - Grid/flex gaps

### Card Styling

Cards use the `<Card>` component from `components/ui/card.tsx`:

```tsx
// Basic card
<Card className="p-6">Content</Card>

// Card with hover effect
<Card className="p-6 hover:shadow-lg transition-shadow">Content</Card>

// Card with colored border
<Card className="p-6 border-l-4 border-accent">Content</Card>
```

### Animations

Animations use Framer Motion. Key variants are defined at the top of `Home.tsx`:

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

**To adjust animation speed:**

```typescript
// Slower stagger
transition: { staggerChildren: 0.2 }

// Faster stagger
transition: { staggerChildren: 0.05 }
```

---

## Common Customizations

### Update Profile Information

Edit the Hero section in `Home.tsx`:

```tsx
<h1 className="text-5xl font-bold">Your Name</h1>
<p className="text-lg">Your title and description</p>
```

### Update Contact Links

Find the contact section and update:

```tsx
<a href="mailto:your-email@example.com">
<a href="https://linkedin.com/in/your-profile">
```

### Change Profile Image

Replace `client/public/profile.webp` with your image (recommended: WebP format, ~400x400px).

### Update Favicon

Edit `client/public/favicon.svg` or replace with your own icon.

---

## Useful Tailwind Classes Reference

| Class | Purpose |
|-------|---------|
| `text-foreground` | Main text color |
| `text-muted-foreground` | Secondary text color |
| `text-primary` | Primary brand color text |
| `bg-primary` | Primary background |
| `bg-accent` | Accent background |
| `hover:shadow-lg` | Shadow on hover |
| `transition-all` | Smooth transitions |
| `rounded-lg` | Rounded corners |

---

## Need Help?

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/icons/)
