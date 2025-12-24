import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm md:text-base mb-2">
          © 2025 <span className="font-semibold text-white">CodeBendr IDE</span>. Developed by{' '}
          <span className="font-medium text-indigo-400">Aditya Verma</span>.
        </p>

        <a
          href="https://www.adityavermaworks.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base text-gray-400 hover:text-indigo-400 transition-colors duration-300"
        >
          adityavermaworks.in
        </a>

      </div>
    </footer>
  )
}

export default Footer
