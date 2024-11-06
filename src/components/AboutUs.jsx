import React from 'react';
import vineeth from '../assets/vineeth.jpeg';
import Tony from '../assets/Tony.jpg';
import Kalyan from '../assets/Kalyan.jpeg';
import siitLogo from '../assets/siitLogo.jpeg';







const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-sky-500 mb-4">
            Sree Institute of Info Tech (SIIT)
          </h1>
          {/* Replace with your logo */}
          <div className="flex justify-center mb-6">
            <img
              src={siitLogo} // Correct the path here to your logo
              alt="SIIT Logo"
              className="w-40 h-auto object-contain" // Adjust the width/height as needed
            />
          </div>
          <p className="text-xl text-gray-600">
            Empowering the Next Generation of Developers
          </p>
        </header>

        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to SIIT</h3>
          <p className="text-gray-600">
            Sree Institute of Info Tech (SIIT) offers comprehensive courses in full-stack development, DSA, and more. Join us to start your journey into the tech industry!
            Sree Institute of Info Tech (SIIT) offers comprehensive courses in full-stack development, DSA, and more. Join us to start your journey into the tech industry!
          </p>
        </div>

        {/* Testimonial Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">What Our Students Say</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="flex justify-center mb-4">
                <img
                  src={vineeth} // Replace with the student's image
                  alt="John Doe"
                  className="w-24 h-24 object-cover rounded-full border-4 border-sky-400" // Circular image with border
                />
              </div>
              <p className="text-gray-600 mb-4">
                "SIIT provided me with the right tools and knowledge to excel in full-stack development. The curriculum is well-structured and the faculty is excellent."
              </p>
              <p className="font-semibold text-gray-800">Vineeth</p>
              <p className="text-gray-500">FrontEnd Developer</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="flex justify-center mb-4">
                <img
                  src={Tony} // Replace with the student's image
                  alt="Jane Smith"
                  className="w-24 h-24 object-cover rounded-full border-4 border-sky-400" // Circular image with border
                />
              </div>
              <p className="text-gray-600 mb-4">
                "I owe my success in competitive programming to the DSA course at SIIT. The hands-on approach made complex concepts much easier to understand."
              </p>
              <p className="font-semibold text-gray-800">Tony Sundar</p>
              <p className="text-gray-500">FullStack Deloveper</p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="flex justify-center mb-4">
                <img
                  src={Kalyan} // Replace with the student's image
                  alt="Mike Johnson"
                  className="w-24 h-24 object-cover rounded-full border-4 border-sky-400" // Circular image with border
                />
              </div>
              <p className="text-gray-600 mb-4">
                "SIIT’s C++ programming course helped me grasp fundamental programming concepts that I use every day in my work as a developer."
              </p>
              <p className="font-semibold text-gray-800">Kalyan</p>
              <p className="text-gray-500">FrontEnd Developer</p>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        {/* Courses Section, Skills Section, Footer, etc. */}
      </div>
    </section>
  );
};

export default AboutUs;
