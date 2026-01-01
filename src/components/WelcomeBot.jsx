import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const WelcomeBot = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [showButtons, setShowButtons] = useState(false)

  const message = "Hi! 👋 Welcome to AI Trading Bot. I'm here to help you get started with intelligent trading solutions. Ready to transform your trading journey?"

  useEffect(() => {
    // Show bot after a short delay
    const showTimer = setTimeout(() => {
      if (!localStorage.getItem('welcomeBotDismissed')) {
        setIsVisible(true)
        startTyping()
      }
    }, 1500)

    return () => clearTimeout(showTimer)
  }, [])

  const startTyping = () => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
        // Show buttons after typing completes
        setTimeout(() => {
          setShowButtons(true)
        }, 300)
      }
    }, 30) // Typing speed
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem('welcomeBotDismissed', 'true')
  }

  const handleRegister = () => {
    navigate('/register')
    handleDismiss()
  }

  const handleDownload = () => {
    navigate('/download')
    handleDismiss()
  }

  if (isDismissed || !isVisible) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 max-w-sm w-full sm:w-96"
        >
          <div className="bg-card-dark rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AI Assistant</p>
                  <p className="text-xs text-text-muted">Online</p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close welcome bot"
              >
                <svg
                  className="w-4 h-4 text-text-muted hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Message Content */}
            <div className="p-4">
              <div className="mb-4">
                <p className="text-text-light text-sm leading-relaxed min-h-[3rem]">
                  {displayedText}
                  {displayedText.length < message.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                      className="inline-block w-2 h-4 bg-primary ml-1"
                    />
                  )}
                </p>
              </div>

              {/* CTA Buttons */}
              <AnimatePresence>
                {showButtons && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col sm:flex-row gap-2"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleRegister}
                      className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/50 transition-all cursor-pointer"
                    >
                      Register
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleDownload}
                      className="flex-1 px-4 py-2.5 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-all cursor-pointer"
                    >
                      Download
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Pulse indicator */}
          <motion.div
            className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeBot

