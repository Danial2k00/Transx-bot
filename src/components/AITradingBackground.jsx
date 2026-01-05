import React, { useEffect, useRef } from 'react'
import './AITradingBackground.css'

const AITradingBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas size to container
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight || 500
      }
    }
    resizeCanvas()
    
    // Use ResizeObserver for better container sizing
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas()
      // Reinitialize nodes and particles with new dimensions
      nodes.forEach((node) => {
        node.x = Math.min(node.x, canvas.width)
        node.y = Math.min(node.y, canvas.height)
      })
      particles.forEach((particle) => {
        particle.x = Math.min(particle.x, canvas.width)
        particle.y = Math.min(particle.y, canvas.height)
      })
      indicators.forEach((indicator) => {
        indicator.x = Math.min(indicator.x, canvas.width)
        indicator.baseY = Math.min(indicator.baseY, canvas.height)
      })
    })
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }
    
    window.addEventListener('resize', resizeCanvas)

    // Neural network nodes
    const nodes = Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 3 + Math.random() * 2,
      pulse: Math.random() * Math.PI * 2,
    }))

    // Data stream particles
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: 1 + Math.random() * 1.5,
      opacity: 0.1 + Math.random() * 0.2,
      life: Math.random(),
    }))

    // Market indicator lines (candlestick-like)
    const indicators = Array.from({ length: 8 }, (_, i) => ({
      x: (canvas.width / 9) * (i + 1),
      y: canvas.height * 0.3 + Math.random() * canvas.height * 0.4,
      baseY: canvas.height * 0.3 + Math.random() * canvas.height * 0.4,
      height: 20 + Math.random() * 60,
      width: 4,
      pulse: Math.random() * Math.PI * 2,
      speed: 0.01 + Math.random() * 0.02,
    }))

    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Draw neural network connections
      ctx.strokeStyle = 'rgba(220, 38, 38, 0.08)'
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 200) {
            ctx.globalAlpha = (1 - distance / 200) * 0.3
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        node.pulse += 0.05

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        const pulseSize = node.radius + Math.sin(node.pulse) * 1.5
        const opacity = 0.3 + Math.sin(node.pulse) * 0.2

        ctx.globalAlpha = opacity
        ctx.fillStyle = '#DC2626'
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2)
        ctx.fill()

        // Glow
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(220, 38, 38, 0.4)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseSize * 1.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Draw flowing data particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life += 0.005

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        const alpha = (Math.sin(particle.life * Math.PI) * particle.opacity) / 2

        ctx.globalAlpha = alpha
        ctx.fillStyle = '#EF4444'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw market indicators (candlestick-like)
      indicators.forEach((indicator) => {
        indicator.pulse += indicator.speed
        const heightVariation = Math.sin(indicator.pulse) * 15
        const currentHeight = indicator.height + heightVariation
        const y = indicator.baseY - currentHeight / 2

        // Glow effect
        ctx.globalAlpha = 0.15
        ctx.fillStyle = '#DC2626'
        ctx.shadowBlur = 12
        ctx.shadowColor = 'rgba(220, 38, 38, 0.5)'
        ctx.fillRect(indicator.x - indicator.width / 2, y, indicator.width, currentHeight)
        ctx.shadowBlur = 0

        // Main bar
        ctx.globalAlpha = 0.4 + Math.sin(indicator.pulse) * 0.2
        ctx.fillStyle = '#DC2626'
        ctx.fillRect(indicator.x - indicator.width / 2, y, indicator.width, currentHeight)
      })

      // Draw flowing graph lines
      ctx.strokeStyle = 'rgba(220, 38, 38, 0.12)'
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.6

      // Horizontal flowing line
      const waveY = canvas.height * 0.6 + Math.sin(time * 0.5) * 30
      ctx.beginPath()
      ctx.moveTo(0, waveY)
      for (let x = 0; x < canvas.width; x += 5) {
        const y = waveY + Math.sin((x / 50) + time) * 10
        ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Diagonal flowing line
      const diagonalY = canvas.height * 0.4 + Math.cos(time * 0.3) * 20
      ctx.beginPath()
      ctx.moveTo(0, diagonalY)
      for (let x = 0; x < canvas.width; x += 5) {
        const y = diagonalY + (x / canvas.width) * 100 + Math.sin((x / 40) + time * 0.7) * 15
        ctx.lineTo(x, y)
      }
      ctx.stroke()

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (canvas.parentElement) {
        resizeObserver.unobserve(canvas.parentElement)
      }
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="ai-trading-background" aria-hidden="true">
      <canvas ref={canvasRef} className="ai-trading-canvas" />
      
      {/* SVG Overlay for additional glowing effects */}
      <svg className="ai-trading-svg" width="100%" height="100%">
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(220, 38, 38, 0.1)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgba(220, 38, 38, 0.15)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgba(220, 38, 38, 0.1)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="rgba(220, 38, 38, 0.3)" />
            <stop offset="100%" stopColor="rgba(220, 38, 38, 0)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Abstract graph lines */}
        <path
          d="M 0,300 Q 200,250 400,280 T 800,260 T 1200,270"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          fill="none"
          className="graph-line graph-line-1"
        />
        <path
          d="M 0,400 Q 300,350 600,380 T 1200,360"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          fill="none"
          className="graph-line graph-line-2"
        />
        <path
          d="M 0,500 Q 250,450 500,480 T 1000,460 T 1200,470"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          fill="none"
          className="graph-line graph-line-3"
        />
      </svg>
    </div>
  )
}

export default AITradingBackground

