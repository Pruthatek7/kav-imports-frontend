# KAV Imports Frontend

A high-performance, SEO-optimized landing page for KAV Imports, featuring premium commercial-grade garbage bags and poly mailer bags.

## 🚀 Features

- **SEO Optimized**: Fully configured with meta descriptions, Open Graph (OG) tags, and Twitter Cards for superior search engine visibility and social sharing.
- **Crawling & Indexing**: Includes professional `robots.txt` and a dynamic `sitemap.xml` for efficient search engine indexing.
- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite for blazing-fast performance.
- **Responsive Design**: Tailored for all devices with a premium, pixel-perfect aesthetic.
- **Performance**: Optimized asset loading and component architecture for high Lighthouse scores.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) / [PostCSS](https://postcss.org/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev
```

### Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 🔍 SEO & Static Assets

The following files are located in the `public/` directory to ensure they are served at the root of the domain:

- `robots.txt`: Configured to allow all crawlers and link to the sitemap.
- `sitemap.xml`: Lists all navigable routes for better indexing.
- `index.html`: Contains all essential SEO meta tags and social media configurations.

## 🚢 Deployment

This project is configured for deployment on **Vercel**. 
- Routing is handled via `vercel.json` to support SPA (Single Page Application) navigation.
- Ensure the **Build Command** is set to `npm run build` and the **Output Directory** is `dist`.

---

Developed by **PRUTHATEK** for **KAV Imports**.
