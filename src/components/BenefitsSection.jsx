import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromBottom, staggerContainer, sectionHeader, cardHover, viewportConfig, springConfig } from '../utils/motionUtils'

const BenefitsSection = () => {
  const ref = useRef(null)
  const benefitsListRef = useRef(null)
  const imageContainerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

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
    <section ref={ref} className="py-16 md:py-20" style={{
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F2F5F9 100%)',
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-8 md:mb-12"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" 
            style={{ color: '#1F2937' }}
          >
            Benefits
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl max-w-xl" 
            style={{ color: '#4B5563' }}
          >
            Discover the advantages of using AI-powered trading solutions to transform your investment strategy.
          </p>
        </motion.div>

        {/* Main Content Grid - Aligned relative to benefits list only */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Benefits List Container */}
          <motion.div
            ref={benefitsListRef}
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-4 benefits-list"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-4"
            >
            {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={slideInFromBottom}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIndex(index)}
                  className="card-3d-container cursor-pointer"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    className="relative p-6 rounded-xl border overflow-hidden group"
                    style={{
                      background: '#FFFFFF',
                      boxShadow: selectedIndex === index 
                        ? '0 4px 16px rgba(220, 38, 38, 0.12), 0 0 0 2px #DC2626'
                        : '0 2px 8px rgba(0, 0, 0, 0.04), 0 0 0 1px #E5E7EB',
                      borderColor: selectedIndex === index ? '#DC2626' : '#E5E7EB',
                      transformStyle: 'preserve-3d',
                    }}
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    animate={hoveredIndex === index ? 'hover' : 'rest'}
                  >
                    {/* Selected/Hover Glow Effect */}
                    {(hoveredIndex === index || selectedIndex === index) && (
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: selectedIndex === index
                            ? 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 70%)'
                            : 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.05) 0%, transparent 70%)',
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
                        color: '#1F2937'
                      }}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed" style={{ 
                        color: '#4B5563'
                      }}>
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
            ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image (aligned relative to benefits list only) */}
          <motion.div
            ref={imageContainerRef}
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative w-full flex items-center justify-center"
            style={{
              minHeight: '400px',
            }}
          >
            <motion.div
              className="relative w-full max-w-lg flex items-center justify-center"
              variants={cardHover}
              initial="rest"
              whileHover="hover"
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
                {/* Gradients - Must be defined first */}
                <defs>
                  <linearGradient id="benefitsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#DC2626" />
                  </linearGradient>
                  <radialGradient id="aiBrainGradient" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="50%" stopColor="#F8F9FA" />
                    <stop offset="100%" stopColor="#EFF1F3" />
                  </radialGradient>
                  <linearGradient id="trendLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DC2626" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#EF4444" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#DC2626" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

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
                      fill="#DC2626"
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
                      fill="#EF4444"
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
                      fill="#B91C1C"
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
                      fill="#DC2626"
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
                    <rect x="40" y="140" width="20" height="40" rx="2" fill="#DC2626" opacity="0.9" />
                    <line x1="50" y1="130" x2="50" y2="140" stroke="#DC2626" strokeWidth="2" />
                    <line x1="50" y1="180" x2="50" y2="190" stroke="#DC2626" strokeWidth="2" />
                    
                    {/* Candle 2 - Bullish */}
                    <rect x="100" y="120" width="20" height="60" rx="2" fill="#DC2626" opacity="0.9" />
                    <line x1="110" y1="110" x2="110" y2="120" stroke="#DC2626" strokeWidth="2" />
                    <line x1="110" y1="180" x2="110" y2="190" stroke="#DC2626" strokeWidth="2" />
                    
                    {/* Candle 3 - Bearish */}
                    <rect x="160" y="90" width="20" height="50" rx="2" fill="#B91C1C" opacity="0.9" />
                    <line x1="170" y1="80" x2="170" y2="90" stroke="#B91C1C" strokeWidth="2" />
                    <line x1="170" y1="140" x2="170" y2="150" stroke="#B91C1C" strokeWidth="2" />
                    
                    {/* Candle 4 - Bullish */}
                    <rect x="220" y="80" width="20" height="70" rx="2" fill="#DC2626" opacity="0.9" />
                    <line x1="230" y1="70" x2="230" y2="80" stroke="#DC2626" strokeWidth="2" />
                    <line x1="230" y1="150" x2="230" y2="160" stroke="#DC2626" strokeWidth="2" />
                    
                    {/* Candle 5 - Bullish */}
                    <rect x="280" y="60" width="20" height="90" rx="2" fill="#DC2626" opacity="0.9" />
                    <line x1="290" y1="50" x2="290" y2="60" stroke="#DC2626" strokeWidth="2" />
                    <line x1="290" y1="150" x2="290" y2="160" stroke="#DC2626" strokeWidth="2" />
                    
                    {/* Candle 6 - Bearish */}
                    <rect x="340" y="100" width="20" height="40" rx="2" fill="#DC2626" opacity="0.9" />
                    <line x1="350" y1="90" x2="350" y2="100" stroke="#DC2626" strokeWidth="2" />
                    <line x1="350" y1="140" x2="350" y2="150" stroke="#DC2626" strokeWidth="2" />
                    
                    {/* Candle 7 - Bullish */}
                    <rect x="400" y="70" width="20" height="80" rx="2" fill="#DC2626" opacity="0.9" />
                    <line x1="410" y1="60" x2="410" y2="70" stroke="#DC2626" strokeWidth="2" />
                    <line x1="410" y1="150" x2="410" y2="160" stroke="#DC2626" strokeWidth="2" />
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
                    <path d="M 0 40 L 15 20 L 30 40 Z" fill="#DC2626" opacity="0.8" />
                    <text x="15" y="65" fontSize="14" fill="#DC2626" fontWeight="600" textAnchor="middle">+24%</text>
                  </motion.g>
                </g>

                {/* AI Analysis Indicators */}
                <g transform="translate(120, 200)">
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="12"
                    fill="#DC2626"
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
                  <text x="20" y="5" fontSize="12" fill="#DC2626" fontWeight="500">AI Analysis</text>
                </g>

                {/* Automated Trading Badge */}
                <g transform="translate(380, 140)">
                  <rect x="0" y="0" width="80" height="30" rx="15" fill="rgba(143, 175, 106, 0.15)" stroke="rgba(143, 175, 106, 0.4)" strokeWidth="1.5" />
                  <text x="40" y="20" fontSize="11" fill="#DC2626" fontWeight="600" textAnchor="middle">AUTO</text>
                </g>

                {/* Data Flow Lines (connecting AI to Charts) */}
                <motion.path
                  d="M 270 180 Q 250 220, 250 280"
                  stroke="rgba(220, 38, 38, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.path
                  d="M 330 180 Q 350 220, 350 280"
                  stroke="rgba(239, 68, 68, 0.4)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
