import React from 'react'
import Hero from '../components/Hero'
import Learnings from '../components/Learnings'
import Requirements from '../components/Requirements'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent"></div>
      <div className="relative z-10">
        <Hero />
        <Learnings />
        <Requirements />
      </div>
    </div>
  )
}

export default Home
