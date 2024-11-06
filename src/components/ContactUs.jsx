import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Have questions or want to know more? Get in touch with us today!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section (Form) */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-sky-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-500 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Section (Address or Map) */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Location</h3>
            <p className="text-lg text-gray-600 mb-4">
              Sree Institute of Info Tech (SIIT) is located at the heart of the city, offering easy access for students from all areas.
            </p>
            <address className="text-lg text-gray-700 mb-6">
              <p>SIIT Campus</p>
              <p>vanasthalipuram,BNreddy,beside MoreMarket, Hyderabad</p>
              <p>Telangana, India</p>
              <p>Phone: +91 9849171716</p>
              <p>Email: siitbnreddy@gmail.com</p>
            </address>
            {/* Optional: Add a Google Map Embed (or image) */}
            <div className="w-full h-64 bg-gray-300 rounded-lg">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=..."
                className="w-full h-full rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
