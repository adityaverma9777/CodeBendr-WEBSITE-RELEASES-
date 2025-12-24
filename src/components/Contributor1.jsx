import React, { useState } from 'react'
import ContactForm from './ContactForm'
import globeIcon from '../assets/icons/globe.png'
import thankYouIcon from '../assets/icons/thank-you.png'
import gearIcon from '../assets/icons/gear.png'
import rocketIcon from '../assets/icons/rocket.png'

const Contributor1 = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          Contributors
        </h1>

        <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto">
          CodeBendr IDE is developed and maintained by passionate individuals who believe
          in making programming education accessible to everyone.
        </p>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Aditya Verma Card */}
          <div className="relative backdrop-blur-2xl bg-white/20 border border-white/40 rounded-2xl shadow-2xl p-10 text-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] hover:bg-white/30 hover:border-white/60 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 to-indigo-200/30 rounded-2xl"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Aditya Verma
              </h2>

              <p className="text-gray-500 mb-6">
                Software Developer & Releases Manager
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Codes the software, and handles releases for IDE.
              </p>

              <a
                href="https://www.adityavermaworks.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white
              bg-cyan-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]
              transition-all duration-300 mt-auto"
              >
                <img src={globeIcon} alt="Website" className="w-5 h-5" />
                Visit Website
              </a>
            </div>
          </div>

          {/* Saumya Chaudhary Card */}
          <div className="relative backdrop-blur-2xl bg-white/20 border border-white/40 rounded-2xl shadow-2xl p-10 text-center transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] hover:bg-white/30 hover:border-white/60 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-2xl"></div>
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Saumya Chaudhary
              </h2>

              <p className="text-gray-500 mb-6">
                Website Developer
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Maintains the website, manages the UI/UX of this project.
              </p>

              <a
                href="https://portfolio-saumyachaudhary.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white
              bg-purple-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
              transition-all duration-300 mt-auto"
              >
                <img src={globeIcon} alt="Website" className="w-5 h-5" />
                Visit Website
              </a>
            </div>
          </div>
        </div>

        {/*Contributor*/}
          <div className="bg-white rounded-2xl shadow-md p-10 text-center mb-16">
          <h3 className="text-xl text-indigo-500 font-semibold mb-2">
            👨‍💻 Contributor
          </h3>

          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            Saumya Chaudhary
          </h2>

          <p className="text-gray-500 mb-6">

Frontend Developer (React)          </p>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
          Saumya contributed to the development of CodeBendr IDE by migrating the website to a modern React-based architecture. With a focus on clean UI, responsiveness, and performance, Saumya helped enhance the overall user experience and maintainability of the project.
          </p>

          <a
            href="https://portfolio-saumyachaudhary.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-2xl font-semibold text-white
            bg-indigo-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(99,102,241,0.7)]
            transition-all duration-300"
          >
            🌐 Visit Website
          </a>
        </div>

        {/* Special Thanks */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <img src={thankYouIcon} alt="Thank You" className="w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Special Thanks
            </h2>
          </div>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>The VS Code team at Microsoft for an amazing foundation</li>
            <li>Open-source contributors whose work powers this project</li>
            <li>Educators who inspire better learning experiences</li>
            <li>Students who use CodeBendr and share valuable feedback</li>
          </ul>
        </div>

        {/* Built With */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <img src={gearIcon} alt="Built With" className="w-8 h-8" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Built With
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-gray-600">
            <div>
              <strong>Visual Studio Code</strong>
              <p>Core editor foundation</p>
            </div>

            <div>
              <strong>Node.js</strong>
              <p>JavaScript runtime</p>
            </div>

            <div>
              <strong>Electron</strong>
              <p>Desktop application framework</p>
            </div>

            <div>
              <strong>Monaco Editor</strong>
              <p>Code editing engine</p>
            </div>
          </div>
        </div>

        {/* Contribute */}
        <div className="bg-white rounded-2xl p-10 text-center shadow-md">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={rocketIcon} alt="Rocket" className="w-10 h-10" />
            <h2 className="text-3xl font-bold text-gray-800">
              Want to Contribute?
            </h2>
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            We welcome contributions from the community! You can help by improving
            course content, fixing bugs, suggesting new features, or enhancing documentation.
          </p>

          <p className="text-gray-600 mb-8">
            Fill the form to connect with us!
          </p>

          <ContactForm />
        </div>

      </div>
    </section>
  )
}

export default Contributor1
