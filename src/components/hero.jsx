import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import backgroundUfo from '../assets/background_ufo.jpg'
import cuteguy from '../assets/cuteguy.png'

function Hero({ children }) {
  // Typing animation setup
  const titles = [
    'Software Developer',
    'FullStack Developer',
    'Web Developer',
    'Mobile Developer'
  ];
  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 90;
    const pause = 500; // pause after full word typed
    let timeout;

    if (!isDeleting && charIndex < titles[titleIndex].length) {
      timeout = setTimeout(() => {
        setCurrentTitle(titles[titleIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      setIsPaused(false);
    } else if (!isDeleting && charIndex === titles[titleIndex].length) {
      // PAUSE BEFORE DELETING
      setIsPaused(true);
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentTitle(titles[titleIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      setIsPaused(false);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  // Blinking star cursor only when paused
  useEffect(() => {
    if (!isPaused) return;
    const blinkInterval = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(blinkInterval);
  }, [isPaused]);

  return (
    <section className="relative h-screen flex items-center">
      {/* Shooting Stars Canvas Effect */}
      <ShootingStars />
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundUfo})`
        }}
      />
      {/* Left Side - Responsive */}
      <div className="relative z-10 w-full lg:w-1/2 h-full flex items-center justify-center px-4">
        <div className="text-left max-w">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white whitespace-nowrap"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hello, I am <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 bg-clip-text text-transparent">Thaw Htoo Zin</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl mb-8 text-gray-200 min-h-[2.5rem]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            I am a passionate and dedicated {currentTitle}
            <span
              className={`inline-block align-middle ml-1 transition-all duration-300 ${blink ? 'opacity-100 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]' : 'opacity-30'}`}
              style={{fontSize: '1.5em'}}>
              ✨
            </span>
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.7)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
      
      {/* Right Side - 50% */}
      {/* <div className="relative z-10 w-1/2 h-full flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <img 
            src={cuteguy} 
            alt="Cute Guy" 
            className="max-w-full h-auto object-contain"
            style={{ maxHeight: '80vh' }}
          />
        </div>
      </div> */}
      {/* Render children (Navbar) */}
      {children}
    </section>
  )
}

// ShootingStars component for canvas-based shooting star animation
function ShootingStars() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);

    // Shooting star state
    const stars = [];
    function spawnStar() {
      const startX = Math.random() * width * 0.9 + width * 0.05;
      const startY = Math.random() * 20; // spawn from top 20px
      const endY = Math.random() * height * 0.8 + height * 0.2; // random end Y
      const length = 60 + Math.random() * 40;
      const speed = 6 + Math.random() * 3;
      // Calculate angle based on start and end positions
      const deltaX = (Math.random() - 0.5) * 200; // random horizontal movement
      const deltaY = endY - startY;
      const angle = Math.atan2(deltaY, deltaX);
      stars.push({
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        alpha: 0.5 + Math.random() * 0.2
      });
    }

    let lastSpawn = 0;
    function animate(now) {
      ctx.clearRect(0, 0, width, height);
      // Draw and update stars
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        ctx.save();
        ctx.globalAlpha = star.alpha;
        ctx.strokeStyle = 'white';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 4; // less glow
        ctx.lineWidth = 1.1; // thinner
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x + Math.cos(star.angle) * star.length,
          star.y + Math.sin(star.angle) * star.length
        );
        ctx.stroke();
        ctx.restore();
        // Move star
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.alpha -= 0.018;
        if (star.alpha <= 0) stars.splice(i, 1);
      }
      // Spawn more stars, more frequently
      if (!lastSpawn || now - lastSpawn > 400 + Math.random() * 400) {
        for (let i = 0; i < 2 + Math.floor(Math.random() * 2); i++) {
          spawnStar();
        }
        lastSpawn = now;
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2
      }}
    />
  );
}

export default Hero
