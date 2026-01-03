import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import TradingCard from '../components/TradingCard'
import ServicesSection from '../components/ServicesSection'
import BenefitsSection from '../components/BenefitsSection'
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation'
import HeroBotAnimation from '../components/HeroBotAnimation'
import ProductRoadmap from '../components/ProductRoadmap'
import PricingSection from '../components/PricingSection'
import TestimonialsSection from '../components/TestimonialsSection'

const Home = () => {
  const navigate = useNavigate()

  const tradingCategories = [
    {
      title: 'In Stock',
      description: 'AI-powered stock trading with real-time analysis, pattern recognition, and automated execution strategies.',
      icon: '📈',
      gradient: ['#6B8E23', '#8FAF6A'],
      path: '/stocks',
    },
    {
      title: 'In Crypto',
      description: 'Advanced cryptocurrency trading bots with market sentiment analysis and risk management algorithms.',
      icon: '₿',
      gradient: ['#8FAF6A', '#4CAF50'],
      path: '/crypto',
    },
    {
      title: 'In Forex / Commodities',
      description: 'Intelligent forex and commodities trading with predictive analytics and automated position management.',
      icon: '💱',
      gradient: ['#6B8E23', '#5E7C3A'],
      path: '/forex',
    },
    {
      title: 'In F.D / N.F.D',
      description: 'Fixed Deposit and Non-Fixed Deposit strategies optimized with AI for maximum returns and risk assessment.',
      icon: '💰',
      gradient: ['#8FAF6A', '#4CAF50'],
      path: '/fd-nfd',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{
        background: '#F7FAF5',
      }}>
        {/* Background Animation */}
        <HeroBackgroundAnimation />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6 md:space-y-8"
            >
              {/* Headline - Sequential word reveal */}
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" 
                  style={{ color: '#243024' }}
                >
                  {['Invest', 'in', 'Forex', 'with'].map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: 'easeOut'
                      }}
                      className="inline-block mr-2"
                    >
                      {word}{' '}
                    </motion.span>
                  ))}
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                    className="gradient-text inline-block"
                  >
                    AI Software
                  </motion.span>
                </motion.h1>
              </div>

              {/* Description - Fade in after headline */}
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl" 
                style={{ color: '#4A5A4A' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              >
                Maximize your returns by trading in global currencies. Whether you're a seasoned investor or just starting out, NEXT GEN BOT makes it easy to grow your earnings online.
              </motion.p>

              {/* CTA Buttons - Animate last */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/register')}
                  className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl text-white font-semibold text-base md:text-lg transition-all duration-300 ease-in-out cursor-pointer w-full sm:w-auto"
                  style={{
                    background: 'linear-gradient(135deg, #6B8E23 0%, #8FAF6A 100%)',
                    boxShadow: '0 4px 16px rgba(107, 142, 35, 0.3)'
                  }}
                  whileHover={{
                    boxShadow: '0 6px 24px rgba(107, 142, 35, 0.4)',
                    scale: 1.03,
                    y: -2
                  }}
                  style={{ transformStyle: 'preserve-3d', minHeight: '48px' }}
                >
                  Register
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/download')}
                  className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl border-2 font-semibold text-base md:text-lg hover:bg-olive-primary/10 transition-all duration-300 ease-in-out cursor-pointer w-full sm:w-auto"
                  style={{
                    borderColor: '#6B8E23',
                    color: '#6B8E23'
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -2
                  }}
                  style={{ transformStyle: 'preserve-3d', minHeight: '48px' }}
                >
                  Download Now
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Bot Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex items-center justify-center hero-bot-wrapper"
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

      {/* Product Roadmap Section */}
      <ProductRoadmap />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-10 md:py-12 border-t" style={{
        background: '#EEF3EC',
        borderColor: 'rgba(107, 142, 35, 0.1)'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-4" style={{ color: '#243024' }}>
                  Ready to Transform Your <span className="gradient-text">Trading?</span>
                </h2>
                <p className="text-base sm:text-lg mb-6 px-4" style={{ color: '#4A5A4A' }}>
              Join thousands of traders using AI to maximize their returns and minimize risks
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/register')}
                className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl text-white font-semibold text-base md:text-lg transition-all cursor-pointer w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, #6B8E23 0%, #8FAF6A 100%)',
                  boxShadow: '0 4px 16px rgba(107, 142, 35, 0.3)'
                }}
                whileHover={{
                  boxShadow: '0 6px 24px rgba(107, 142, 35, 0.4)',
                  scale: 1.03
                }}
                style={{ minHeight: '48px' }}
              >
                Register
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/download')}
                className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl border-2 font-semibold text-base md:text-lg hover:bg-olive-primary/10 transition-all cursor-pointer w-full sm:w-auto"
                style={{
                  borderColor: '#6B8E23',
                  color: '#6B8E23'
                }}
                whileHover={{
                  scale: 1.03
                }}
                style={{ minHeight: '48px' }}
              >
                Download Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

