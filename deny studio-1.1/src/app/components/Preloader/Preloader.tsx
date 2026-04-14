import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Preloader.css";

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2400; // Total duration in ms
    const interval = 20; // Update every 20ms
    const totalSteps = duration / interval;
    let currentStep = 0;

    const progressTimer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(nextProgress);
      
      if (nextProgress >= 100) {
        clearInterval(progressTimer);
        setTimeout(() => {
          setIsVisible(false);
          if (onLoadingComplete) onLoadingComplete();
        }, 400);
      }
    }, interval);

    return () => clearInterval(progressTimer);
  }, [onLoadingComplete]);

  // Animation Variants
  const containerVariants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.9,
        ease: [0.82, 0, 0.18, 1],
        delay: 0.2
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "circOut" }
    }
  };

  const lineVariants = {
    initial: { scaleX: 0 },
    animate: { 
      scaleX: 1,
      transition: { duration: 1.2, ease: "expoOut", delay: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader-container"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Technical Background */}
          <div className="technical-grid" />
          
          <div className="geo-frame">
            <div className="geo-frame-top-left" />
            <div className="geo-frame-top-right" />
            <div className="geo-frame-bottom-left" />
            <div className="geo-frame-bottom-right" />
          </div>

          {/* Central Stage */}
          <div className="main-stage">
            <div className="logo-container">
              {/* Measurement lines */}
              <div className="measurement-lines">
                <div className="line-v" style={{ left: '0' }} />
                <div className="line-v" style={{ right: '0' }} />
                <div className="line-h" style={{ top: '0' }} />
                <div className="line-h" style={{ bottom: '0' }} />
              </div>

              <motion.h1 
                className="brand-text"
                variants={textVariants}
              >
                <span>STUDIO</span>
                <span style={{ marginLeft: '1.5rem' }}>DENY</span>
              </motion.h1>

              <motion.div 
                className="scan-line"
                animate={{ 
                  top: ["0%", "100%", "0%"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </div>

            <div className="metadata-stage">
              <motion.div 
                className="metadata"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                SYSTEM_AUTH: <span className="progress-counter">{progress}%</span>
              </motion.div>
              
              <motion.div 
                className="metadata"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                style={{ marginTop: '5px' }}
              >
                LOC: ARCHIVE_V1.1 // SS26
              </motion.div>
            </div>
          </div>

          {/* Bottom Branding */}
          <div 
            className="metadata"
            style={{ 
              position: 'absolute', 
              bottom: '40px', 
              textAlign: 'center',
              width: '100%'
            }}
          >
            NOT FOR THE ORDINARY
          </div>

          {/* Exit Flash */}
          <motion.div 
            className="exit-flash"
            exit={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
