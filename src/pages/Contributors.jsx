import React from 'react'
import Contributor1 from '../components/Contributor1'

const Contributors = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
      <div className="relative z-10">
        <Contributor1 />
      </div>
    </div>
  )
}

export default Contributors
