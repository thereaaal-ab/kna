# KNA - Luxury Real Estate Agency Website

A premium, modern, and visually stunning real estate agency website built with Next.js, TypeScript, and TailwindCSS. This website represents excellence in real estate with a luxurious design that showcases premium properties in Morocco.

## 🎨 Design Features

- **Luxury Aesthetic**: Deep blacks, rich charcoal, white, and elegant gold accents
- **Premium Typography**: Playfair Display (serif) + Inter (sans-serif) combination
- **Generous Spacing**: Airy layouts with large margins for a luxury feel
- **Smooth Animations**: Elegant fade-in, parallax, and hover effects using Framer Motion
- **Cinematic Imagery**: Oversized real estate visuals with cinematic aspect ratios
- **Glass Morphism**: Modern glassmorphic design elements
- **Fully Responsive**: Pixel-perfect on mobile, tablet, and desktop

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx     # Footer component
│   ├── sections/
│   │   ├── HeroSection.tsx         # Full-screen hero with slideshow
│   │   ├── LogoSection.tsx         # Agency logo section
│   │   ├── FeaturedProperties.tsx  # Property listings
│   │   ├── WhyChooseUs.tsx         # Features section
│   │   ├── ExploreLocations.tsx    # Location grid
│   │   ├── Testimonials.tsx        # Client testimonials carousel
│   │   └── ContactCTA.tsx          # Contact call-to-action
│   └── search/
│       └── AdvancedSearchBar.tsx   # Property search form
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎯 Key Sections

1. **Hero Section**: Full-screen cinematic slideshow with 6 luxury property images
2. **Logo Section**: Center-aligned agency branding
3. **Advanced Search Bar**: Glassmorphic search form with multiple filters
4. **Featured Properties**: Luxury property cards with hover effects
5. **Why Choose Us**: Feature grid with elegant icons
6. **Explore Locations**: Grid showcasing Morocco regions
7. **Testimonials**: Carousel of client testimonials
8. **Contact CTA**: Dark section with gold accents and contact information
9. **Footer**: Comprehensive footer with links and contact details

## 🎨 Design System

### Colors
- **Luxury Black**: `#0A0A0A`
- **Charcoal**: `#1A1A1A`
- **Gold**: `#D4AF37`
- **Gold Light**: `#E5C158`
- **White**: `#FFFFFF`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing
- Generous padding and margins throughout
- Consistent spacing scale using Tailwind's spacing utilities

## ✨ Features

- ✅ Fully responsive design
- ✅ Smooth scroll animations
- ✅ Image optimization with Next.js Image component
- ✅ Accessibility best practices
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Modern glassmorphic UI elements
- ✅ Interactive hover effects
- ✅ Carousel/slideshow functionality

## 🔧 Customization

### Update Property Images
Replace the Unsplash image URLs in `components/sections/HeroSection.tsx` and `components/sections/FeaturedProperties.tsx` with your own property images.

### Modify Colors
Update the color palette in `tailwind.config.ts` under the `luxury` color object.

### Add More Properties
Extend the `featuredProperties` array in `components/sections/FeaturedProperties.tsx`.

### Update Contact Information
Modify contact details in `components/sections/ContactCTA.tsx` and `components/layout/Footer.tsx`.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is private and proprietary.

---

Built with ❤️ for KNA Real Estate Agency

