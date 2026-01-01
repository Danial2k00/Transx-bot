import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const desktopDropdownRef = useRef(null)
  const mobileDropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  // Scroll detection for header switching
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const dropdownItems = [
    { path: '/stocks', label: 'Stock' },
    { path: '/crypto', label: 'Crypto' },
    { path: '/forex', label: 'Forex / Commodities' },
    { path: '/fd-nfd', label: 'F.D / N.F.D' },
  ]

  // Check if current path is a dropdown item
  const isDropdownActive = dropdownItems.some(item => location.pathname === item.path)

  // Handle dropdown hover (desktop)
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 200)
  }

  // Handle mobile dropdown toggle
  const handleMobileToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDesktopClick = desktopDropdownRef.current && desktopDropdownRef.current.contains(event.target)
      const isMobileClick = mobileDropdownRef.current && mobileDropdownRef.current.contains(event.target)
      
      if (!isDesktopClick && !isMobileClick) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isDropdownOpen])

  // Scroll to top when navigating to home page
  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

  // Handle keyboard navigation
  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      navigate(path)
      setIsDropdownOpen(false)
    }
  }

  // Handle Home navigation
  const handleHomeClick = () => {
    setIsDropdownOpen(false)
  }

  // Shared navigation content component
  const NavigationContent = () => (
    <>
      <Link to="/" className="flex items-center">
        <motion.div
          style={{
            backgroundColor: '#FFFFFF',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          animate={{
            padding: isScrolled ? '4px 10px' : '6px 12px',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <motion.img
            src="/next-gen-bot-logo.png.png"
            alt="Next Gen Bot Logo"
            className="w-auto object-contain"
            style={{
              height: '44px', // Base height - slightly larger for main header
              display: 'block',
            }}
            animate={{
              scale: isScrolled ? 0.82 : 1, // 44px * 0.82 ≈ 36px for scrolled header
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <div
          ref={desktopDropdownRef}
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative inline-flex items-center space-x-1.5">
            <Link
              to="/"
              onClick={handleHomeClick}
              className={`relative inline-block text-sm font-medium transition-colors ${
                location.pathname === '/' || isDropdownActive
                  ? 'text-secondary'
                  : 'text-text-light hover:text-secondary'
              }`}
            >
              Home
              {(location.pathname === '/' || isDropdownActive) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <motion.svg
              className="w-4 h-4 text-text-light flex-shrink-0 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </div>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute top-full left-0 mt-3 w-56 rounded-lg border border-gray-200 overflow-hidden"
                style={{ 
                  zIndex: 50,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
                }}
              >
                <div className="py-2">
                  {dropdownItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsDropdownOpen(false)}
                        onKeyDown={(e) => handleKeyDown(e, item.path)}
                        className={`block px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'text-secondary bg-primary/10'
                            : 'text-[#0F172A] hover:text-secondary hover:bg-primary/10'
                        }`}
                        style={{ letterSpacing: '-0.01em' }}
                        role="menuitem"
                        tabIndex={0}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Register Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/register')}
          className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary/50 transition-all cursor-pointer"
        >
          Register
        </motion.button>

        {/* Download Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/download')}
          className="px-6 py-2.5 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-all cursor-pointer"
        >
          Download
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-4">
        <div
          className="relative"
          ref={mobileDropdownRef}
        >
          <div className="relative inline-flex items-center space-x-1.5">
            <Link
              to="/"
              onClick={handleHomeClick}
              className={`text-sm font-medium ${
                location.pathname === '/' || isDropdownActive
                  ? 'text-secondary'
                  : 'text-text-light'
              }`}
            >
              Home
            </Link>
            <button
              onClick={handleMobileToggle}
              className="p-1"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              aria-label="Toggle dropdown"
            >
              <motion.svg
                className="w-4 h-4 text-text-light flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute top-full left-0 mt-3 w-56 rounded-lg border border-gray-200 overflow-hidden"
                style={{ 
                  zIndex: 50,
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
                }}
              >
                <div className="py-2">
                  {dropdownItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsDropdownOpen(false)}
                        onKeyDown={(e) => handleKeyDown(e, item.path)}
                        className={`block px-4 py-3 text-sm font-medium transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'text-secondary bg-primary/10'
                            : 'text-[#0F172A] hover:text-secondary hover:bg-primary/10'
                        }`}
                        style={{ letterSpacing: '-0.01em' }}
                        role="menuitem"
                        tabIndex={0}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile Register Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: dropdownItems.length * 0.05 }}
                    className="border-t border-white/10 mt-2 pt-2"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        navigate('/register')
                        setIsDropdownOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-text-light hover:text-secondary hover:bg-primary/10 transition-all cursor-pointer"
                    >
                      Register
                    </motion.button>
                  </motion.div>

                  {/* Mobile Download Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (dropdownItems.length + 1) * 0.05 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        navigate('/download')
                        setIsDropdownOpen(false)
                      }}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-text-light hover:text-secondary hover:bg-primary/10 transition-all cursor-pointer"
                    >
                      Download
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Header 1: Primary Header - Visible on initial load, disappears when scrolled */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.nav
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200"
            style={{
              background: 'rgba(246, 247, 251, 0.9)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <NavigationContent />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Header 2: Scrolled Header - Appears only when scrolled down */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <NavigationContent />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
