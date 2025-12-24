import React from 'react'
import { motion } from 'framer-motion'
import heroImg from '../assets/heroImgCodebendr.png'
import TypingText from './TypingText'

const Hero = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Text (slides from left) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
            Welcome to <span className="text-indigo-500">CodeBendr IDE</span>
          </h1>

          <TypingText
            text="Your journey to programming excellence starts here!"
            speed={80}
            pauseAfterTyping={1800}
            className="text-gray-500 font-mono"
          />
        </motion.div>

        {/* Image (optional: slide from right) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-[90%] bg-indigo-500 blur-3xl opacity-40 rounded-full"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-[90%] bg-indigo-500 blur-3xl opacity-40 rounded-full"></div>

          <img
            src={heroImg}
            alt="CodeBendr IDE hero"
            className="relative z-10 h-[280px] md:h-[520px] xl:h-[450px] w-auto rounded-2xl"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
