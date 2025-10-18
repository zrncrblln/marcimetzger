# Marci Metzger Real Estate Website

A modern, responsive real estate website for Marci Metzger, a professional realtor specializing in Pahrump, Nevada properties. Built with React, TypeScript, and Tailwind CSS for a professional and user-friendly experience.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling Navigation**: Single-page application with seamless section transitions
- **Hero Section**: Eye-catching introduction with background image and call-to-action
- **About Section**: Detailed information about Marci Metzger and her expertise
- **Featured Properties**: Showcase of premium Pahrump properties with key details
- **Property Search**: Interactive search interface for finding listings
- **Photo Gallery**: Visual showcase of properties with lightbox functionality
- **Services Overview**: Comprehensive list of real estate services offered
- **Contact Information**: Direct contact details and embedded map
- **Social Media Links**: Integration with Instagram, Facebook, LinkedIn, and Yelp
- **Professional Branding**: Consistent design with The Ridge Realty Group branding

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Shadcn/ui (built on Radix UI primitives)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query for data fetching
- **Form Handling**: React Hook Form with Zod validation
- **Package Manager**: npm/bun

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/marci-metzger-real-estate.git
   cd marci-metzger-real-estate
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the website.

### Build for Production

```bash
npm run build
# or
bun run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Shadcn/ui)
│   ├── Hero.tsx      # Hero section component
│   ├── Founder.tsx   # About section component
│   ├── FeaturedProperties.tsx
│   ├── SearchListings.tsx
│   ├── Gallery.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
├── pages/
│   ├── Index.tsx     # Main page component
│   └── NotFound.tsx  # 404 page component
├── assets/           # Images and media files
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and configurations
└── App.tsx           # Main app component
```

## 🎨 Customization

### Colors and Branding

The website uses CSS custom properties for easy theming. Key variables are defined in `tailwind.config.ts`:

- Primary color: Used for buttons, links, and accents
- Background colors: Card and section backgrounds
- Text colors: Foreground and muted text

### Content Updates

To update property listings, images, or contact information:

1. Replace images in `src/assets/`
2. Update component props in the respective component files
3. Modify text content directly in the JSX

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Index.tsx`
3. Update the navigation in `Navbar.tsx` if needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Tailwind CSS classes ensure consistent spacing and layout across devices.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (via ESLint)

## 🌐 Deployment

The website can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Upload the `dist` directory to your hosting provider
3. Configure the domain and SSL as needed

Recommended hosting platforms:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront



This project is private and proprietary. All rights reserved.

---

_Built with ❤️ for Pahrump's real estate community_
