/**
 * Bot Voice Utility
 * Handles Web Speech API for bot voice synthesis
 */

let speechSynthesis = null
let currentUtterance = null

// Initialize speech synthesis
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  speechSynthesis = window.speechSynthesis
}

/**
 * Get the best available voice
 * Prefers female English voices
 */
const getBestVoice = () => {
  if (!speechSynthesis) return null

  const voices = speechSynthesis.getVoices()
  
  // Prefer female English voices
  const preferredVoices = voices.filter(voice => 
    voice.lang.startsWith('en') && 
    (voice.name.toLowerCase().includes('female') || 
     voice.name.toLowerCase().includes('zira') ||
     voice.name.toLowerCase().includes('samantha') ||
     voice.name.toLowerCase().includes('karen'))
  )

  if (preferredVoices.length > 0) {
    return preferredVoices[0]
  }

  // Fallback to any English voice
  const englishVoices = voices.filter(voice => voice.lang.startsWith('en'))
  if (englishVoices.length > 0) {
    return englishVoices[0]
  }

  // Fallback to default
  return voices.find(voice => voice.default) || voices[0] || null
}

/**
 * Speak a message using Web Speech API
 * @param {string} text - Text to speak
 * @param {Function} onEnd - Callback when speech ends
 * @param {Function} onError - Callback on error
 */
export const speakMessage = (text, onEnd = null, onError = null) => {
  if (!speechSynthesis) {
    console.warn('Speech synthesis not supported')
    if (onError) onError()
    return null
  }

  // Cancel any ongoing speech
  if (currentUtterance) {
    speechSynthesis.cancel()
  }

  // Wait for voices to load if needed
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.addEventListener('voiceschanged', () => {
      createUtterance(text, onEnd, onError)
    }, { once: true })
  } else {
    createUtterance(text, onEnd, onError)
  }

  return currentUtterance
}

/**
 * Create and speak utterance
 */
const createUtterance = (text, onEnd, onError) => {
  const utterance = new SpeechSynthesisUtterance(text)
  const voice = getBestVoice()

  if (voice) {
    utterance.voice = voice
  }

  // Configure voice settings
  utterance.rate = 0.9 // Medium speed
  utterance.pitch = 1.0 // Normal pitch
  utterance.volume = 0.8 // Slightly lower volume for calm tone
  utterance.lang = 'en-US'

  // Event handlers
  utterance.onend = () => {
    currentUtterance = null
    if (onEnd) onEnd()
  }

  utterance.onerror = (error) => {
    currentUtterance = null
    console.error('Speech synthesis error:', error)
    if (onError) onError(error)
  }

  currentUtterance = utterance
  speechSynthesis.speak(utterance)
}

/**
 * Stop current speech
 */
export const stopSpeech = () => {
  if (speechSynthesis && currentUtterance) {
    speechSynthesis.cancel()
    currentUtterance = null
  }
}

/**
 * Check if speech is supported
 */
export const isSpeechSupported = () => {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}





