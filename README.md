# Kanhaiya Prajapati — Portfolio

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Dark/Light mode toggle with system preference detection
- Smooth scroll navigation with active section tracking
- Animated sections with Framer Motion
- Glassmorphism design with gradient accents
- Fully responsive (mobile-first)
- SEO optimized with Next.js metadata
- Contact form ready for EmailJS integration
- Production-ready and deploy-ready

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Theme:** next-themes
- **Form:** @emailjs/browser (placeholder)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kanhaiya-prajapati/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Info
Edit `src/lib/data.ts` to update all personal information, projects, skills, and experience.

### Images
- Add your profile photo to `public/` and update the Hero component
- Add project screenshots to `public/projects/`
- Replace `public/resume.pdf` with your actual resume

### Contact Form (EmailJS)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service, template, and get your public key
3. Uncomment the EmailJS code in `src/components/Contact.tsx`
4. Replace placeholder IDs with your actual EmailJS credentials

### Theme Colors
Edit `tailwind.config.ts` to customize the color palette (primary/accent colors).

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click **Deploy** — no configuration needed

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page (all sections)
├── components/
│   ├── Navbar.tsx         # Navigation with dark mode toggle
│   ├── Hero.tsx           # Hero section with particles
│   ├── About.tsx          # Bio, education, certifications
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx       # Project cards with filtering
│   ├── Skills.tsx         # Skills grid with categories
│   ├── Contact.tsx        # Contact form & info
│   ├── Footer.tsx         # Footer with links
│   ├── SectionHeading.tsx # Reusable section header
│   └── ThemeProvider.tsx  # Dark/light mode provider
└── lib/
    ├── data.ts            # All portfolio content/data
    └── utils.ts           # Utility functions
```

## License

MIT

---

Built by **Kanhaiya Prajapati** — Frontend Engineer
