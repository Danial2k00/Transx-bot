# AI Trading Bot Website

A modern, responsive AI Trading Bot website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **React + Vite** - Fast development and build
- 🎨 **Tailwind CSS** - Utility-first styling
- ✨ **Framer Motion** - Smooth animations and transitions
- 🧭 **React Router DOM** - Nested routing structure
- 🎯 **3D Card Effects** - Interactive trading category cards
- 🖱️ **Animated Cursor** - Custom cursor that reacts to interactive elements
- 📱 **Fully Responsive** - Works on all devices

## Project Structure

```
src/
├── components/
│   ├── AnimatedCursor.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── TradingCard.jsx
├── layouts/
│   └── HomeLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── Stocks.jsx
│   ├── Crypto.jsx
│   ├── Forex.jsx
│   └── FDNFD.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Routing Structure

- `/` - Home page with trading categories
- `/stocks` - AI Stock Trading sub-page
- `/crypto` - AI Crypto Trading sub-page
- `/forex` - AI Forex & Commodities Trading sub-page
- `/fd-nfd` - AI FD/NFD Strategies sub-page

All sub-pages share the same HomeLayout (Navbar + Footer).

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Routing

## Design System

- **Background**: #0B1120
- **Card Background**: #111827
- **Primary**: #6366F1 (Indigo)
- **Secondary**: #22D3EE (Cyan)
- **Text**: #E5E7EB
- **Muted Text**: #9CA3AF

## Features Implemented

✅ Nested routing with shared layout
✅ 3D card hover effects with CSS transforms
✅ Animated cursor component
✅ Framer Motion page transitions
✅ Scroll reveal animations
✅ Glassmorphism effects
✅ Gradient backgrounds
✅ Fully responsive design

## License

MIT

