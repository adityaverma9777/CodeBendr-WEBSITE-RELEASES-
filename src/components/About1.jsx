import React from 'react'
import checkmarkIcon from '../assets/icons/checkmark.png'
import rocketIcon from '../assets/icons/rocket.png'

const About1 = () => {
  return (
    <section className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16">
          About <span className="text-indigo-500 font-codebendr">CodeBendr IDE</span>
        </h1>

        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-3xl shadow-xl p-10 md:p-14 space-y-16">

          {/* Section */}
          <Section title="What is CodeBendr?">
            CodeBendr IDE is a specialized learning-focused IDE built on top of
            Visual Studio Code. It blends professional development tools with an
            integrated Learning Management System (LMS) to help beginners learn
            programming faster and smarter.
          </Section>

          {/* Vision */}
          <Section title="Our Vision">
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                'Learn by doing, not reading',
                'Clear path from basics to advanced',
                'Self-paced learning experience',
                'Instant feedback & guidance',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:scale-105 hover:shadow-lg transition"
                >
                  <img src={checkmarkIcon} alt="Check" className="w-6 h-6 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Audience */}
          <Section title="Who Is It For?">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Students learning their first language',
                'Self-learners wanting structure',
                'Educators & instructors',
                'Bootcamp participants',
              ].map((item, i) => (
                <Card key={i} text={item} />
              ))}
            </div>
          </Section>

          {/* Features */}
          <Section title="Key Features">
            <div className="grid md:grid-cols-2 gap-8">
              <Feature
                title="Built-In Learning System"
                desc="HTML, Python & Java with structured chapters."
              />
              <Feature
                title="Interactive Lessons"
                desc="Markdown lessons with syntax highlighting."
              />
              <Feature
                title="Hands-On Assignments"
                desc="Practice problems, live editor & solutions."
              />
              <Feature
                title="Knowledge Assessment"
                desc="Quizzes with instant feedback & retries."
              />
            </div>
          </Section>

          {/* Tech */}
          <Section title="Built on VS Code Foundation">
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Professional editor experience</li>
              <li>Extensions & Git integration</li>
              <li>Debugging & terminal access</li>
            </ul>
          </Section>

          {/* Contact */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">Contact & Support</h3>

            <a
              href="https://www.adityavermaworks.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white
              bg-gradient-to-r from-indigo-500 to-purple-500
              hover:scale-110 hover:shadow-[0_0_40px_rgba(99,102,241,0.7)]
              transition-all duration-300"
            >
              Visit My Official Website
              <img src={rocketIcon} alt="Rocket" className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

/* Reusable Components */

const Section = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
)

const Card = ({ text }) => (
  <div
    className="p-6 rounded-2xl bg-white shadow-md
    hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]
    transition-all duration-300"
  >
    {text}
  </div>
)

const Feature = ({ title, desc }) => (
  <div
    className="p-6 rounded-2xl bg-gray-50
    hover:bg-white hover:scale-105
    hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
    transition-all duration-300"
  >
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{desc}</p>
  </div>
)

export default About1

