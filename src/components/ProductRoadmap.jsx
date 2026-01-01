import React from 'react'
import { motion } from 'framer-motion'
import './ProductRoadmap.css'

const ProductRoadmap = () => {
  const roadmapItems = [
    {
      phase: 'P1',
      title: 'Platform Launch',
      description: 'Launch the core trading platform with real-time forex trading capabilities.',
      features: [
        'Real-time forex trading',
        'Automated trading tools',
        'Personalized trading plans'
      ],
      status: 'completed',
    },
    {
      phase: 'P2',
      title: 'Automated Trading Integration',
      description: 'Introduce AI-driven automated trading tools.',
      features: [
        'Unified trading interface',
        'Cross-asset portfolio management',
        'Multi-market synchronization'
      ],
      status: 'completed',
    },
    {
      phase: 'P3',
      title: 'AI-Powered Trading Strategies',
      description: 'AI uses algorithms to find market patterns and execute trades..',
      features: [
        'Customizable trading strategies',
        'Risk management tools',
        'Performance tracking & optimization'
      ],
      status: 'in-progress',
    },
    {
      phase: 'P4',
      title: 'Educational Resources Expansion',
      description: 'Expand the educational resources available to users.',
      features: [
        'Advanced AI trading tutorials',
        'Risk management strategies',
        'Portfolio diversification insights'
      ],
      status: 'planned',
    },
    {
      phase: 'P5',
      title: 'Risk Management Tools',
      description: 'Introduce risk management tools to help users manage their trades.',
      features: [
        'Stop Loss & Take Profit',
        'Risk/Reward Ratio Calculator',
        'Position Sizing Calculator'
      ],
      status: 'planned',
    },
    {
      phase: 'P6',
      title: 'Launch the multi-currency software for seamless trading and currency management.',
      description: 'Advanced enterprise features for institutional traders and organizations.',
      features: [
        'Multi-currency support',
        'Advanced trading tools',
        'Currency Conversion Tools'
      ],
      status: 'planned',
    },
  ]

  return (
    <section className="product-roadmap-section">
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
            Product <span className="roadmap-gradient-text">Roadmap</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#374151' }}>
            Our journey to building the most advanced AI trading platform
          </p>
        </motion.div>

        {/* Roadmap Grid */}
        <div className="roadmap-grid-container">
          <div className="roadmap-grid">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30, scale: 0.94, rotateX: -5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`roadmap-card ${item.status}`}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  scale: 1.02,
                  transition: { duration: 0.4, ease: 'easeOut' },
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card Glow */}
                <div className="card-glow"></div>

                {/* Card Surface */}
                <div className="card-surface">
                  {/* Phase Badge */}
                  <div className={`phase-badge ${item.status}`} data-phase={item.phase}>
                    <span className="phase-label">{item.phase}</span>
                    <span className="phase-status-indicator"></span>
                  </div>

                  {/* Card Content */}
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>

                    {/* Features List */}
                    <ul className="features-list">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <svg
                            className="feature-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M13.333 4L6 11.333 2.667 8"
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
                </div>

                {/* Card Shadow */}
                <div className="card-shadow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductRoadmap
