import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const parallaxY = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      x: [-5, 5, -5],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero" id="hero">
      <motion.div 
        className="hero-overlay"
        style={{ y: parallaxY }}
      >
        <motion.div 
          className="animated-bg"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['120% 120%', '140% 140%', '120% 120%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: [null, Math.random() * -500],
                x: [null, Math.random() * 100 - 50],
                opacity: [0.2, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="floating-elements"
        style={{ opacity }}
      >
        <motion.div 
          className="floating-coffee" 
          variants={floatingAnimation}
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          ☕
        </motion.div>
        <motion.div 
          className="floating-cake" 
          variants={floatingAnimation}
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          🍰
        </motion.div>
        <motion.div 
          className="floating-leaf" 
          variants={floatingAnimation}
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          🌿
        </motion.div>
      </motion.div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          style={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5
          }}
        >
          <motion.div className="title-wrapper" variants={fadeInUp}>
            <motion.h1
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                backgroundSize: ['100% 100%', '200% 100%', '100% 100%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Welcome to Café Delight
            </motion.h1>
          </motion.div>
          
          <motion.div 
            className="hero-tagline"
            variants={fadeInUp}
          >
            <motion.span 
              className="highlight"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              ☕
            </motion.span>
            <motion.p
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Where Every Cup Tells a Story
            </motion.p>
            <motion.span 
              className="highlight"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              🍰
            </motion.span>
          </motion.div>

          <motion.p
            className="hero-description"
            variants={fadeInUp}
          >
            Experience the perfect blend of artisanal coffee and homemade delights in our cozy corner of comfort.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            variants={fadeInUp}
          >
            <motion.a
              href="#menu"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Menu
            </motion.a>
            <motion.a
              href="#reservation"
              className="btn btn-outline"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve a Table
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={scaleIn}
          initial="initial"
          animate="animate"
          whileHover={{ 
            scale: 1.05,
            rotate: mousePosition.x * 0.02
          }}
          style={{
            x: mousePosition.x * -0.2,
            y: mousePosition.y * -0.2
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=60" 
            alt="Café Ambiance" 
          />
          <motion.div 
            className="image-overlay"
            animate={{
              background: [
                'linear-gradient(45deg, rgba(168, 208, 141, 0.3), rgba(245, 245, 220, 0.3))',
                'linear-gradient(45deg, rgba(245, 245, 220, 0.3), rgba(168, 208, 141, 0.3))',
              ],
              backgroundSize: ['100% 100%', '200% 200%', '100% 100%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        </motion.div>
      </div>

      <motion.div
        className="scroll-down"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ opacity }}
      >
        <motion.div 
          className="mouse"
          animate={{
            boxShadow: [
              "0 0 0 rgba(168, 208, 141, 0)",
              "0 0 20px rgba(168, 208, 141, 0.5)",
              "0 0 0 rgba(168, 208, 141, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="wheel"
            animate={{
              y: [0, 20],
              opacity: [1, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 