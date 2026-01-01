import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './PricingSection.css'

const PricingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0) // Always start with Basic (index 0)

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
    },
  ]

  // Manual selection handler - only way to change plans
  const handleSelect = (index) => {
    setActiveIndex(index)
  }

  // Calculate card positions based on active index
  const getCardStyle = (index) => {
    const offset = index - activeIndex
    const absOffset = Math.abs(offset)

    if (offset === 0) {
      // Active card (front) - fully visible
      return {
        zIndex: 10,
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
      }
    } else if (offset > 0) {
      // Cards to the right (behind active) - Premium when Basic is active, Customize when Premium is active
      return {
        zIndex: 10 - absOffset,
        scale: Math.max(0.85, 0.92 - absOffset * 0.04),
        x: 40 + absOffset * 20,
        y: absOffset * 8,
        opacity: Math.max(0.3, 0.6 - absOffset * 0.15),
      }
    } else {
      // Cards to the left (behind active) - Basic when Premium is active, Premium when Customize is active
      return {
        zIndex: 10 - absOffset,
        scale: Math.max(0.85, 0.92 - absOffset * 0.04),
        x: -(40 + absOffset * 20),
        y: absOffset * 8,
        opacity: Math.max(0.3, 0.6 - absOffset * 0.15),
      }
    }
  }

  return (
    <section className="pricing-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0F172A' }}>
            Our <span className="pricing-gradient-text">Pricings Plan</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#374151' }}>
            We offer the best pricings around - from installations to repairs, maintenance, and more!
          </p>
        </motion.div>

        {/* Stacked Cards + Controls */}
        <div className="pricing-stacked-container">
          <div className="pricing-stacked-layout">
            {/* Left Side: Stacked Cards */}
            <div className="stacked-cards-wrapper">
              {pricingPlans.map((plan, index) => {
                const style = getCardStyle(index)
                const isActive = index === activeIndex
                return (
                  <motion.div
                    key={plan.name}
                    className={`stacked-pricing-card ${isActive ? 'active-card' : ''}`}
                    style={{ 
                      zIndex: style.zIndex,
                    }}
                    initial={false}
                    animate={{
                      scale: style.scale,
                      x: -210 + style.x,
                      y: -240 + style.y,
                      opacity: style.opacity,
                      zIndex: style.zIndex,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                      {/* Card Glow */}
                      <div className="card-glow"></div>

                      {/* Card Surface */}
                      <div className="card-surface">
                        {/* Plan Name */}
                        <h3 className="plan-name">{plan.name}</h3>

                        {/* Price */}
                        <div className="price-container">
                          <span className="price-amount">{plan.price}</span>
                          <span className="price-period">/ {plan.period}</span>
                        </div>

                        {/* Features List */}
                        <ul className="features-list">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="feature-item">
                              <svg
                                className="feature-icon"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M16.6667 5L7.50004 14.1667L3.33337 10"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Card Shadow */}
                      <div className="card-shadow"></div>
                    </motion.div>
                  )
                })}
            </div>

            {/* Right Side: Control Buttons */}
            <div className="pricing-controls">
              {pricingPlans.map((plan, index) => (
                <motion.button
                  key={plan.name}
                  className={`control-button ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleSelect(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                >
                  <span className="button-label">{plan.buttonLabel}</span>
                  <span className="button-price">{plan.price}</span>
                  {activeIndex === index && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
