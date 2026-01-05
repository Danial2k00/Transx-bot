import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { speakMessage, stopSpeech, isSpeechSupported } from '../utils/BotVoice'

const FrontPageBot = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasSpoken, setHasSpoken] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const botRef = useRef(null)
  const interactionRef = useRef(false)

  const welcomeMessage = "Hi 👋 Welcome to NexGen Bot AI"

  // Check if on home page
  const isHomePage = location.pathname === '/'

  // Bot is hidden by default - user can enable it manually if needed
  // Removed automatic appearance on first visit

  // Handle user interaction for speech
  useEffect(() => {
    if (!isVisible || hasSpoken || !isSpeechSupported() || isMuted) return

    const handleUserInteraction = () => {
      if (!interactionRef.current && !hasSpoken) {
        interactionRef.current = true
        setUserInteracted(true)
        triggerSpeech()
      }
    }

    // Listen for first user interaction
    const events = ['click', 'mousemove', 'touchstart', 'keydown']
    events.forEach(event => {
      window.addEventListener(event, handleUserInteraction, { once: true })
    })

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [isVisible, hasSpoken, isMuted])

  // Trigger speech
  const triggerSpeech = () => {
    if (hasSpoken || isMuted || !isSpeechSupported()) return

    setIsSpeaking(true)
    setHasSpoken(true)
    sessionStorage.setItem('botHasSpoken', 'true')

    speakMessage(
      welcomeMessage,
      () => {
        setIsSpeaking(false)
      },
      () => {
        setIsSpeaking(false)
      }
    )
  }

  // Handle bot click (alternative trigger)
  const handleBotClick = () => {
    if (!hasSpoken && !isMuted && isSpeechSupported()) {
      triggerSpeech()
    }
  }

  // Handle mute toggle
  const handleMuteToggle = (e) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
    if (isSpeaking) {
      stopSpeech()
      setIsSpeaking(false)
    }
  }

  // Handle minimize
  const handleMinimize = (e) => {
    e.stopPropagation()
    setIsMinimized(!isMinimized)
  }

  // Handle close
  const handleClose = (e) => {
    e.stopPropagation()
    stopSpeech()
    setIsVisible(false)
  }

  // Bot is disabled - return null to hide it completely
  return null

  // Uncomment below if you want to enable the bot manually:
  /*
  if (!isVisible || !isHomePage) {
    return null
  }
  */

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={botRef}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: isMinimized ? 0 : 0,
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-40"
          onClick={handleBotClick}
        >
          <div className="relative">
            {/* Bot Avatar */}
            <motion.div
              className="relative cursor-pointer"
              animate={{
                y: isMinimized ? 0 : [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Robot Image Container */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                {/* Robot Image - Replace SVG below with actual image:
                    <img 
                      src="/bot.webp" 
                      alt="AI Bot" 
                      className="w-full h-full object-contain"
                    />
                */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/30 flex items-center justify-center overflow-hidden shadow-2xl">
                  {/* Robot SVG representation */}
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Robot Head */}
                    <circle cx="100" cy="80" r="35" fill="white" stroke="#1e293b" strokeWidth="2" />
                    
                    {/* Eyes */}
                    <circle cx="90" cy="75" r="6" fill="#3b82f6">
                      <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="110" cy="75" r="6" fill="#3b82f6">
                      <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Smile */}
                    <path
                      d="M 85 90 Q 100 95 115 90"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    
                    {/* Headphones */}
                    <ellipse cx="100" cy="70" rx="40" ry="8" fill="#1e293b" opacity="0.8" />
                    
                    {/* Torso */}
                    <ellipse cx="100" cy="130" rx="30" ry="40" fill="white" stroke="#1e293b" strokeWidth="2" />
                    
                    {/* Chest Lights */}
                    <rect x="85" y="120" width="6" height="4" fill="#3b82f6" rx="1">
                      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="93" y="120" width="6" height="4" fill="#3b82f6" rx="1">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="101" y="120" width="6" height="4" fill="#3b82f6" rx="1">
                      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
                    </rect>
                    
                    {/* Waving Hand - Animated */}
                    <g transform="translate(130, 100)">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0 5 -5; 20 5 -5; 0 5 -5; -10 5 -5; 0 5 -5"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      {/* Right Arm (waving) */}
                      <rect x="-5" y="10" width="12" height="25" fill="#1e293b" rx="2" />
                      <rect x="0" y="0" width="8" height="15" fill="white" rx="2" />
                      {/* Hand */}
                      <ellipse cx="5" cy="-5" rx="6" ry="8" fill="#1e293b" />
                      {/* Fingers */}
                      <line x1="0" y1="-10" x2="0" y2="-15" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                      <line x1="5" y1="-10" x2="5" y2="-15" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                      <line x1="10" y1="-10" x2="10" y2="-15" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    
                    {/* Left Arm */}
                    <rect x="63" y="110" width="12" height="25" fill="#1e293b" rx="2" />
                    <rect x="62" y="100" width="8" height="15" fill="white" rx="2" />
                    
                    {/* Legs */}
                    <rect x="80" y="165" width="15" height="20" fill="#1e293b" rx="2" />
                    <rect x="105" y="165" width="15" height="20" fill="#1e293b" rx="2" />
                    
                    {/* Feet */}
                    <ellipse cx="87" cy="190" rx="12" ry="6" fill="white" />
                    <ellipse cx="112" cy="190" rx="12" ry="6" fill="white" />
                  </svg>
                </div>

                {/* Speaking indicator */}
                {isSpeaking && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </motion.div>
                )}
              </div>

              {/* Control Buttons */}
              <div className="absolute -top-2 -left-2 flex gap-1">
                <button
                  onClick={handleMuteToggle}
                  className="p-1.5 rounded-full bg-card-dark border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  <svg
                    className="w-3 h-3 text-text-muted hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMuted ? (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </>
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    )}
                  </svg>
                </button>
                <button
                  onClick={handleMinimize}
                  className="p-1.5 rounded-full bg-card-dark border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label={isMinimized ? 'Expand' : 'Minimize'}
                  title={isMinimized ? 'Expand' : 'Minimize'}
                >
                  <svg
                    className="w-3 h-3 text-text-muted hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-full bg-card-dark border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close"
                  title="Close"
                >
                  <svg
                    className="w-3 h-3 text-text-muted hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Speech Bubble (when speaking or minimized) */}
            <AnimatePresence>
              {!isMinimized && (isSpeaking || hasSpoken) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute bottom-full right-0 mb-2 bg-card-dark border border-white/10 rounded-2xl px-4 py-3 shadow-2xl max-w-xs"
                >
                  <p className="text-sm text-text-light font-medium">
                    {welcomeMessage}
                  </p>
                  {/* Speech bubble tail */}
                  <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-card-dark" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FrontPageBot

