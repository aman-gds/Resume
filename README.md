# M. Aman Khan — Portfolio

Premium dark-themed portfolio website for a WordPress Developer & Automation Specialist. Built with modern React and deployed on Vercel.

**Live:** [m-aman-khan.vercel.app](https://m-aman-khan.vercel.app)

## Tech Stack

- **Framework:** React 19 (via Vite 8)
- **Styling:** Vanilla CSS with CSS custom properties
- **Icons:** lucide-react
- **Deployment:** Vercel (auto-deploy from `main`)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Project Structure

```
├── index.html                  # Entry HTML with OG/SEO meta tags
├── public/
│   ├── avatar.png              # Profile photo (PNG fallback)
│   ├── avatar.webp             # Profile photo (WebP optimized)
│   ├── Aman-CV.pdf             # Downloadable CV
│   └── og-image.png            # Social preview image (1200×630)
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component, hash-based routing
    ├── App.css                 # (Cleared — styles live in index.css)
    ├── index.css               # Full design system & component styles
    └── components/
        ├── Sidebar.jsx         # Profile card, contact copy, CV download
        ├── Navbar.jsx          # Tab navigation
        ├── AboutSection.jsx    # Bio & services grid
        ├── ResumeSection.jsx   # Experience & education timelines
        ├── SkillsSection.jsx   # Skill pills grouped by category
        ├── PortfolioSection.jsx# 25 client websites with live screenshots
        ├── ContactSection.jsx  # Web3Forms-powered contact form
        ├── CursorEffect.jsx    # Custom cursor + floating code particles
        └── ErrorBoundary.jsx   # Cursor fallback safety wrapper
```

## Features

- ✨ Dark Leven-inspired theme with neon accent system
- 🖼 25 live portfolio projects with auto-generated screenshots
- 📄 Real downloadable CV
- 📬 Working contact form (Web3Forms)
- 🎯 Hash-based routing with browser back/forward support
- ♿ Keyboard accessibility & prefers-reduced-motion support
- 🔍 SEO: OG tags, static HTML fallback, semantic structure
- 🖱 Custom interactive cursor with floating code snippets

## License

MIT
