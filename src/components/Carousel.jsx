import React, { useState, useEffect } from 'react';

import banner1 from '../assets/banner1.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Banner data (You can replace the image URLs with your real course images)
  const banners = [
    {
      image: banner1,
     // title: 'C Programming',
     // description: 'Learn the fundamentals of C programming with hands-on examples and problem-solving techniques.',
    },
    {
      image: 'https://via.placeholder.com/1200x500/33A1FF/FFFFFF?text=C++Programming',
      //title: 'C++ Programming',
    //  description: 'Master object-oriented programming with C++ and enhance your problem-solving skills.',
    },
    {
      image: 'https://via.placeholder.com/1200x500/33FF57/FFFFFF?text=DSA',
     // title: 'Data Structures & Algorithms',
     // description: 'Strengthen your foundation with Data Structures and Algorithms to build efficient solutions.',
    },
    {
      image: 'https://via.placeholder.com/1200x500/FF33A1/FFFFFF?text=Full+Stack+Web+Development',
      //title: 'Full Stack Web Development',
      //description: 'Learn full-stack web development, including front-end and back-end technologies to become a full-stack developer.',
    },
  ];

  // Auto-scroll functionality (scroll every 5 seconds)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative"> {/* Padding to prevent content overlap with fixed navbar */}
      {/* Carousel Container */}
      <div className="w-full  overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Carousel Banners */}
          {banners.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={banner.image}
                alt={banner.title}
                   className="w-full h-56 sm:h-72 object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                <div className="text-white text-center px-6 sm:px-12">
                  <h2 className="text-2xl sm:text-3xl font-semibold">{banner.title}</h2>
                  <p className="mt-2 text-sm sm:text-lg">{banner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600"
      >
        &#10094; {/* Left Arrow */}
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600"
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
