import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { slideInFromBottom, floatUp, viewportConfig } from '../utils/motionUtils'

const Download = () => {
  const navigate = useNavigate()
  const [downloading, setDownloading] = useState(null)

  const platforms = [
    {
      id: 'windows',
      name: 'Windows',
      icon: '🪟',
      description: 'Windows 10/11 (64-bit)',
      fileSize: '45.2 MB',
      version: 'v2.1.0',
    },
    {
      id: 'android',
      name: 'Android',
      icon: '📱',
      description: 'Android 8.0 and above',
      fileSize: '28.5 MB',
      version: 'v2.1.0',
    },
    {
      id: 'ios',
      name: 'iOS',
      icon: '🍎',
      description: 'iOS 13.0 and above',
      fileSize: '32.1 MB',
      version: 'v2.1.0',
    },
  ]

  const handleDownload = async (platformId) => {
    setDownloading(platformId)

    // Simulate download process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real app, this would trigger an actual file download
      // For demo purposes, we'll create a download link
      const link = document.createElement('a')
      link.href = '#' // Replace with actual download URL
      link.download = `ai-trading-bot-${platformId}.${platformId === 'ios' ? 'ipa' : platformId === 'android' ? 'apk' : 'exe'}`
      
      // Note: In production, you would use actual file URLs
      // For now, we'll just show a success message
      alert(`Download started for ${platforms.find(p => p.id === platformId)?.name}`)
      
    } catch (error) {
      console.error('Download error:', error)
      alert('Download failed. Please try again.')
    } finally {
      setDownloading(null)
    }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Download <span className="gradient-text">AI Trading Bot</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Get the latest version of our AI-powered trading platform for your device
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card-dark rounded-2xl border border-white/10 p-6 hover:border-primary/50 transition-all"
              >
                <div className="text-5xl mb-4 text-center">{platform.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {platform.name}
                </h3>
                <p className="text-text-muted text-sm text-center mb-4">
                  {platform.description}
                </p>
                <div className="flex justify-between items-center mb-4 text-sm text-text-muted">
                  <span>Size: {platform.fileSize}</span>
                  <span>{platform.version}</span>
                </div>
                <motion.button
                  onClick={() => handleDownload(platform.id)}
                  whileHover={{ scale: downloading === platform.id ? 1 : 1.05 }}
                  whileTap={{ scale: downloading === platform.id ? 1 : 0.95 }}
                  disabled={downloading === platform.id || downloading !== null}
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {downloading === platform.id ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Downloading...
                    </span>
                  ) : (
                    'Download Now'
                  )}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* App Details */}
          <motion.div
            variants={slideInFromBottom}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ delay: 0.2 }}
            className="bg-card-dark rounded-2xl border border-white/10 p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">What's Included</h2>
            <ul className="space-y-3 text-text-muted">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Real-time market analysis and AI-powered predictions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Automated trading strategies across multiple asset classes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Advanced risk management and portfolio optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Secure and encrypted transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>24/7 customer support</span>
              </li>
            </ul>
          </motion.div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => navigate('/')}
              className="text-text-muted hover:text-secondary transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Download

