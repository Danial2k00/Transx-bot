import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromBottom, sectionHeader, viewportConfig } from '../utils/motionUtils'

const ProductRoadmap = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, margin: '-100px' })

  const roadmapPhases = [
    {
      id: 'P1',
      title: 'Core AI Engine',
      description: 'Advanced machine learning algorithms for market analysis and prediction. Real-time data processing and pattern recognition.',
      status: 'completed',
      position: 'left'
    },
    {
      id: 'P2',
      title: 'Trading Interface',
      description: 'Intuitive dashboard with live market data visualization. Customizable widgets and real-time portfolio tracking.',
      status: 'completed',
      position: 'right'
    },
    {
      id: 'P3',
      title: 'Risk Management',
      description: 'Automated risk assessment and position sizing. Stop-loss and take-profit optimization with AI recommendations.',
      status: 'active',
      position: 'left'
    },
    {
      id: 'P4',
      title: 'Multi-Asset Support',
      description: 'Expanded trading capabilities across stocks, crypto, forex, and commodities. Unified portfolio management.',
      status: 'planned',
      position: 'right'
    },
    {
      id: 'P5',
      title: 'Social Trading',
      description: 'Connect with other traders, share strategies, and follow top performers. Community-driven insights and signals.',
      status: 'planned',
      position: 'left'
    },
    {
      id: 'P6',
      title: 'AI Analytics Suite',
      description: 'Advanced analytics dashboard with predictive modeling. Custom AI model training and backtesting suite.',
      status: 'planned',
      position: 'right'
    }
  ]

  const getStatusBadge = (status) => {
    const badges = {
      completed: { text: 'Completed', bg: 'rgba(220, 38, 38, 0.12)', textColor: '#DC2626', borderColor: 'rgba(220, 38, 38, 0.2)' },
      active: { text: 'In Progress', bg: 'rgba(34, 211, 238, 0.12)', textColor: '#22D3EE', borderColor: 'rgba(34, 211, 238, 0.2)' },
      planned: { text: 'Planned', bg: 'rgba(156, 163, 175, 0.12)', textColor: '#9CA3AF', borderColor: 'rgba(156, 163, 175, 0.2)' }
    }
    return badges[status] || badges.planned
  }

  const getNodeColor = (phaseId) => {
    const colors = {
      P1: '#DC2626', // Primary red (logo color)
      P2: '#22D3EE', // Teal/Cyan
      P3: '#3B82F6', // Blue
      P4: '#8B5CF6', // Purple
      P5: '#EC4899', // Pink
      P6: '#F59E0B'  // Amber
    }
    return colors[phaseId] || '#94A3B8'
  }

  return (
    <section 
      ref={containerRef}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: '#FAFBFC' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#1F2937' }}>
            Product <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Our journey to revolutionize AI-powered trading
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Vertical Timeline Line - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 hidden md:block">
            {/* Soft Glow Background */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.15) 0%, rgba(220, 38, 38, 0.2) 50%, rgba(34, 211, 238, 0.15) 100%)',
                filter: 'blur(6px)',
                opacity: 0.4
              }}
            />
            
            {/* Animated Line Draw */}
            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.6) 0%, rgba(220, 38, 38, 0.7) 50%, rgba(34, 211, 238, 0.6) 100%)',
                boxShadow: '0 0 12px rgba(34, 211, 238, 0.3), 0 0 24px rgba(220, 38, 38, 0.2)',
                height: '100%'
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Vertical Timeline Line - Mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:hidden">
            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                background: 'linear-gradient(to bottom, rgba(34, 211, 238, 0.5) 0%, rgba(220, 38, 38, 0.6) 50%, rgba(34, 211, 238, 0.5) 100%)',
                boxShadow: '0 0 8px rgba(34, 211, 238, 0.25)',
                height: '100%'
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Roadmap Items */}
          <div className="relative space-y-20 md:space-y-28">
            {roadmapPhases.map((phase, index) => {
              const badge = getStatusBadge(phase.status)
              const nodeColor = getNodeColor(phase.id)
              const cardSide = phase.position

              return (
                <motion.div
                  key={phase.id}
                  className="relative flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewportConfig}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1 
                  }}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:flex w-full items-center justify-center">
                    {/* Left Card Container - Always present for alignment */}
                    <div className="w-[45%] pr-12 flex justify-end">
                      {cardSide === 'left' && (
                        <motion.div
                          className="w-full max-w-md"
                          variants={slideInFromLeft}
                          initial="hidden"
                          whileInView="visible"
                          viewport={viewportConfig}
                        >
                          <RoadmapCard phase={phase} badge={badge} />
                        </motion.div>
                      )}
                    </div>

                    {/* Center Node - Always centered */}
                    <div className="flex-shrink-0 flex justify-center">
                      <TimelineNode 
                        phase={phase} 
                        nodeColor={nodeColor}
                        status={phase.status}
                        index={index}
                      />
                    </div>

                    {/* Right Card Container - Always present for alignment */}
                    <div className="w-[45%] pl-12 flex justify-start">
                      {cardSide === 'right' && (
                        <motion.div
                          className="w-full max-w-md"
                          variants={slideInFromRight}
                          initial="hidden"
                          whileInView="visible"
                          viewport={viewportConfig}
                        >
                          <RoadmapCard phase={phase} badge={badge} />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex flex-col items-center w-full">
                    {/* Timeline Node */}
                    <TimelineNode 
                      phase={phase} 
                      nodeColor={nodeColor}
                      status={phase.status}
                      index={index}
                    />

                    {/* Card Below Node */}
                    <motion.div
                      className="w-full max-w-md mt-6"
                      variants={slideInFromBottom}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportConfig}
                    >
                      <RoadmapCard phase={phase} badge={badge} />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// Timeline Node Component - All nodes have the same design
const TimelineNode = ({ phase, nodeColor, status, index }) => {
  return (
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        type: 'spring', 
        stiffness: 200, 
        damping: 20,
        delay: index * 0.1 + 0.2
      }}
    >
      {/* Soft Outer Glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${nodeColor}40 0%, transparent 70%)`,
          filter: 'blur(10px)',
          width: '48px',
          height: '48px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ 
          scale: [0, 1.2, 1],
          opacity: [0, 0.6, 0.4]
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          delay: index * 0.1 + 0.3,
          ease: [0.22, 1, 0.36, 1]
        }}
      />

      {/* Inner Solid Core - Same design for all */}
      <motion.div
        className="relative rounded-full"
        style={{
          width: '16px',
          height: '16px',
          background: nodeColor,
          boxShadow: `0 0 12px ${nodeColor}60, 0 0 24px ${nodeColor}30`,
          border: `2px solid ${status === 'active' ? '#FFFFFF' : 'transparent'}`
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: [0, 1.3, 1] }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6,
          delay: index * 0.1 + 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
      />
    </motion.div>
  )
}

// Roadmap Card Component
const RoadmapCard = ({ phase, badge }) => {
  return (
    <motion.div
      className="relative"
      style={{
        width: '100%',
        minHeight: '200px',
        height: 'auto'
      }}
      whileHover={{ 
        y: -2,
        transition: { duration: 0.2 }
      }}
    >
      {/* Card Container - Fixed Dimensions */}
      <div
        className="relative p-6 md:p-8 rounded-2xl border overflow-hidden h-full"
        style={{
          background: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)',
          borderColor: 'rgba(226, 232, 240, 0.8)',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Phase Badge & Status Row */}
          <div className="flex items-center justify-between mb-4">
            {/* Phase Badge */}
            <div
              className="px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{
                background: 'rgba(34, 211, 238, 0.1)',
                color: '#22D3EE',
                border: '1px solid rgba(34, 211, 238, 0.2)'
              }}
            >
              {phase.id}
            </div>

            {/* Status Badge */}
            <div
              className="px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{
                background: badge.bg,
                color: badge.textColor,
                border: `1px solid ${badge.borderColor}`
              }}
            >
              {badge.text}
            </div>
          </div>

          {/* Title */}
          <h3 
            className="text-xl md:text-2xl font-bold mb-3 leading-tight"
            style={{ color: '#1F2937' }}
          >
            {phase.title}
          </h3>

          {/* Description */}
          <p 
            className="text-sm md:text-base leading-relaxed flex-1"
            style={{ color: '#64748B', lineHeight: '1.6' }}
          >
            {phase.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductRoadmap
