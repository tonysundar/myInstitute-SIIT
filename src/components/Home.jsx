import React from 'react'
import MyImage from '../assets/MyImage.jpeg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const nav = useNavigate();
    const naviga = ()=>{
        nav('/ContactUs')
    }
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello Students,My name is Sreedhar Reddy</h1>
      <p class="mb-8 leading-relaxed">With 20 years of experience in teaching C, C++, and Data Structures & Algorithms (DSA), I have a deep passion for helping students master programming fundamentals and develop problem-solving skills.</p>
      <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">Send-MAIL</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button onClick={naviga} class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">ContactUs</button>
      </div>
      <p class="text-sm mt-2 text-gray-500 mb-8 w-full">siitbnreddy@gamil.com</p>
      <div class="flex lg:flex-row md:flex-col">
      <div className="flex justify-center space-x-6 mt-4">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg" 
      alt="LinkedIn" 
      className="w-8 h-8 rounded-full hover:opacity-75 transition-opacity duration-300"
    />
      </a>
  
  {/* GitHub Icon */}
  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
      alt="GitHub" 
      className="w-8 h-8 rounded-full hover:opacity-75 transition-opacity duration-300"
    />
  </a>
  
  {/* YouTube Icon */}
  <a href="https://www.youtube.com/@sreedharsir_siit" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" 
      alt="YouTube" 
      className="w-8 h-8 rounded-full hover:opacity-75 transition-opacity duration-300"
    />
  </a>

  {/* Instagram Icon */}
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" 
      alt="Instagram" 
      className="w-8 h-8 rounded-full hover:opacity-75 transition-opacity duration-300"
    />
  </a>
   {/* Facebook Icon */}
   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg" 
      alt="Facebook" 
      className="w-8 h-8 rounded-full hover:opacity-75 transition-opacity duration-300"
    />
  </a>
</div>

      </div>
    </div>
    <div className="flex justify-center items-center">
  <img 
    className="w-64 h-64 object-cover rounded-full" 
    alt="hero" 
    src={MyImage} 
  />
</div>

  </div>
</section>
    </div>
  )
}

export default Home
