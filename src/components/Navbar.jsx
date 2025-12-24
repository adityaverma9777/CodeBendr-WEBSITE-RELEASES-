import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const btnClass =
    "text-[#2de1fc] font-semibold px-4 py-2 rounded transition-all duration-200 hover:bg-[#2de1fc] hover:text-white cursor-pointer"

  const btnClass2 =
    "text-2xl text-gray-700 hover:text-[#2de1fc] transition-all duration-150 cursor-pointer"

  return (
    <nav className="w-full px-6 py-4 shadow-sm relative z-50 bg-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
          <h3 className="font-semibold text-xl text-gray-700 font-codebendr">
            CodeBendr IDE
          </h3>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className={btnClass}>Home</Link>
          <Link to="/about" className={btnClass}>About</Link>
          <Link to="/contributors" className={btnClass}>Contributors</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl text-gray-700 transition-opacity ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white flex flex-col justify-center items-center gap-10 md:hidden z-[100]"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full text-2xl text-black hover:bg-gray-100 transition z-[110] cursor-pointer"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <Link to="/" onClick={() => setOpen(false)} className={btnClass2}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)} className={btnClass2}>
              About
            </Link>
            <Link to="/contributors" onClick={() => setOpen(false)} className={btnClass2}>
              Contributors
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
