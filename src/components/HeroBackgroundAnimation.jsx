import React from 'react'
import './HeroBackgroundAnimation.css'

const HeroBackgroundAnimation = () => {
  // Generate random positions and delays for elements
  const generateElements = (count, type) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `${type}-${i}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10, // 15-25 seconds
      size: 20 + Math.random() * 30, // 20-50px
    }))
  }

  const dollarSigns = generateElements(12, 'dollar')
  const chartIcons = generateElements(8, 'chart')
  const arrows = generateElements(6, 'arrow')
  const numbers = generateElements(10, 'number')

  return (
    <div className="hero-background-animation" aria-hidden="true">
      {/* Floating Dollar Signs */}
      {dollarSigns.map((item) => (
        <div
          key={item.id}
          className="floating-element dollar-sign"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
          }}
        >
          $
        </div>
      ))}

      {/* Chart Icons */}
      {chartIcons.map((item) => (
        <div
          key={item.id}
          className="floating-element chart-icon"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
          }}
        >
          📈
        </div>
      ))}

      {/* Trading Arrows */}
      {arrows.map((item) => (
        <div
          key={item.id}
          className="floating-element arrow-icon"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            fontSize: `${item.size}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          ↗
        </div>
      ))}

      {/* Floating Numbers */}
      {numbers.map((item) => {
        const values = ['+2.5%', '+5.1%', '$1,234', '1.2345', '+12.3%', '$567', '2.45%', '1.89']
        return (
          <div
            key={item.id}
            className="floating-element number-text"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
          >
            {values[Math.floor(Math.random() * values.length)]}
          </div>
        )
      })}

      {/* Abstract Financial Lines */}
      <svg className="financial-lines" width="100%" height="100%">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.12)" stopOpacity="0" />
                <stop offset="50%" stopColor="rgba(220, 38, 38, 0.2)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgba(220, 38, 38, 0.12)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.12)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.2)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.12)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.15)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.25)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.15)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal Lines */}
        <line
          x1="0"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          className="animated-line line-1"
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          className="animated-line line-2"
        />
        <line
          x1="0"
          y1="80%"
          x2="100%"
          y2="80%"
          stroke="url(#lineGradient3)"
          strokeWidth="2"
          className="animated-line line-3"
        />

        {/* Diagonal Lines */}
        <line
          x1="0"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          className="animated-line line-diagonal-1"
        />
        <line
          x1="0"
          y1="60%"
          x2="100%"
          y2="40%"
          stroke="url(#lineGradient2)"
          strokeWidth="2"
          className="animated-line line-diagonal-2"
        />
      </svg>

      {/* Candlestick Outlines */}
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={`candlestick-${i}`}
          className="candlestick"
          style={{
            left: `${15 + i * 20}%`,
            top: `${30 + Math.random() * 40}%`,
            animationDelay: `${i * 2}s`,
          }}
        >
          <div className="candlestick-body"></div>
          <div className="candlestick-wick-top"></div>
          <div className="candlestick-wick-bottom"></div>
        </div>
      ))}
    </div>
  )
}

export default HeroBackgroundAnimation

