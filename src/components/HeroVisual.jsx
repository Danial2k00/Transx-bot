import { motion } from 'framer-motion'

const HeroVisual = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Abstract Digital Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#6366F1"
              strokeWidth="0.5"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Soft Glowing Data Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated Data Lines */}
        <motion.path
          d="M 0 200 Q 200 150, 400 180 T 800 160 T 1200 200"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0 300 Q 250 250, 500 280 T 1000 260 T 1500 300"
          fill="none"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.path
          d="M 0 400 Q 300 350, 600 380 T 1200 360 T 1800 400"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.6 }}
        />
      </svg>

      {/* Stock Market Candlestick Charts */}
      <div className="absolute top-20 left-10 w-64 h-40 opacity-60">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          {/* Candlesticks */}
          <g>
            {/* Bullish candles (up) - Red */}
            <rect x="20" y="40" width="8" height="30" fill="#DC2626" opacity="0.8" />
            <line x1="24" y1="40" x2="24" y2="35" stroke="#DC2626" strokeWidth="1.5" />
            <line x1="24" y1="70" x2="24" y2="75" stroke="#DC2626" strokeWidth="1.5" />
            
            <rect x="40" y="30" width="8" height="40" fill="#DC2626" opacity="0.8" />
            <line x1="44" y1="30" x2="44" y2="25" stroke="#DC2626" strokeWidth="1.5" />
            <line x1="44" y1="70" x2="44" y2="75" stroke="#DC2626" strokeWidth="1.5" />
            
            <rect x="60" y="50" width="8" height="20" fill="#DC2626" opacity="0.8" />
            <line x1="64" y1="50" x2="64" y2="45" stroke="#DC2626" strokeWidth="1.5" />
            <line x1="64" y1="70" x2="64" y2="75" stroke="#DC2626" strokeWidth="1.5" />
            
            {/* Bearish candles (down) */}
            <rect x="80" y="20" width="8" height="50" fill="#EF4444" opacity="0.8" />
            <line x1="84" y1="20" x2="84" y2="15" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="84" y1="70" x2="84" y2="75" stroke="#EF4444" strokeWidth="1.5" />
            
            <rect x="100" y="35" width="8" height="35" fill="#EF4444" opacity="0.8" />
            <line x1="104" y1="35" x2="104" y2="30" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="104" y1="70" x2="104" y2="75" stroke="#EF4444" strokeWidth="1.5" />
            
            <rect x="120" y="25" width="8" height="45" fill="#DC2626" opacity="0.8" />
            <line x1="124" y1="25" x2="124" y2="20" stroke="#DC2626" strokeWidth="1.5" />
            <line x1="124" y1="70" x2="124" y2="75" stroke="#DC2626" strokeWidth="1.5" />
            
            <rect x="140" y="45" width="8" height="25" fill="#DC2626" opacity="0.8" />
            <line x1="144" y1="45" x2="144" y2="40" stroke="#DC2626" strokeWidth="1.5" />
            <line x1="144" y1="70" x2="144" y2="75" stroke="#DC2626" strokeWidth="1.5" />
            
            <rect x="160" y="15" width="8" height="55" fill="#EF4444" opacity="0.8" />
            <line x1="164" y1="15" x2="164" y2="10" stroke="#EF4444" strokeWidth="1.5" />
            <line x1="164" y1="70" x2="164" y2="75" stroke="#EF4444" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* Crypto Symbols - Bitcoin */}
      <motion.div
        className="absolute top-32 right-20 w-20 h-20"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="#F59E0B" opacity="0.3" />
          <path
            d="M 50 20 L 60 25 L 65 40 L 60 50 L 50 55 L 40 50 L 35 40 L 40 25 Z"
            fill="#F59E0B"
            opacity="0.8"
          />
          <text
            x="50"
            y="75"
            textAnchor="middle"
            className="text-xs font-bold fill-current"
            fill="#F59E0B"
            fontSize="12"
            opacity="0.9"
          >
            ₿
          </text>
        </svg>
      </motion.div>

      {/* Crypto Symbols - Ethereum */}
      <motion.div
        className="absolute top-48 right-32 w-16 h-16"
        animate={{
          y: [0, -8, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,20 60,50 50,60 40,50"
            fill="#627EEA"
            opacity="0.8"
          />
          <polygon
            points="50,60 60,70 50,75 40,70"
            fill="#627EEA"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Forex Currency Graph */}
      <div className="absolute bottom-32 left-16 w-72 h-32 opacity-50">
        <svg viewBox="0 0 300 120" className="w-full h-full">
          <defs>
            <linearGradient id="forexGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Currency pairs labels */}
          <text x="10" y="20" fill="#6366F1" fontSize="10" opacity="0.7">EUR/USD</text>
          <text x="10" y="40" fill="#22D3EE" fontSize="10" opacity="0.7">GBP/USD</text>
          <text x="10" y="60" fill="#6366F1" fontSize="10" opacity="0.7">USD/JPY</text>
          
          {/* Currency lines */}
          <path
            d="M 50 15 Q 100 20, 150 18 T 250 15"
            fill="none"
            stroke="url(#forexGradient)"
            strokeWidth="2"
          />
          <path
            d="M 50 35 Q 100 38, 150 35 T 250 32"
            fill="none"
            stroke="#22D3EE"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M 50 55 Q 100 52, 150 55 T 250 58"
            fill="none"
            stroke="#6366F1"
            strokeWidth="2"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* AI Analytics Indicators */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="aiGlow">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Central AI Core */}
          <circle cx="100" cy="100" r="30" fill="url(#aiGlow)" />
          
          {/* Orbiting data points */}
          <motion.circle
            cx="100"
            cy="50"
            r="4"
            fill="#6366F1"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.circle
            cx="150"
            cy="100"
            r="4"
            fill="#22D3EE"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
          <motion.circle
            cx="100"
            cy="150"
            r="4"
            fill="#6366F1"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          />
          <motion.circle
            cx="50"
            cy="100"
            r="4"
            fill="#22D3EE"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1.5,
            }}
          />
        </svg>
      </div>

      {/* Soft Ambient Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
    </div>
  )
}

export default HeroVisual


