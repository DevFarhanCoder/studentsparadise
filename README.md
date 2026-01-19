# 🚀 NexoraGroups - Premium Multi-Business Website

A modern, animated, premium website showcasing NexoraGroups' three business verticals: Students Paradise (Education), Nexora IT Solutions (Technology), and AR Construction (Real Estate & Construction).

**Live Demo**: Ready for deployment on Vercel

## 🌟 Features

- **Premium Design**: Modern, non-boring UI with animations, gradients, and micro-interactions
- **Three Business Verticals**: Each with unique themes and dedicated pages
- **Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations throughout the site
- **SEO Optimized**: Built with Next.js App Router for excellent SEO
- **TypeScript**: Type-safe codebase for reliability
- **Tailwind CSS**: Utility-first styling with custom configurations

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
nexoragroups/
├── app/
│   ├── page.tsx                      # Main homepage
│   ├── students-paradise/
│   │   └── page.tsx                  # Students Paradise page
│   ├── nexora-it-solutions/
│   │   └── page.tsx                  # Nexora IT Solutions page
│   ├── ar-construction/
│   │   └── page.tsx                  # AR Construction page
│   ├── layout.tsx                    # Root layout
│   └── globals.css                   # Global styles
├── components/
│   ├── Navbar.tsx                    # Navigation component
│   ├── Footer.tsx                    # Footer component
│   ├── BusinessCard.tsx              # Business card component
│   ├── FeatureCard.tsx               # Feature card component
│   ├── StatsCounter.tsx              # Animated stats counter
│   └── AnimatedSection.tsx           # Animated section wrapper
├── data/
│   ├── mainData.ts                   # Main page data
│   ├── studentsParadise.ts          # Education page data
│   ├── nexoraIT.ts                  # IT solutions page data
│   └── arConstruction.ts            # Construction page data
├── types/
│   └── index.ts                      # TypeScript type definitions
├── lib/
│   └── utils.ts                      # Utility functions
└── public/                           # Static assets
```

## 🎨 Color Themes

Each business has its unique color theme:

- **Students Paradise**: Purple/Pink gradient (Education vibe)
- **Nexora IT Solutions**: Blue/Cyan gradient (Tech vibe)
- **AR Construction**: Orange/Yellow gradient (Construction vibe)

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Step 1: Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 2: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Step 3: Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Step 4: Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live in minutes!

### Deploy to Other Platforms

This Next.js app can also be deployed to:
- **Netlify**: Use the Netlify CLI or connect your Git repository
- **AWS Amplify**: Connect your repository and deploy
- **DigitalOcean App Platform**: Deploy directly from GitHub
- **Railway**: Connect and deploy in one click

## 📄 Pages Overview

### 1. Main Homepage (/)
- Hero section with animated background
- Business overview cards
- Why Choose NexoraGroups section
- Animated statistics counter
- Collaboration/Partnership section

### 2. Students Paradise (/students-paradise)
- Education-focused design with purple/pink theme
- Filterable program categories:
  - School (11th/12th)
  - Competitive Exams (JEE, NEET)
  - Commerce Programs
  - IT & Computer Courses
- Course cards with details
- Testimonials section

### 3. Nexora IT Solutions (/nexora-it-solutions)
- Tech-focused design with blue/cyan theme
- Services grid (Web Dev, Mobile Apps, Cloud, AI, etc.)
- Portfolio projects showcase
- Technology stack display
- CTA for project consultation

### 4. AR Construction (/ar-construction)
- Construction-focused design with orange/yellow theme
- Construction services
- Project gallery
- Construction process timeline
- Consultation CTA

## 🎭 Key Components

### Navbar
- Sticky navigation with scroll effect
- Smooth page transitions
- Mobile-responsive hamburger menu
- Active page indicator

### Footer
- Company information
- Quick links
- Social media links
- Contact information

### BusinessCard
- Animated hover effects
- Unique gradient per business
- Smooth transitions

### StatsCounter
- Animated number counting
- Triggers on scroll into view
- Customizable duration

### AnimatedSection
- Fade-in animations on scroll
- Stagger effects for multiple elements

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.ts` to modify theme colors:

```typescript
colors: {
  education: {
    light: "#f0abfc",
    DEFAULT: "#c084fc",
    dark: "#7e22ce",
  },
  // Add more colors...
}
```

### Updating Content

All content is stored in the `data/` folder:
- `mainData.ts` - Homepage content
- `studentsParadise.ts` - Education page content
- `nexoraIT.ts` - IT solutions page content
- `arConstruction.ts` - Construction page content

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Update navigation in `components/Navbar.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Fast Loading**: Optimized images and code splitting
- **Smooth Animations**: Hardware-accelerated CSS and Framer Motion
- **SEO Optimized**: Server-side rendering with Next.js
- **Lighthouse Score**: Targets 90+ on all metrics

## 🤝 Contributing

This is a client project. For any modifications or improvements:

1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## 📝 License

This project is proprietary and confidential.

## 🙏 Support

For issues or questions:
- Email: info@nexoragroups.com
- Website: https://www.nexoragroups.com

---

Built with ❤️ for NexoraGroups
