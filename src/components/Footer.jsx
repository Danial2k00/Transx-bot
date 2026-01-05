import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { slideInFromBottom, viewportConfig } from '../utils/motionUtils'

const Footer = () => {
  const ref = useRef(null)
  const footerLinks = {
    Trading: [
      { path: '/stocks', label: 'Stock Trading' },
      { path: '/crypto', label: 'Crypto Trading' },
      { path: '/forex', label: 'Forex Trading' },
      { path: '/fd-nfd', label: 'FD/NFD' },
    ],
    Company: [
      { path: '#', label: 'About Us' },
      { path: '#', label: 'Blog' },
      { path: '#', label: 'Careers' },
      { path: '#', label: 'Contact' },
    ],
    Legal: [
      { path: '#', label: 'Privacy Policy' },
      { path: '#', label: 'Terms of Service' },
      { path: '#', label: 'Disclaimer' },
    ],
  }

  return (
    <motion.footer 
      ref={ref}
      className="border-t mt-12 md:mt-16 lg:mt-20" 
      style={{
        background: '#F7F8FA',
        borderColor: 'rgba(229, 231, 235, 0.8)'
      }}
      variants={slideInFromBottom}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '8px 12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/next-gen-bot-logo.png.png"
                  alt="Next Gen Bot Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                  style={{
                    maxHeight: '48px',
                    height: 'auto',
                  }}
                />
              </div>
            </Link>
            <p className="text-sm max-w-md" style={{ color: '#4B5563' }}>
              Advanced AI-powered trading solutions for stocks, crypto, forex, and more.
              Transform your trading strategy with intelligent automation.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4" style={{ color: '#1F2937' }}>{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.div className="relative inline-block">
                      <Link
                        to={link.path}
                        className="text-sm transition-colors relative"
                        style={{ color: '#9CA3AF' }}
                      >
                        {link.label}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#DC2626] to-[#EF4444]"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: 'rgba(229, 231, 235, 0.8)' }}>
            <p className="text-sm text-center sm:text-left" style={{ color: '#6B7280' }}>
            &copy; {new Date().getFullYear()} Next Gen Bot. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="transition-colors duration-200 text-sm"
                style={{ color: '#6B7280' }}
                whileHover={{
                  color: '#6366F1',
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{
                  rotate: { type: 'spring', stiffness: 400, damping: 15 },
                  color: { duration: 0.2 }
                }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
        </div>
      </motion.footer>
    )
  }
  
  export default Footer

