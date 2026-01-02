import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [cardsPerView, setCardsPerView] = useState(2)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Professional Trader',
      content: 'Next Gen Bot has completely transformed my trading strategy. The AI-powered algorithms help me make smarter decisions and maximize my returns. I\'ve seen consistent growth in my portfolio since using this platform.',
    },
    {
      name: 'Michael Chen',
      role: 'Crypto Investor',
      content: 'The automated trading features are incredible. I can monitor multiple markets 24/7 without constantly checking my phone. The risk management tools have protected my investments while optimizing for growth.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Forex Trader',
      content: 'As someone new to trading, the user-friendly interface made it easy to get started. The personalized trading plans tailored to my goals have helped me grow my investments confidently.',
    },
    {
      name: 'David Thompson',
      role: 'Investment Advisor',
      content: 'The real-time market analysis and expert insights have become essential to my trading workflow. The platform\'s accuracy and reliability make it a trusted tool in my daily operations.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Day Trader',
      content: 'The 24/7 automated trading has been a game-changer. I never miss opportunities anymore, and the AI executes trades at optimal times even when I\'m not actively monitoring the markets.',
    },
    {
      name: 'Robert Kim',
      role: 'Portfolio Manager',
      content: 'The multi-asset trading capability across Forex, Crypto, and Stocks from one unified platform is exactly what I needed. The comprehensive risk management tools give me peace of mind.',
    },
  ]

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(2) // Desktop: 2 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(1.5) // Tablet: 1.5 cards (peek)
      } else {
        setCardsPerView(1) // Mobile: 1 card
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - Math.ceil(cardsPerView))

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0 // Loop back to start
      }
      return prev + 1
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  // Auto-scroll effect
  useEffect(() => {
    if (!isInView || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0 // Loop back to start for infinite scroll
        }
        return prev + 1
      })
    }, 2000) // Exactly 2 seconds

    return () => clearInterval(interval)
  }, [isInView, isPaused, maxIndex])

  return (
    <section
      ref={ref}
      className="py-12"
      style={{
        background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 50%, #FAFAFA 100%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0F172A' }}>
            Connect With Our <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#374151' }}>
            Discover what our clients say about their experience with Next Gen Bot AI trading solutions
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center gap-4">
            {/* Testimonials Cards */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{
                  x: `-${currentIndex * (100 / cardsPerView)}%`,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 card-3d-container"
                    style={{
                      width: `${100 / cardsPerView}%`,
                      perspective: '1000px',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + (index % 2) * 0.1,
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <motion.div
                      className="relative p-6 rounded-2xl border border-gray-200 h-full"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 250, 0.95) 100%)',
                        boxShadow: '0 4px 24px rgba(220, 38, 38, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)',
                        transformStyle: 'preserve-3d',
                      }}
                      animate={{
                        y: hoveredCard === index ? -6 : 0,
                        scale: hoveredCard === index ? 1.02 : 1,
                        rotateX: hoveredCard === index ? 2 : 0,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {/* Hover Glow Effect */}
                      {hoveredCard === index && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 70%)',
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      {/* Quote Icon */}
                      <div className="relative z-10 mb-4">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{
                            opacity: 0.2,
                          }}
                        >
                          <path
                            d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
                            fill="url(#quoteGradient)"
                          />
                          <defs>
                            <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#DC2626" />
                              <stop offset="100%" stopColor="#10B981" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      {/* Testimonial Content */}
                      <div className="relative z-10">
                        <p
                          className="text-base leading-relaxed mb-4"
                          style={{
                            color: '#374151',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
                          }}
                        >
                          {testimonial.content}
                        </p>

                        {/* Client Info */}
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg mr-4">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h4
                              className="font-bold text-lg"
                              style={{
                                color: '#0F172A',
                                textShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
                              }}
                            >
                              {testimonial.name}
                            </h4>
                            <p
                              className="text-sm"
                              style={{
                                color: '#6B7280',
                                textShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
                              }}
                            >
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Shadow on Hover */}
                      {hoveredCard === index && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{
                            boxShadow: '0 12px 40px rgba(220, 38, 38, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.06)',
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows - Desktop & Tablet Only */}
            <div className="hidden md:flex flex-col gap-4">
              <motion.button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: '#0F172A' }}
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>
              <motion.button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: '#0F172A' }}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

