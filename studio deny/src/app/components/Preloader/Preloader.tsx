import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Preloader.css";

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

const captions = [
  "CURATING UNIFORMS.",
  "TAILORING SILHOUETTES.",
  "REFINING ESSENTIALS.",
  "PREPARING ARCHIVE.",
  "LOADING FW26.",
  "STREETWEAR DEPT."
];

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    // Pick a random fashion caption on mount
    setCaption(captions[Math.floor(Math.random() * captions.length)]);
    
    const duration = 2400; // Total duration in ms (2.4s)
    const interval = 20; 
    const totalSteps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(nextProgress);
      
      if (nextProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          if (onLoadingComplete) onLoadingComplete();
        }, 400); // slight pause when hitting 100% before exiting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  // Framer Motion Variants
  const containerVariants = {
    exit: {
      y: "-100%", // slide the entire preloader up to reveal the app
      transition: { duration: 0.9, ease: [0.82, 0, 0.18, 1], delay: 0.2 }
    }
  };

  const textRevealVariants = {
    initial: { opacity: 1 },
    animate: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    initial: { y: "100%", rotate: 2 },
    animate: { 
      y: 0, 
      rotate: 0,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader-minimal"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Main Logo Typography */}
          <div className="minimal-logo-wrapper">
            <motion.div className="minimal-logo" variants={textRevealVariants} initial="initial" animate="animate">
              <span className="hide-overflow">
                <motion.span variants={itemVariants} className="logo-word block">
                  STUDIO
                </motion.span>
              </span>
              <span className="hide-overflow">
                <motion.span variants={itemVariants} className="logo-word logo-indent block">
                  DENY
                </motion.span>
              </span>
            </motion.div>
          </div>

          {/* Bottom Bar: Loading Line & Caption */}
          <div className="minimal-bottom">
            <motion.div 
              className="loading-bar-container" 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            >
              <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
            </motion.div>
            
            <motion.div 
              className="minimal-caption" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span>{caption}</span>
              <span className="loading-number">
                [{progress < 10 ? '0' : ''}{progress}]
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
