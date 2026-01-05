import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { slideInFromBottom, staggerContainer, sectionHeader, cardHover, viewportConfig, floatUp } from '../utils/motionUtils'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Real-Time Forex Trading',
      description: 'AI-driven live market execution with real-time price analysis and instant trade decisions.',
      gradient: ['#DC2626', '#EF4444'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Automated Trading Tools',
      description: 'Advanced AI algorithms automate trades, manage risk, and optimize strategies 24/7.',
      gradient: ['#DC2626', '#EF4444'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Personalized Trading Plans',
      description: 'Custom AI strategies tailored to user goals, capital, and risk tolerance.',
      gradient: ['#6366F1', '#8B5CF6'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Expert Market Insights',
      description: 'AI + expert-driven insights on trends, volatility, and high-probability setups.',
      gradient: ['#DC2626', '#EF4444'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Multi-Asset Trading Software',
      description: 'Unified trading across Forex, Crypto, Stocks, Commodities, and F.D / N.F.D.',
      gradient: ['#DC2626', '#EF4444'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Strategy & Risk Consulting',
      description: 'AI-assisted risk management and strategy optimization for long-term growth.',
      gradient: ['#DC2626', '#EF4444'],
    },
  ]

  const itemVariants = floatUp

  return (
    <section ref={ref} className="py-16 md:py-20" style={{
      background: '#F7F8FA',
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#1F2937' }}>
            Services We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4" style={{ color: '#4B5563' }}>
            Smart AI-powered trading solutions designed for modern investors
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service, index, variants }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="card-3d-container"
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="card-3d relative h-full"
        animate={{
          rotateX: rotate.x * 0.3,
          rotateY: rotate.y * 0.3,
        }}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <div
          className="relative h-full p-5 sm:p-6 md:p-8 rounded-2xl border overflow-hidden group"
          style={{
            background: '#FFFFFF',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), 0 0 0 1px #E5E7EB',
            borderColor: '#E5E7EB',
          }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${service.gradient[0]}40 0%, transparent 70%)`,
            }}
          />

          {/* Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: `0 0 30px ${service.gradient[0]}40, inset 0 0 30px ${service.gradient[0]}20`,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl mb-4 sm:mb-5 md:mb-6 flex items-center justify-center text-white"
              style={{
                background: `linear-gradient(135deg, ${service.gradient[0]} 0%, ${service.gradient[1]} 100%)`,
              }}
              animate={{
                rotate: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              {service.icon}
            </motion.div>

            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ 
              color: '#1F2937'
            }}>{service.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ 
              color: '#4B5563'
            }}>{service.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ServicesSection

