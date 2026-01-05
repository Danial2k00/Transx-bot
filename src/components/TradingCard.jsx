import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { slideInFromBottom, cardHover, viewportConfig, get3DTilt } from '../utils/motionUtils'

const TradingCard = ({ title, description, icon, gradient, path, delay = 0 }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const navigate = useNavigate()

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const tilt = get3DTilt(e.clientX, e.clientY, rect)
    setRotate({ x: tilt.rotateX, y: tilt.rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleClick = () => {
    navigate(path)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={slideInFromBottom}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={{ delay: delay || 0 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="card-3d-container cursor-pointer"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="card-3d relative h-full"
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="relative h-full p-8 rounded-2xl border overflow-hidden group"
          style={{
            background: '#FFFFFF',
            boxShadow: '0 4px 24px rgba(220, 38, 38, 0.08), 0 0 0 1px rgba(220, 38, 38, 0.08)',
            borderColor: 'rgba(220, 38, 38, 0.1)',
          }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${gradient[0]}40 0%, transparent 70%)`,
            }}
          />

          {/* Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: `0 0 30px ${gradient[0]}40, inset 0 0 30px ${gradient[0]}20`,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-3xl"
              style={{
                background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
              }}
              animate={{
                rotate: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>

            <h3 className="text-2xl font-bold mb-3" style={{ 
              color: '#243024',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.04)'
            }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ 
              color: '#4A5A4A',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.04)'
            }}>{description}</p>

            <motion.div
              className="mt-6 flex items-center font-semibold text-sm"
              style={{ color: '#DC2626' }}
              animate={{
                x: isHovered ? 10 : 0,
              }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Explore More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TradingCard

