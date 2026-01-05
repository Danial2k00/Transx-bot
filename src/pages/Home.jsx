import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import TradingCard from '../components/TradingCard'
import ServicesSection from '../components/ServicesSection'
import BenefitsSection from '../components/BenefitsSection'
import HeroBotAnimation from '../components/HeroBotAnimation'
import PricingSection from '../components/PricingSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ProductRoadmap from '../components/ProductRoadmap'
import { slideInFromLeft, slideInFromRight, slideInFromBottom, springConfig, viewportConfig, buttonInteraction, heroFadeZoom, floatUp, riseWithScale, ctaEmphasis, staggerContainer } from '../utils/motionUtils'

const Home = () => {
  const navigate = useNavigate()

  const tradingCategories = [
    {
      title: 'In Stock',
      description: 'AI-powered stock trading with real-time analysis, pattern recognition, and automated execution strategies.',
      icon: '📈',
      gradient: ['#DC2626', '#EF4444'],
      path: '/stocks',
    },
    {
      title: 'In Crypto',
      description: 'Advanced cryptocurrency trading bots with market sentiment analysis and risk management algorithms.',
      icon: '₿',
      gradient: ['#DC2626', '#EF4444'],
      path: '/crypto',
    },
    {
      title: 'In Forex / Commodities',
      description: 'Intelligent forex and commodities trading with predictive analytics and automated position management.',
      icon: '💱',
      gradient: ['#DC2626', '#B91C1C'],
      path: '/forex',
    },
    {
      title: 'In F.D / N.F.D',
      description: 'Fixed Deposit and Non-Fixed Deposit strategies optimized with AI for maximum returns and risk assessment.',
      icon: '💰',
      gradient: ['#DC2626', '#EF4444'],
      path: '/fd-nfd',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{
        background: '#F7FAF5',
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              variants={heroFadeZoom}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-6 md:space-y-8"
            >
              {/* Headline - Sequential word reveal */}
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" 
                  style={{ color: '#243024' }}
                  variants={staggerContainer}
                >
                  {['Invest', 'in', 'Forex', 'with'].map((word, index) => (
                    <motion.span
                      key={index}
                      variants={slideInFromBottom}
                      className="inline-block mr-2"
                    >
                      {word}{' '}
                    </motion.span>
                  ))}
                  <motion.span
                    variants={slideInFromBottom}
                    className="gradient-text inline-block"
                  >
                    AI Software
                  </motion.span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl" 
                style={{ color: '#4A5A4A' }}
                variants={slideInFromBottom}
                transition={{ delay: 0.1 }}
              >
                Maximize your returns by trading in global currencies. Whether you're a seasoned investor or just starting out, NEXT GEN BOT makes it easy to grow your earnings online.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
                variants={slideInFromBottom}
                transition={{ delay: 0.15 }}
              >
                <motion.button
                  variants={buttonInteraction}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => navigate('/register')}
                  className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl text-white font-semibold text-base md:text-lg transition-all duration-300 ease-in-out cursor-pointer w-full sm:w-auto relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
                    boxShadow: '0 4px 16px rgba(220, 38, 38, 0.3)',
                    transformStyle: 'preserve-3d',
                    minHeight: '48px'
                  }}
                  onHoverStart={() => {}}
                  onHoverEnd={() => {}}
                >
                  Register
                </motion.button>
                <motion.button
                  variants={buttonInteraction}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => navigate('/download')}
                  className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl border-2 font-semibold text-base md:text-lg hover:bg-olive-primary/10 transition-all duration-300 ease-in-out cursor-pointer w-full sm:w-auto relative overflow-hidden"
                  style={{
                    borderColor: '#DC2626',
                    color: '#DC2626',
                    transformStyle: 'preserve-3d',
                    minHeight: '48px'
                  }}
                >
                  Download Now
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Bot Animation */}
            <motion.div
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={{ delay: 0.2 }}
              className="relative flex items-center justify-center"
              style={{
                minHeight: '500px',
                height: '100%',
              }}
            >
              <HeroBotAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Services We Offer Section */}
      <ServicesSection />

      {/* Trading Categories Section */}
      <section className="py-20" style={{
        background: '#F7FAF5',
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#243024' }}>
                  Trading <span className="gradient-text">Categories</span>
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5A4A' }}>
              Choose your preferred trading category and let AI optimize your strategy
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {tradingCategories.map((category, index) => (
              <TradingCard
                key={category.title}
                {...category}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Product Roadmap Section */}
      <ProductRoadmap />

      {/* CTA Section */}
      <motion.section 
        className="py-10 md:py-12 border-t relative overflow-hidden"
        style={{
          borderColor: 'rgba(220, 38, 38, 0.1)'
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #EEF3EC 0%, #E8F0E5 100%)',
              'linear-gradient(135deg, #E8F0E5 0%, #EEF3EC 100%)',
              'linear-gradient(135deg, #EEF3EC 0%, #E8F0E5 100%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ zIndex: 0 }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={ctaEmphasis}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto"
          >
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-4" 
                  style={{ color: '#243024' }}
                  variants={slideInFromBottom}
                >
                  Ready to Transform Your <span className="gradient-text">Trading?</span>
                </motion.h2>
                <motion.p 
                  className="text-base sm:text-lg mb-6 px-4" 
                  style={{ color: '#4A5A4A' }}
                  variants={slideInFromBottom}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  transition={{ delay: 0.1 }}
                >
              Join thousands of traders using AI to maximize their returns and minimize risks
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
              variants={slideInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={{ delay: 0.15 }}
            >
              <motion.button
                variants={buttonInteraction}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate('/register')}
                className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl text-white font-semibold text-base md:text-lg transition-all cursor-pointer w-full sm:w-auto relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
                  boxShadow: '0 4px 16px rgba(220, 38, 38, 0.3)',
                  minHeight: '48px'
                }}
              >
                Register
              </motion.button>
              <motion.button
                variants={buttonInteraction}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate('/download')}
                className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl border-2 font-semibold text-base md:text-lg hover:bg-olive-primary/10 transition-all cursor-pointer w-full sm:w-auto relative overflow-hidden"
                style={{
                  borderColor: '#DC2626',
                  color: '#DC2626',
                  minHeight: '48px'
                }}
              >
                Download Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home

