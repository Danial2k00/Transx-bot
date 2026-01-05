import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './PricingSection.css'
import { slideInFromBottom, sectionHeader, staggerContainer, viewportConfig, buttonInteraction, riseWithScale } from '../utils/motionUtils'

const PricingSection = () => {
  const navigate = useNavigate()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Reorder plans: Premium in center (index 1), Basic left (0), Customize right (2)
  const pricingPlans = [
    {
      name: 'BASIC STOCK SOFTWARE',
      price: '1200$',
      period: 'life time',
      features: [
        'Minimum Deposit 2000$',
        'ROI 25% per month (Monthly Selling)',
        'ROI 38% per month (If Holding Stock)',
        'Dedicated account manager',
        '24/7 technical support',
        '24 hr activation',
        'Systematic perilous',
      ],
      buttonLabel: 'Basic',
      isHero: false,
    },
    {
      name: 'PREMIUM STOCK SOFTWARE',
      price: '1800$',
      period: 'life time',
      features: [
        'Minimum Deposit 4000$',
        'ROI 30% per month(Monthly Selling)',
        'ROI 42% per month(If Holding Stock)',
        '24/7 technical support',
        '6 hr activation',
        'Unlimited option',
        'Dedicated account manager',
        'Systematic perilous',
      ],
      buttonLabel: 'Premium',
      isHero: true,
    },
    {
      name: 'CUSTOMIZE SOFTWARE',
      price: '1000$ upto 10000$',
      period: 'life time',
      features: [
        'Customize Deposit',
        'Customize profit ROI',
        'Customize risk',
        'Unlimited trading symbols',
        '24/7 technical support',
        'Dedicated account manager',
        'Systematic perilous',
      ],
      buttonLabel: 'Customize',
      isHero: false,
    },
  ]

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  }

  // Card animation variants - rise with scale + glow
  const getCardVariants = (index) => {
    return {
      ...riseWithScale,
      visible: {
        ...riseWithScale.visible,
        transition: {
          ...riseWithScale.visible.transition,
          delay: index * 0.12,
        },
      },
    }
  }

  // Price animation - appears last
  const priceVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  // Feature item animation - sequential
  const featureVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
        delay: i * 0.04,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  return (
    <section className="pricing-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        {/* Section Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1F2937' }}>
            Our <span className="pricing-gradient-text">Pricings Plan</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
            We offer the best pricings around - from installations to repairs, maintenance, and more!
          </p>
        </motion.div>

        {/* Value-Stacking Pricing Layout */}
        <motion.div
          className="value-stacking-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {pricingPlans.map((plan, index) => {
            const isHero = plan.isHero
            const isHovered = hoveredIndex === index
            const isBlurred = hoveredIndex !== null && hoveredIndex !== index

            return (
              <motion.div
                key={plan.name}
                className={`value-card ${isHero ? 'hero-card' : 'side-card'}`}
                variants={getCardVariants(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                style={{
                  filter: isBlurred ? 'blur(3px)' : 'blur(0px)',
                }}
                animate={isHero ? {
                  scale: [1, 1.01, 1],
                } : {}}
                transition={isHero ? {
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  default: { duration: 0.3 }
                } : { duration: 0.3 }}
              >
                {/* Hero Badge */}
                {isHero && (
                  <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Best Value
                  </motion.div>
                )}

                {/* Card Content */}
                <div className="value-card-content">
                  {/* Plan Name */}
                  <motion.h3
                    className="value-plan-name"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {plan.name}
                  </motion.h3>

                  {/* Benefits/Features First (Value-First Presentation) */}
                  <motion.ul
                    className="value-features-list"
                    initial="hidden"
                    animate="visible"
                  >
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="value-feature-item"
                        custom={idx}
                        variants={featureVariants}
                      >
                        <motion.svg
                          className="value-feature-icon"
                          width="22"
                          height="22"
                          viewBox="0 0 20 20"
                          fill="none"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.2 + idx * 0.04,
                            type: 'spring',
                            stiffness: 400,
                          }}
                        >
                          <path
                            d="M16.6667 5L7.50004 14.1667L3.33337 10"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Price Last (Appears with Animation) */}
                  <motion.div
                    className="value-price-container"
                    variants={priceVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.span
                      className="value-price-amount"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className="value-price-period">/ {plan.period}</span>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className={`value-cta-button ${isHero ? 'hero-button' : ''}`}
                    onClick={() => navigate('/register')}
                    variants={buttonInteraction}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {plan.buttonLabel}
                  </motion.button>
                </div>

                {/* Card Glow Effect */}
                <div className={`value-card-glow ${isHovered ? 'active' : ''}`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
