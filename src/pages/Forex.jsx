import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Forex = () => {
  const navigate = useNavigate()

  const features = [
    {
      title: 'Currency Pair Analysis',
      description: 'Deep analysis of major and exotic currency pairs with predictive modeling',
      icon: '💱',
    },
    {
      title: 'Commodities Trading',
      description: 'AI-powered trading for gold, oil, and other commodities with trend prediction',
      icon: '🛢️',
    },
    {
      title: 'Leverage Management',
      description: 'Intelligent leverage optimization based on market volatility and risk tolerance',
      icon: '⚖️',
    },
    {
      title: 'Economic Calendar',
      description: 'Automated trading around major economic events and news releases',
      icon: '📅',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI <span className="gradient-text">Forex & Commodities</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-8 leading-relaxed">
              Master the forex and commodities markets with AI-driven insights and automated execution.
              Our intelligent systems analyze global economic indicators, central bank policies, and
              market sentiment to optimize your trading strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
            >
              Start Forex Trading
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trading <span className="gradient-text">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card-dark border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card-dark border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trade <span className="gradient-text">Forex & Commodities</span>
            </h2>
            <p className="text-text-muted text-lg mb-8">
              Unlock the potential of global markets with AI-powered trading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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

export default Forex

