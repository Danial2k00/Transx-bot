import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const MarketAwakening = () => {
  const [animationPhase, setAnimationPhase] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    const timeline = async () => {
      // Phase 1: Initial State (0-0.5s)
      await new Promise(resolve => setTimeout(resolve, 500))
      setAnimationPhase(1)

      // Phase 2: AI Activation (0.5-1.5s)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setAnimationPhase(2)

      // Phase 3: Market Intelligence Flow (1.5-3s)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setAnimationPhase(3)

      // Phase 4: Content Reveal (3-4s)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setAnimationPhase(4)

      // Phase 5: Idle State (After 4s)
      setAnimationPhase(5)
    }

    timeline()
  }, [])

  // Trading icon positions (percentage-based, relative to center 50%)
  const iconPositions = [
    { x: -15, y: -10, label: 'Stock', icon: '📈' },
    { x: 15, y: -10, label: 'Crypto', icon: '₿' },
    { x: -15, y: 10, label: 'Forex', icon: '💱' },
    { x: 15, y: 10, label: 'FD/NFD', icon: '💰' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Initial Blur Overlay - Phase 1 */}
      <motion.div
        className="absolute inset-0 backdrop-blur-sm"
        initial={{ opacity: 1 }}
        animate={{ opacity: animationPhase >= 1 ? 0 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* AI Bot Pulse - Phase 2 */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: animationPhase >= 1 ? [1, 1.2, 1] : 0,
          opacity: animationPhase >= 1 ? [0.6, 0.8, 0.6] : 0,
        }}
        transition={{
          duration: 2,
          repeat: animationPhase >= 1 && animationPhase < 5 ? Infinity : 0,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl" />
      </motion.div>

      {/* Connection Lines from Bot to Icons - Phase 2 */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0.4" />
          </linearGradient>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {iconPositions.map((icon, index) => (
          <motion.line
            key={index}
            x1="50%"
            y1="50%"
            x2={`${50 + icon.x}%`}
            y2={`${50 + icon.y}%`}
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            filter="url(#lineGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: animationPhase >= 2 ? 1 : 0,
              opacity: animationPhase >= 2 ? [0.6, 1, 0.6] : 0,
            }}
            transition={{
              pathLength: { duration: 0.8, delay: index * 0.15, ease: 'easeOut' },
              opacity: {
                duration: 2,
                repeat: animationPhase >= 5 ? Infinity : 0,
                ease: 'easeInOut',
              },
            }}
          />
        ))}
      </svg>

      {/* Trading Icons - Phase 2 */}
      {iconPositions.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${50 + icon.x}%`,
            top: `${50 + icon.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: animationPhase >= 2 ? 1 : 0,
            opacity: animationPhase >= 2 ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.15,
            type: 'spring',
            stiffness: 200,
          }}
        >
          <motion.div
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-2xl backdrop-blur-sm pointer-events-auto cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{
              boxShadow: animationPhase >= 5
                ? [
                    '0 0 20px rgba(99, 102, 241, 0.3)',
                    '0 0 30px rgba(34, 211, 238, 0.4)',
                    '0 0 20px rgba(99, 102, 241, 0.3)',
                  ]
                : '0 0 20px rgba(99, 102, 241, 0.3)',
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: animationPhase >= 5 ? Infinity : 0,
                ease: 'easeInOut',
              },
            }}
          >
            {icon.icon}
          </motion.div>
        </motion.div>
      ))}

      {/* Candlestick Charts Drawing - Phase 3 */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: animationPhase >= 3 ? 0.6 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg viewBox="0 0 200 120" className="w-full h-full">
          {[
            { x: 20, y: 40, h: 30, color: '#DC2626' },
            { x: 40, y: 30, h: 40, color: '#DC2626' },
            { x: 60, y: 50, h: 20, color: '#DC2626' },
            { x: 80, y: 20, h: 50, color: '#EF4444' },
            { x: 100, y: 35, h: 35, color: '#EF4444' },
            { x: 120, y: 25, h: 45, color: '#DC2626' },
            { x: 140, y: 45, h: 25, color: '#DC2626' },
            { x: 160, y: 15, h: 55, color: '#EF4444' },
          ].map((candle, index) => (
            <g key={index}>
              <motion.rect
                x={candle.x}
                y={candle.y}
                width="8"
                height={candle.h}
                fill={candle.color}
                initial={{ scaleY: 0 }}
                animate={{
                  scaleY: animationPhase >= 3 ? 1 : 0,
                  opacity: animationPhase >= 3 ? 0.8 : 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 1.5 + index * 0.1,
                  ease: 'easeOut',
                }}
                style={{ transformOrigin: 'bottom' }}
              />
              <motion.line
                x1={candle.x + 4}
                y1={candle.y}
                x2={candle.x + 4}
                y2={candle.y - 5}
                stroke={candle.color}
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: animationPhase >= 3 ? 1 : 0,
                }}
                transition={{
                  duration: 0.2,
                  delay: 1.5 + index * 0.1 + 0.4,
                }}
              />
              <motion.line
                x1={candle.x + 4}
                y1={candle.y + candle.h}
                x2={candle.x + 4}
                y2={candle.y + candle.h + 5}
                stroke={candle.color}
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: animationPhase >= 3 ? 1 : 0,
                }}
                transition={{
                  duration: 0.2,
                  delay: 1.5 + index * 0.1 + 0.4,
                }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Data Points Animation - Phase 3 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {[
            { cx: 100, cy: 50, delay: 1.8 },
            { cx: 150, cy: 100, delay: 2.0 },
            { cx: 100, cy: 150, delay: 2.2 },
            { cx: 50, cy: 100, delay: 2.4 },
          ].map((point, index) => (
            <motion.circle
              key={index}
              cx={point.cx}
              cy={point.cy}
              r="4"
              fill="#6366F1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: animationPhase >= 3 ? [1, 1.3, 1] : 0,
                opacity: animationPhase >= 3 ? [0.5, 1, 0.5] : 0,
              }}
              transition={{
                scale: {
                  duration: 0.3,
                  delay: point.delay,
                  type: 'spring',
                  stiffness: 200,
                },
                opacity: {
                  duration: 2,
                  repeat: animationPhase >= 5 ? Infinity : 0,
                  ease: 'easeInOut',
                  delay: point.delay,
                },
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Numbers - Phase 3 */}
      {['+2.4%', '1,234', '€1.0845', '₿45.2K'].map((num, index) => (
        <motion.div
          key={index}
          className="absolute text-sm font-mono text-primary"
          style={{
            left: `${20 + index * 25}%`,
            top: `${30 + (index % 2) * 20}%`,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: animationPhase >= 3 ? [0.4, 0.8, 0.4] : 0,
            y: animationPhase >= 3 ? [0, -5, 0] : 10,
          }}
          transition={{
            opacity: {
              duration: 3,
              repeat: animationPhase >= 5 ? Infinity : 0,
              ease: 'easeInOut',
              delay: 2 + index * 0.2,
            },
            y: {
              duration: 4,
              repeat: animationPhase >= 5 ? Infinity : 0,
              ease: 'easeInOut',
              delay: 2 + index * 0.2,
            },
          }}
        >
          {num}
        </motion.div>
      ))}
    </div>
  )
}

export default MarketAwakening

