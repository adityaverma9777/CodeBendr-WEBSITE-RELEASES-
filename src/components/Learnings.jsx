import React from 'react'

const Learnings = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What You Will Learn
        </h1>

        <p className="text-gray-600 text-xl mb-12">
          Everything you need to start coding with confidence.
        </p>

        {/* Learning Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]">
            <h2 className="text-2xl font-semibold mb-3">
              🎓 Learn 3 Languages
            </h2>
            <p className="text-gray-600 text-lg">
              HTML, Python & Java
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]">
            <h2 className="text-2xl font-semibold mb-3">
              📚 Built-in Lessons
            </h2>
            <p className="text-gray-600 text-lg">
              Structured curriculum designed for beginners
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]">
            <h2 className="text-2xl font-semibold mb-3">
              💻 Practice Projects
            </h2>
            <p className="text-gray-600 text-lg">
              Hands-on assignments to build real skills
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Learnings
