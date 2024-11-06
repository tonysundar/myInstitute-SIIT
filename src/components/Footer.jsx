import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer or Contact Section */}
      <footer className="text-center py-8 bg-gray-800 text-white">
          <p className="text-lg mb-4">Contact Us</p>
          <p className="text-gray-400 mb-4">siitbnreddy@gamil.com | +91 9849171716</p>
          <div className="flex justify-center gap-4 mb-4">
            {/* Social Media Links */}
            <a href="https://linkedin.com" className="text-sky-400 hover:text-sky-600 transition duration-300">
              LinkedIn
            </a>
            <a href="https://github.com" className="text-sky-400 hover:text-sky-600 transition duration-300">
              GitHub
            </a>
            <a href="https://instagram.com" className="text-sky-400 hover:text-sky-600 transition duration-300">
              Instagram
            </a>
            <a href="https://www.youtube.com/@sreedharsir_siit" className="text-sky-400 hover:text-sky-600 transition duration-300">
              YouTube
            </a>
          </div>
          <p className="text-gray-400">&copy; 2024 SIIT. All rights reserved.</p>
        </footer>
    
    </div>
  )
}

export default Footer
