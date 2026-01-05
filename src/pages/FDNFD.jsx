import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { slideInFromBottom, slideInFromLeft, slideInFromRight, sectionHeader, staggerContainer, viewportConfig, buttonInteraction } from '../utils/motionUtils'

const FDNFD = () => {
  const navigate = useNavigate()

  const features = [
    {
      title: 'FD Optimization',
      description: 'AI analyzes interest rates and terms to find the best Fixed Deposit options',
      icon: '🏦',
    },
    {
      title: 'NFD Strategies',
      description: 'Intelligent Non-Fixed Deposit strategies with dynamic allocation algorithms',
      icon: '📈',
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis for different deposit products and institutions',
      icon: '🔍',
    },
    {
      title: 'Return Maximization',
      description: 'Optimize your returns by balancing FD and NFD investments intelligently',
      icon: '💹',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI <span className="gradient-text">FD / NFD Strategies</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-8 leading-relaxed">
              Optimize your Fixed Deposit and Non-Fixed Deposit investments with AI-powered analysis.
              Our intelligent system evaluates market conditions, interest rates, and risk factors to
              recommend the best investment strategies for maximum returns.
            </p>
            <motion.button
              variants={buttonInteraction}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
            >
              Explore Strategies
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Investment <span className="gradient-text">Intelligence</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                className="p-8 rounded-2xl bg-card-dark border border-white/10 hover:border-secondary/50 transition-all group"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card-dark border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Optimize Your <span className="gradient-text">Investments</span>
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Let AI guide your FD and NFD investment decisions for better returns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                variants={buttonInteraction}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
              >
                Get Started
              </motion.button>
              <motion.button
                variants={buttonInteraction}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate('/')}
                className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-all"
              >
                Back to Home
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FDNFD

