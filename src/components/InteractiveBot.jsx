import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const InteractiveBot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const botRef = useRef(null)

  // Smooth eye movement using spring
  const eyeX = useSpring(0, { stiffness: 150, damping: 15 })
  const eyeY = useSpring(0, { stiffness: 150, damping: 15 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!botRef.current) return

      const rect = botRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate relative position from center
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY

      // Limit eye movement range (max 8px in each direction)
      const maxDistance = 8
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const clampedDistance = Math.min(distance, maxDistance)

      if (distance > 0) {
        const angle = Math.atan2(deltaY, deltaX)
        eyeX.set(Math.cos(angle) * clampedDistance)
        eyeY.set(Math.sin(angle) * clampedDistance)
      } else {
        eyeX.set(0)
        eyeY.set(0)
      }

      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [eyeX, eyeY])

  // Idle breathing animation
  const breathingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  // Floating animation
  const floatingAnimation = {
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <motion.div
      ref={botRef}
      className="relative flex items-center justify-center w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative"
        animate={{
          ...breathingAnimation,
          ...floatingAnimation,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          y: breathingAnimation.transition,
          rotate: floatingAnimation.transition,
          scale: { duration: 0.3 },
        }}
      >
        {/* Bot Body - SVG Illustration */}
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          style={{
            filter: 'drop-shadow(0 20px 40px rgba(220, 38, 38, 0.2)) drop-shadow(0 0 30px rgba(16, 185, 129, 0.15))',
          }}
        >
          {/* Bot Head */}
          <motion.ellipse
            cx="200"
            cy="150"
            rx="120"
            ry="100"
            fill="url(#botGradient)"
            stroke="#0F172A"
            strokeWidth="3"
            animate={isHovered ? { rx: 125, ry: 105 } : { rx: 120, ry: 100 }}
            transition={{ duration: 0.3 }}
          />

          {/* Bot Body */}
          <rect
            x="120"
            y="220"
            width="160"
            height="140"
            rx="20"
            fill="url(#botGradient)"
            stroke="#0F172A"
            strokeWidth="3"
          />

          {/* Left Eye */}
          <g transform="translate(160, 130)">
            <circle cx="0" cy="0" r="20" fill="#FFFFFF" />
            <motion.g
              style={{ x: eyeX, y: eyeY }}
            >
              <circle cx="0" cy="0" r="10" fill="#0F172A" />
              {/* Eye shine */}
              <motion.circle
                cx="0"
                cy="0"
                r="4"
                fill="#FFFFFF"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: [0.8, 0.3, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.g>
          </g>

          {/* Right Eye */}
          <g transform="translate(240, 130)">
            <circle cx="0" cy="0" r="20" fill="#FFFFFF" />
            <motion.g
              style={{ x: eyeX, y: eyeY }}
            >
              <circle cx="0" cy="0" r="10" fill="#0F172A" />
              {/* Eye shine */}
              <motion.circle
                cx="0"
                cy="0"
                r="4"
                fill="#FFFFFF"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: [0.8, 0.3, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.g>
          </g>

          {/* Mouth/Screen */}
          <motion.rect
            x="170"
            y="170"
            width="60"
            height="30"
            rx="5"
            fill="#DC2626"
            stroke="#0F172A"
            strokeWidth="2"
            animate={isHovered ? { height: 35 } : { height: 30 }}
            transition={{ duration: 0.3 }}
          />
          {/* Screen lines */}
          <line x1="180" y1="180" x2="220" y2="180" stroke="#0F172A" strokeWidth="1.5" />
          <line x1="180" y1="188" x2="210" y2="188" stroke="#0F172A" strokeWidth="1.5" />

          {/* Left Arm */}
          <motion.rect
            x="80"
            y="240"
            width="40"
            height="80"
            rx="20"
            fill="url(#botGradient)"
            stroke="#0F172A"
            strokeWidth="3"
            animate={isHovered ? { rotate: -10, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            transformOrigin="100 240"
          />
          {/* Left Hand */}
          <ellipse cx="90" cy="320" rx="15" ry="20" fill="url(#botGradient)" stroke="#0F172A" strokeWidth="3" />

          {/* Right Arm */}
          <motion.rect
            x="280"
            y="240"
            width="40"
            height="80"
            rx="20"
            fill="url(#botGradient)"
            stroke="#0F172A"
            strokeWidth="3"
            animate={isHovered ? { rotate: 10, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            transformOrigin="300 240"
          />
          {/* Right Hand */}
          <ellipse cx="310" cy="320" rx="15" ry="20" fill="url(#botGradient)" stroke="#0F172A" strokeWidth="3" />

          {/* Left Leg */}
          <rect x="140" y="340" width="50" height="60" rx="25" fill="url(#botGradient)" stroke="#0F172A" strokeWidth="3" />
          {/* Left Foot */}
          <ellipse cx="155" cy="395" rx="20" ry="15" fill="#0F172A" />

          {/* Right Leg */}
          <rect x="210" y="340" width="50" height="60" rx="25" fill="url(#botGradient)" stroke="#0F172A" strokeWidth="3" />
          {/* Right Foot */}
          <ellipse cx="245" cy="395" rx="20" ry="15" fill="#0F172A" />

          {/* Chest Panel */}
          <rect x="160" y="240" width="80" height="60" rx="8" fill="rgba(220, 38, 38, 0.1)" stroke="#DC2626" strokeWidth="2" />
          {/* Chest Panel Lines */}
          <line x1="170" y1="255" x2="230" y2="255" stroke="#DC2626" strokeWidth="1.5" />
          <line x1="170" y1="270" x2="220" y2="270" stroke="#DC2626" strokeWidth="1.5" />
          <line x1="170" y1="285" x2="240" y2="285" stroke="#DC2626" strokeWidth="1.5" />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>

        {/* Hover Glow Effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.3 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default InteractiveBot

