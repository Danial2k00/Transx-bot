import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import TradingCard from '../components/TradingCard'
import ServicesSection from '../components/ServicesSection'
import BenefitsSection from '../components/BenefitsSection'
import HeroBackgroundAnimation from '../components/HeroBackgroundAnimation'
import ProductRoadmap from '../components/ProductRoadmap'
import PricingSection from '../components/PricingSection'
import TestimonialsSection from '../components/TestimonialsSection'
import InteractiveBot from '../components/InteractiveBot'

const Home = () => {
  const navigate = useNavigate()

  const tradingCategories = [
    {
      title: 'In Stock',
      description: 'AI-powered stock trading with real-time analysis, pattern recognition, and automated execution strategies.',
      icon: '📈',
      gradient: ['#6366F1', '#22D3EE'],
      path: '/stocks',
    },
    {
      title: 'In Crypto',
      description: 'Advanced cryptocurrency trading bots with market sentiment analysis and risk management algorithms.',
      icon: '₿',
      gradient: ['#10B981', '#DC2626'],
      path: '/crypto',
    },
    {
      title: 'In Forex / Commodities',
      description: 'Intelligent forex and commodities trading with predictive analytics and automated position management.',
      icon: '💱',
      gradient: ['#F59E0B', '#EF4444'],
      path: '/forex',
    },
    {
      title: 'In F.D / N.F.D',
      description: 'Fixed Deposit and Non-Fixed Deposit strategies optimized with AI for maximum returns and risk assessment.',
      icon: '💰',
      gradient: ['#10B981', '#16A34A'],
      path: '/fd-nfd',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{
        background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 50%, #FAFAFA 100%)',
      }}>
        {/* Background Animation */}
        <HeroBackgroundAnimation />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-8"
            >
              {/* Headline - Sequential word reveal */}
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" 
                  style={{ color: '#0F172A' }}
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
                className="text-xl md:text-2xl leading-relaxed max-w-xl" 
                style={{ color: '#374151' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
              >
                Maximize your returns by trading in global currencies. Whether you're a seasoned investor or just starting out, NEXT GEN BOT makes it easy to grow your earnings online.
              </motion.p>

              {/* CTA Buttons - Animate last */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/register')}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 ease-in-out cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  Register
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/download')}
                  className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-all duration-300 ease-in-out cursor-pointer"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  Download Now
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Interactive Bot */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex items-center justify-center"
            >
              <InteractiveBot />
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
        background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 50%, #FAFAFA 100%)',
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0F172A' }}>
                  Trading <span className="gradient-text">Categories</span>
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{ color: '#374151' }}>
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
      <section className="py-12 border-t border-gray-200" style={{
        background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 50%, #FAFAFA 100%)',
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0F172A' }}>
                  Ready to Transform Your <span className="gradient-text">Trading?</span>
                </h2>
                <p className="text-lg mb-6" style={{ color: '#374151' }}>
              Join thousands of traders using AI to maximize their returns and minimize risks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/register')}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all cursor-pointer"
              >
                Register
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/download')}
                className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-all cursor-pointer"
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

