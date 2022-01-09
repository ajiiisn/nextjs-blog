import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import React, { ReactNode } from 'react';

import { Sun, Moon } from 'react-feather';
import { useTheme } from '../../contexts/ThemeContext';

type IconMotionWrapperProps = {
  children: ReactNode;
};

const IconMotionWrapper = (props: IconMotionWrapperProps) => (
  <motion.div
    className="absolute"
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    exit={{ scale: 0, rotate: 360 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
    }}
  >
    {props.children}
  </motion.div>
);

const bgVariants: Variants = {
  dark: {
    transform: 'scale(1)',
  },
  light: {
    transform: 'scale(100)',
  },
};

const bgTransition: Transition = {
  type: 'keyframes',
};

const ColorSchemeSwitcher = () => {
  const [theme, setTheme] = useTheme();
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <>
      <motion.div
        className="fixed top-4 right-4 h-10 w-10 bg-white z-10 rounded-full"
        animate={theme === 'dark' ? 'dark' : 'light'}
        variants={bgVariants}
        transition={bgTransition}
      />
      <button
        className="fixed top-4 right-4 rounded-xl z-50 flex items-center justify-center h-10 w-10 focus:select-none focus:ring-2 focus:ring-blue-500"
        onClick={toggleTheme}
      >
        <AnimatePresence>
          {theme === 'light' && (
            <IconMotionWrapper>
              <Sun color="black" size="2rem" />
            </IconMotionWrapper>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {theme === 'dark' && (
            <IconMotionWrapper>
              <Moon color="black" size="2rem" />
            </IconMotionWrapper>
          )}
        </AnimatePresence>
      </button>
    </>
  );
};

export default ColorSchemeSwitcher;
