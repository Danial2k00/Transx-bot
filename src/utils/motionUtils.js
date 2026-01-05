// Motion utilities for consistent, performant animations
// GPU-accelerated transforms and reduced-motion support

// Check for reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Spring configurations for smooth, natural motion
export const springConfig = {
  gentle: { type: 'spring', stiffness: 150, damping: 20 },
  smooth: { type: 'spring', stiffness: 200, damping: 25 },
  premium: { type: 'spring', stiffness: 180, damping: 22 }, // Premium fintech feel
  bouncy: { type: 'spring', stiffness: 300, damping: 20 },
  quick: { type: 'spring', stiffness: 400, damping: 30 },
}

// Easing curves for premium feel
export const easing = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  premium: [0.22, 1, 0.36, 1], // Premium fintech easing
}

// Standard animation durations
export const durations = {
  fast: 0.4,
  normal: 0.6,
  slow: 0.9,
}

// Standard stagger delay
export const staggerDelay = 0.12

// Viewport configuration for scroll-triggered animations
export const viewportConfig = {
  once: true,
  margin: '-50px',
  amount: 0.2,
}

// Mobile viewport config (lighter animations)
export const mobileViewportConfig = {
  once: true,
  margin: '-50px',
  amount: 0.15,
}

// Common animation variants with scroll-trigger support
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easing.premium,
    },
  },
}

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: easing.premium,
    },
  },
}

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Stagger container variants
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
}

// Section header animation (center content from bottom)
export const sectionHeader = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springConfig.premium,
      duration: durations.normal,
    },
  },
}

// Hero fade + soft zoom-in
export const heroFadeZoom = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Float up animation for services
export const floatUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Rise with scale + glow for pricing
export const riseWithScale = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// CTA scale + glow emphasis
export const ctaEmphasis = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.normal,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Card hover variants for 3D effect
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  },
  hover: {
    scale: 1.02,
    y: -4,
    rotateX: -2,
    rotateY: 2,
    transition: {
      ...springConfig.smooth,
      duration: 0.3,
    },
  },
}

// Button micro-interaction
export const buttonInteraction = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      ...springConfig.quick,
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
}

// Image parallax effect
export const imageParallax = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.03,
    y: -2,
    transition: {
      ...springConfig.smooth,
      duration: 0.4,
    },
  },
}

// 3D tilt effect for cards (enhanced)
export const get3DTilt = (mouseX, mouseY, rect) => {
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const rotateX = (mouseY - centerY) / 25 // Softer tilt
  const rotateY = (centerX - mouseX) / 25
  return { 
    rotateX: rotateX * 0.3, // Reduced intensity for premium feel
    rotateY: rotateY * 0.3,
    scale: 1.02,
    y: -4
  }
}

// GPU-accelerated transform utilities
export const gpuTransform = {
  enable: (element) => {
    if (element) {
      element.style.willChange = 'transform'
      element.style.transform = 'translateZ(0)'
    }
  },
  disable: (element) => {
    if (element) {
      element.style.willChange = 'auto'
    }
  },
}

// Responsive animation helper
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}


