import React from 'react'
import About1 from '../components/About1'

const About = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-indigo-50 to-purple-100 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent"></div>
      <div className="relative z-10">
        <About1 />
      </div>
    </div>
  )
}

export default About
