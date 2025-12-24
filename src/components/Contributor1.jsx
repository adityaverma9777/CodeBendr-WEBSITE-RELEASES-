import React from 'react'

const Contributor1 = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
          Contributors
        </h1>

        <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto">
          CodeBendr IDE is developed and maintained by passionate individuals who believe
          in making programming education accessible to everyone.
        </p>

        {/* Lead Developer Card */}
        <div className="bg-white rounded-2xl shadow-md p-10 text-center mb-16">
          <h3 className="text-xl text-indigo-500 font-semibold mb-2">
            👨‍💻 Lead Developer
          </h3>

          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            Aditya Verma
          </h2>

          <p className="text-gray-500 mb-6">
            Creator & Lead Developer
          </p>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Aditya Verma is the creator and lead developer of CodeBendr IDE.
            With a strong passion for education and technology, he built CodeBendr
            to provide students and beginners with a powerful, integrated learning
            environment for programming.
          </p>

          <a
            href="https://www.adityavermaworks.in/"
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🙏 Special Thanks
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>The VS Code team at Microsoft for an amazing foundation</li>
            <li>Open-source contributors whose work powers this project</li>
            <li>Educators who inspire better learning experiences</li>
            <li>Students who use CodeBendr and share valuable feedback</li>
          </ul>
        </div>

        {/* Built With */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            ⚙️ Built With
          </h2>

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
        <div className="bg-indigo-50 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🚀 Want to Contribute?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            We welcome contributions from the community! You can help by improving
            course content, fixing bugs, suggesting new features, or enhancing documentation.
          </p>

          <p className="text-gray-600">
            Visit our website and fill out the contact form to share your ideas with us!
          </p>
          
        </div>

      </div>
    </section>
  )
}

export default Contributor1
