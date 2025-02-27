import React from "react";

const Contactus: React.FC = () => {
    return (
        <div className="mt-10 font-[sans-serif] bg-backgroundcolor py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center sm:justify-center md:justify-between lg:justify-between  max-w-4xl mx-auto bg-transparent rounded-lg shadow-2xl p-6 sm:p-8 lg:p-12">
         {/* 1st container */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-textcolor mb-6">
              Let's Talk
            </h2>
            <p className="text-textcolor mb-8 w-64">
              Have some big idea or brand to develop and need help? Then reach out
              we'd love to hear about your project and provide help.
            </p>
    


            {/* Contact Information */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Info</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-blue-600 cursor-pointer">info@example.com</p>
                </div>
    
                {/* Socials */}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <p className="text-gray-600">Follow us on social media</p>
                </div>
              </div>
            </div>
            </div>
            {/* 2nd container */}
            <div>
            {/* Contact Form */}
            <form className="space-y-6">
              {/* Name Field */}
              <div className="md:w-[400px] lg:w-[400px]">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-textcolor"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ringtext-color focus:border-textcolor"
                  required
                />
              </div>
    
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-textcolor"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ringtext-color focus:border-textcolor"
                  required
                />
              </div>
    
              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-textcolor"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ringtext-color focus:border-textcolor"
                  required
                ></textarea>
              </div>
    
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-textcolor text-white px-4 py-2 hover:shadow-2xl rounded-md hover:bg-textcolor focus:outline-none transition-2"
                >
                  Send Message
                </button>
              </div>
            </form>
    

          </div>



          </div>
        </div>
      );
};

export default Contactus;