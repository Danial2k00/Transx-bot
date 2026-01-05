import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const HeroBotAnimation = () => {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Smooth cursor tracking with spring physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  // Transform values for parallax effect
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8])
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-15, 15])
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-15, 15])

  // Handle mouse movement for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const x = (e.clientX - centerX) / rect.width
      const y = (e.clientY - centerY) / rect.height
      
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center hero-bot-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{ minHeight: '400px' }}
    >
      {/* Bot Illustration - SVG-based for crisp rendering */}
      <motion.div
        className="relative z-10"
        style={{
          x: translateX,
          y: translateY,
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        {/* Soft Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            scale: isHovered ? 1.2 : 1,
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            opacity: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />

        {/* Main Bot SVG */}
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          className="w-full h-auto max-w-full"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(99, 102, 241, 0.2))' }}
        >
          {/* Bot Head */}
          <motion.g
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          >
            {/* Head Container */}
            <rect
              x="110"
              y="80"
              width="100"
              height="100"
              rx="20"
              fill="url(#botGradient)"
              stroke="rgba(99, 102, 241, 0.2)"
              strokeWidth="2"
            />
            
            {/* Eyes Container */}
            <g>
              {/* Left Eye */}
              <motion.circle
                cx="140"
                cy="130"
                r="12"
                fill="#FFFFFF"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.circle
                cx="140"
                cy="130"
                r="8"
                fill="#6366F1"
                animate={{
                  x: [0, 2, 0],
                  y: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Right Eye */}
              <motion.circle
                cx="180"
                cy="130"
                r="12"
                fill="#FFFFFF"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.1,
                }}
              />
              <motion.circle
                cx="180"
                cy="130"
                r="8"
                fill="#6366F1"
                animate={{
                  x: [0, 2, 0],
                  y: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.1,
                }}
              />
            </g>

            {/* Antenna/Indicator */}
            <motion.circle
              cx="160"
              cy="80"
              r="6"
              fill="#DC2626"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.g>

          {/* Bot Body */}
          <motion.rect
            x="100"
            y="200"
            width="120"
            height="80"
            rx="15"
            fill="url(#botGradient)"
            stroke="rgba(99, 102, 241, 0.2)"
            strokeWidth="2"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Body Details */}
          <rect
            x="120"
            y="220"
            width="80"
            height="8"
            rx="4"
            fill="rgba(99, 102, 241, 0.3)"
          />
          <rect
            x="120"
            y="240"
            width="60"
            height="8"
            rx="4"
            fill="rgba(99, 102, 241, 0.2)"
          />
          <rect
            x="120"
            y="260"
            width="80"
            height="8"
            rx="4"
            fill="rgba(99, 102, 241, 0.3)"
          />

          {/* Left Arm */}
          <g transform="translate(77.5, 216)">
            <motion.rect
              x="-17.5"
              y="-6"
              width="35"
              height="12"
              rx="6"
              fill="url(#botGradient)"
              stroke="rgba(99, 102, 241, 0.2)"
              strokeWidth="2"
              animate={{
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </g>

          {/* Right Arm */}
          <g transform="translate(242.5, 216)">
            <motion.rect
              x="-17.5"
              y="-6"
              width="35"
              height="12"
              rx="6"
              fill="url(#botGradient)"
              stroke="rgba(99, 102, 241, 0.2)"
              strokeWidth="2"
              animate={{
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </g>

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F8F9FA" />
              <stop offset="100%" stopColor="#EFF1F3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating Particles/Data Points */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `rgba(99, 102, 241, ${0.3 + i * 0.1})`,
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default HeroBotAnimation

