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
    <section ref={ref} className="py-20" style={{
      background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 50%, #FAFAFA 100%)',
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            {/* Heading */}
            <div>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-4" 
                style={{ color: '#0F172A' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Benefits
              </motion.h2>
              <motion.p 
                className="text-xl max-w-xl" 
                style={{ color: '#374151' }}
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
                    className="relative p-6 rounded-xl border border-gray-200 overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                      boxShadow: '0 4px 24px rgba(220, 38, 38, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                      transformStyle: 'preserve-3d',
                    }}
                    animate={{
                      y: hoveredIndex === index ? -4 : 0,
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
                          background: 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2" style={{ 
                        color: '#0F172A',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.06)'
                      }}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ 
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
              {/* Trading Illustration SVG */}
              <svg
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto max-h-full"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(220, 38, 38, 0.15)) drop-shadow(0 0 30px rgba(16, 185, 129, 0.1))',
                }}
              >
                {/* Background Circle */}
                <circle cx="300" cy="300" r="280" fill="url(#benefitsGradient)" opacity="0.1" />
                
                {/* Chart Bars */}
                <g>
                  {/* Bar 1 */}
                  <rect x="120" y="380" width="60" height="120" rx="8" fill="url(#chartGradient1)" />
                  <rect x="120" y="360" width="60" height="20" rx="8" fill="url(#chartGradient1)" opacity="0.6" />
                  
                  {/* Bar 2 */}
                  <rect x="200" y="340" width="60" height="160" rx="8" fill="url(#chartGradient2)" />
                  <rect x="200" y="320" width="60" height="20" rx="8" fill="url(#chartGradient2)" opacity="0.6" />
                  
                  {/* Bar 3 */}
                  <rect x="280" y="300" width="60" height="200" rx="8" fill="url(#chartGradient3)" />
                  <rect x="280" y="280" width="60" height="20" rx="8" fill="url(#chartGradient3)" opacity="0.6" />
                  
                  {/* Bar 4 */}
                  <rect x="360" y="320" width="60" height="180" rx="8" fill="url(#chartGradient4)" />
                  <rect x="360" y="300" width="60" height="20" rx="8" fill="url(#chartGradient4)" opacity="0.6" />
                  
                  {/* Bar 5 */}
                  <rect x="440" y="350" width="60" height="150" rx="8" fill="url(#chartGradient5)" />
                  <rect x="440" y="330" width="60" height="20" rx="8" fill="url(#chartGradient5)" opacity="0.6" />
                </g>

                {/* Trend Line */}
                <motion.path
                  d="M 100 450 Q 200 400, 300 350 T 500 300"
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* AI Bot Icon (Simplified) */}
                <g transform="translate(250, 150)">
                  <circle cx="50" cy="50" r="45" fill="url(#botGradient)" />
                  <circle cx="35" cy="45" r="8" fill="#FFFFFF" />
                  <circle cx="65" cy="45" r="8" fill="#FFFFFF" />
                  <circle cx="35" cy="45" r="4" fill="#0F172A" />
                  <circle cx="65" cy="45" r="4" fill="#0F172A" />
                  <rect x="40" y="60" width="20" height="12" rx="2" fill="#10B981" />
                </g>

                {/* Floating Elements */}
                <motion.circle
                  cx="150"
                  cy="200"
                  r="8"
                  fill="#DC2626"
                  opacity="0.6"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.circle
                  cx="450"
                  cy="250"
                  r="6"
                  fill="#10B981"
                  opacity="0.6"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                />

                {/* Gradients */}
                <defs>
                  <linearGradient id="benefitsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                  <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                  <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#16A34A" />
                  </linearGradient>
                  <linearGradient id="chartGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                  <linearGradient id="chartGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                  <linearGradient id="chartGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                  <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DC2626" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#2563EB" />
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
