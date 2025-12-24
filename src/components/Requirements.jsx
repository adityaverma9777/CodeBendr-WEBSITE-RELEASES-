import React from 'react'
import pythonLogo from '../assets/python-logo.png'
import javaLogo from '../assets/java-logo.png'
import logo from "../assets/logo.png"

const Requirements = () => {

  const downloadLinks = {
    python: 'https://github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-/releases/download/v1.0.0/python-3.10.0-amd64.exe',
    java: 'https://github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-/releases/download/v1.0.0/OpenJDK25U-jdk_x64_windows_hotspot_25.0.1_8.msi',
    codebendr: 'https://github.com/adityaverma9777/CodeBendr-WEBSITE-RELEASES-/releases/download/v1.0.0/CodeBendrSetup-1.107.0.exe'
  }

  const handleDownload = (url) => {
    if (!url) {
      alert('Download link not available.')
      return
    }

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', '')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Before You Begin
        </h1>

        <p className="text-gray-600 mb-10 text-xl">
          To use <span className="font-semibold text-indigo-500 font-codebendr">CodeBendr IDE</span> effectively,
          please make sure the following prerequisites are installed on your system.
        </p>

        {/* Requirements Cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-16">

          <div className="bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]">
            <div className="flex justify-center mb-4">
              <img src={pythonLogo} alt="Python" className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Python</h3>
            <p className="text-gray-600 text-sm">
              Required for Python programming lessons. Install the LTS version.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]">
            <div className="flex justify-center mb-4">
              <img src={javaLogo} alt="Java" className="h-12 w-auto object-contain" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Java SDK</h3>
            <p className="text-gray-600 text-sm">
              Required for Java programming lessons.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] sm:col-span-2">
            <div className="flex justify-center mb-4">
              <img src={logo} alt="CodeBendr" className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2 font-codebendr">CodeBendr IDE</h3>
            <p className="text-gray-600 text-sm">
              Main CodeBendr IDE application to learn more efficiently.
            </p>
          </div>

        </div>

        {/* Download Section */}
        <p className="text-gray-700 mb-6 text-lg">
          Click the buttons below and install them in the order shown above.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          {/* Python */}
          <button
            onClick={() => handleDownload(downloadLinks.python)}
            className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]"
          >
            <img src={pythonLogo} alt="Python logo" className="w-8 h-8" />
            <span className="font-semibold text-gray-800 text-lg">
              Download Python
            </span>
          </button>

          {/* Java */}
          <button
            onClick={() => handleDownload(downloadLinks.java)}
            className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]"
          >
            <img src={javaLogo} alt="Java logo" className="w-8 h-8" />
            <span className="font-semibold text-gray-800 text-lg">
              Download Java
            </span>
          </button>

          {/* CodeBendr */}
          <button
            onClick={() => handleDownload(downloadLinks.codebendr)}
            className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]"
          >
            <img src={logo} alt="Java logo" className="w-8 h-8" />
            <span className="font-semibold text-gray-800 text-lg">
              Download CodeBendr IDE
            </span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default Requirements
