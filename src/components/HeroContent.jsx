import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HeroContent = ({ onAnimationComplete }) => {
  const [showContent, setShowContent] = useState(false)
  const headline = 'Invest in Forex with AI Software'
  const words = headline.split(' ')

  useEffect(() => {
    // Start content reveal after 3 seconds (Phase 4)
    const timer = setTimeout(() => {
      setShowContent(true)
      if (onAnimationComplete) {
        setTimeout(() => onAnimationComplete(), 1000)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [onAnimationComplete])

  return (
    <div className="text-center max-w-4xl mx-auto">
      {/* Headline - Word by Word */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 20,
            }}
            transition={{
              duration: 0.5,
              delay: 3 + index * 0.1,
              ease: 'easeOut',
            }}
          >
            {index === 3 || index === 4 ? (
              <span className="gradient-text">{word}</span>
            ) : (
              <span className="text-white">{word}</span>
            )}
            {index < words.length - 1 && ' '}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheading - Fade In */}
      <motion.p
        className="text-xl md:text-2xl text-text-muted mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showContent ? 1 : 0,
          y: showContent ? 0 : 20,
        }}
        transition={{
          duration: 0.6,
          delay: 3.5,
          ease: 'easeOut',
        }}
      >
        Maximize your returns by trading in global currencies. Whether you're a seasoned investor or just starting out, NEXT GEN BOT makes it easy to grow your earnings online.
      </motion.p>

      {/* CTA Button - Slide Up */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: showContent ? 1 : 0,
          y: showContent ? 0 : 30,
        }}
        transition={{
          duration: 0.6,
          delay: 3.8,
          ease: 'easeOut',
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all cursor-pointer"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  )
}

export default HeroContent

