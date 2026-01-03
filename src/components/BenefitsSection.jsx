import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const BenefitsSection = () => {
  const ref = useRef(null)
  const benefitsListRef = useRef(null)
  const imageContainerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Match image container height to benefits list height
  useEffect(() => {
    const updateHeight = () => {
      if (benefitsListRef.current && imageContainerRef.current) {
        const benefitsHeight = benefitsListRef.current.offsetHeight
        imageContainerRef.current.style.height = `${benefitsHeight}px`
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const benefits = [
    {
      title: 'Maximize Your Returns',
      description: 'AI-powered algorithms analyze market patterns and execute trades at optimal times to maximize your investment returns.',
    },
    {
      title: '24/7 Automated Trading',
      description: 'Never miss a trading opportunity. Our AI bots monitor markets around the clock and execute trades automatically.',
    },
    {
      title: 'Risk Management',
      description: 'Advanced risk assessment and management tools protect your investments while optimizing for growth.',
    },
    {
      title: 'Easy to Use',
      description: 'User-friendly interface designed for both beginners and experienced traders. Get started in minutes.',
    },
  ]

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-20" style={{
      background: '#F7FAF5',
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6 md:space-y-8"
          >
            {/* Heading */}
            <div>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" 
                style={{ color: '#243024' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Benefits
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg md:text-xl max-w-xl" 
                style={{ color: '#4A5A4A' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover the advantages of using AI-powered trading solutions to transform your investment strategy.
              </motion.p>
            </div>

            {/* Benefits List Container - Used as height reference */}
            <div ref={benefitsListRef} className="space-y-4 benefits-list-container">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="card-3d-container"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    className="relative p-6 rounded-xl border overflow-hidden group"
                    style={{
                      background: '#FFFFFF',
                      boxShadow: '0 4px 24px rgba(107, 142, 35, 0.08), 0 0 0 1px rgba(107, 142, 35, 0.08)',
                      borderColor: 'rgba(107, 142, 35, 0.1)',
                      transformStyle: 'preserve-3d',
                    }}
                    animate={{
                      y: hoveredIndex === index ? -6 : 0,
                      scale: hoveredIndex === index ? 1.02 : 1,
                      rotateX: hoveredIndex === index ? 2 : 0,
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    {/* Hover Glow Effect */}
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(107, 142, 35, 0.1) 0%, transparent 70%)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ 
                        color: '#0F172A',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.06)'
                      }}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed" style={{ 
                        color: '#374151',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.06)'
                      }}>
                        {benefit.description}
                      </p>
                    </div>

                    {/* Subtle shadow increase on hover */}
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          boxShadow: '0 8px 32px rgba(220, 38, 38, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            ref={imageContainerRef}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full flex items-center justify-center"
            style={{
              marginTop: 'calc(2rem + 4.5rem + 1.5rem)', // space-y-8 (2rem) + heading height (~4.5rem) + spacing
            }}
          >
            <motion.div
              className="relative w-full max-w-lg flex items-center justify-center"
              whileHover={{
                rotateY: 2,
                rotateX: -2,
                scale: 1.02,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 20 
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* AI Trading Dashboard Illustration SVG */}
              <svg
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-h-full"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(99, 102, 241, 0.12)) drop-shadow(0 0 30px rgba(16, 185, 129, 0.08))',
                }}
              >
                {/* Subtle Background Glow */}
                <circle cx="300" cy="300" r="280" fill="url(#benefitsGradient)" opacity="0.05" />
                
                {/* AI Brain/Bot Container */}
                <g transform="translate(200, 80)">
                  {/* Brain/Processing Core */}
                  <motion.g
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <circle cx="100" cy="100" r="70" fill="url(#aiBrainGradient)" opacity="0.9" />
                    <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" />
                    
                    {/* Neural Network Nodes */}
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="6"
                      fill="#6B8E23"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.circle
                      cx="120"
                      cy="80"
                      r="6"
                      fill="#8FAF6A"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.circle
                      cx="80"
                      cy="120"
                      r="6"
                      fill="#5E7C3A"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.circle
                      cx="120"
                      cy="120"
                      r="6"
                      fill="#4CAF50"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <circle cx="100" cy="100" r="8" fill="#FFFFFF" opacity="0.9" />
                    
                    {/* Connection Lines */}
                    <line x1="80" y1="80" x2="100" y2="100" stroke="rgba(107, 142, 35, 0.3)" strokeWidth="1.5" />
                    <line x1="120" y1="80" x2="100" y2="100" stroke="rgba(143, 175, 106, 0.3)" strokeWidth="1.5" />
                    <line x1="80" y1="120" x2="100" y2="100" stroke="rgba(94, 124, 58, 0.3)" strokeWidth="1.5" />
                    <line x1="120" y1="120" x2="100" y2="100" stroke="rgba(76, 175, 80, 0.3)" strokeWidth="1.5" />
                  </motion.g>
                </g>

                {/* Trading Dashboard/Candlestick Chart */}
                <g transform="translate(80, 280)">
                  {/* Chart Background */}
                  <rect x="0" y="0" width="440" height="200" rx="12" fill="rgba(255, 255, 255, 0.6)" stroke="rgba(107, 142, 35, 0.15)" strokeWidth="2" />
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="440" y2="50" stroke="rgba(107, 142, 35, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="440" y2="100" stroke="rgba(107, 142, 35, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="150" x2="440" y2="150" stroke="rgba(107, 142, 35, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
                  
                  {/* Candlestick Chart */}
                  <g>
                    {/* Candle 1 - Bullish */}
                    <rect x="40" y="140" width="20" height="40" rx="2" fill="#4CAF50" opacity="0.9" />
                    <line x1="50" y1="130" x2="50" y2="140" stroke="#4CAF50" strokeWidth="2" />
                    <line x1="50" y1="180" x2="50" y2="190" stroke="#4CAF50" strokeWidth="2" />
                    
                    {/* Candle 2 - Bullish */}
                    <rect x="100" y="120" width="20" height="60" rx="2" fill="#10B981" opacity="0.9" />
                    <line x1="110" y1="110" x2="110" y2="120" stroke="#10B981" strokeWidth="2" />
                    <line x1="110" y1="180" x2="110" y2="190" stroke="#10B981" strokeWidth="2" />
                    
                    {/* Candle 3 - Bearish */}
                    <rect x="160" y="90" width="20" height="50" rx="2" fill="#5E7C3A" opacity="0.9" />
                    <line x1="170" y1="80" x2="170" y2="90" stroke="#5E7C3A" strokeWidth="2" />
                    <line x1="170" y1="140" x2="170" y2="150" stroke="#5E7C3A" strokeWidth="2" />
                    
                    {/* Candle 4 - Bullish */}
                    <rect x="220" y="80" width="20" height="70" rx="2" fill="#10B981" opacity="0.9" />
                    <line x1="230" y1="70" x2="230" y2="80" stroke="#10B981" strokeWidth="2" />
                    <line x1="230" y1="150" x2="230" y2="160" stroke="#10B981" strokeWidth="2" />
                    
                    {/* Candle 5 - Bullish */}
                    <rect x="280" y="60" width="20" height="90" rx="2" fill="#10B981" opacity="0.9" />
                    <line x1="290" y1="50" x2="290" y2="60" stroke="#10B981" strokeWidth="2" />
                    <line x1="290" y1="150" x2="290" y2="160" stroke="#10B981" strokeWidth="2" />
                    
                    {/* Candle 6 - Bearish */}
                    <rect x="340" y="100" width="20" height="40" rx="2" fill="#DC2626" opacity="0.9" />
                    <line x1="350" y1="90" x2="350" y2="100" stroke="#DC2626" strokeWidth="2" />
                    <line x1="350" y1="140" x2="350" y2="150" stroke="#DC2626" strokeWidth="2" />
                    
                    {/* Candle 7 - Bullish */}
                    <rect x="400" y="70" width="20" height="80" rx="2" fill="#10B981" opacity="0.9" />
                    <line x1="410" y1="60" x2="410" y2="70" stroke="#10B981" strokeWidth="2" />
                    <line x1="410" y1="150" x2="410" y2="160" stroke="#10B981" strokeWidth="2" />
                  </g>
                  
                  {/* Trend Line Overlay */}
                  <motion.path
                    d="M 50 180 Q 110 160, 170 140 T 290 100 T 410 120"
                    stroke="url(#trendLineGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
                    transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
                  />
                </g>

                {/* Growth Indicators */}
                <g transform="translate(450, 180)">
                  <motion.g
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <path d="M 0 40 L 15 20 L 30 40 Z" fill="#4CAF50" opacity="0.8" />
                    <text x="15" y="65" fontSize="14" fill="#4CAF50" fontWeight="600" textAnchor="middle">+24%</text>
                  </motion.g>
                </g>

                {/* AI Analysis Indicators */}
                <g transform="translate(120, 200)">
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="12"
                    fill="#6B8E23"
                    opacity="0.7"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 0.9, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <text x="20" y="5" fontSize="12" fill="#6B8E23" fontWeight="500">AI Analysis</text>
                </g>

                {/* Automated Trading Badge */}
                <g transform="translate(380, 140)">
                  <rect x="0" y="0" width="80" height="30" rx="15" fill="rgba(143, 175, 106, 0.15)" stroke="rgba(143, 175, 106, 0.4)" strokeWidth="1.5" />
                  <text x="40" y="20" fontSize="11" fill="#8FAF6A" fontWeight="600" textAnchor="middle">AUTO</text>
                </g>

                {/* Data Flow Lines (connecting AI to Charts) */}
                <motion.path
                  d="M 270 180 Q 250 220, 250 280"
                  stroke="rgba(107, 142, 35, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.path
                  d="M 330 180 Q 350 220, 350 280"
                  stroke="rgba(143, 175, 106, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="benefitsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                  <radialGradient id="aiBrainGradient" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#F8F9FA" />
                    <stop offset="100%" stopColor="#EFF1F3" />
                  </radialGradient>
                  <linearGradient id="trendLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#5E7C3A" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#8FAF6A" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6B8E23" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
