import React from 'react'

const Projects = () => {
  return (
    <div>
         {/* Courses Section */}
         <div className="text-center mb-16 pt-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Full Stack Development</h4>
              <p className="text-gray-600 mb-4">
                Master front-end and back-end technologies, including React, Node.js, MongoDB, and more.
              </p>
              <button className="px-6 py-3 bg-sky-400 text-white rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Course 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Data Structures & Algorithms (DSA)</h4>
              <p className="text-gray-600 mb-4">
                Learn core data structures and algorithms to build problem-solving skills and ace technical interviews.
              </p>
              <button className="px-6 py-3 bg-sky-400 text-white rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Course 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">C & C++ Programming</h4>
              <p className="text-gray-600 mb-4">
                Gain expertise in C and C++, two of the most powerful and widely used programming languages.
              </p>
              <button className="px-6 py-3 bg-sky-400 text-white rounded-lg shadow-md hover:bg-sky-500 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Expertise</h3>
          <div className="flex justify-center gap-8">
            {/* Skill Buttons */}
            <button className="px-8 py-4 bg-sky-400 text-white rounded-lg shadow-lg hover:bg-sky-500 transition duration-300">
              C Language
            </button>
            <button className="px-8 py-4 bg-sky-400 text-white rounded-lg shadow-lg hover:bg-sky-500 transition duration-300">
              C++
            </button>
            <button className="px-8 py-4 bg-sky-400 text-white rounded-lg shadow-lg hover:bg-sky-500 transition duration-300">
              DSA
            </button>
          </div>
        </div>

          </div>

      
    
  )
}

export default Projects
