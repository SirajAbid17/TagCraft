import React from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiGlobe,
  FiMessageSquare,
  FiUsers
} from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black pt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Contact <span className="text-black">TagCraft</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4">
            Get in touch with <span className="font-semibold">Siraj Abid</span> and <span className="font-semibold">Saifullah Gujjar</span>
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
          
          {/* Email */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                <FiMail className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-1 text-sm sm:text-base">sirajabid641@gmail.com</p>
                <p className="text-gray-500 text-xs sm:text-sm">Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                <FiPhone className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-gray-600 mb-1 text-sm sm:text-base">+92 328 7303593</p>
                <p className="text-gray-500 text-xs sm:text-sm">Available during working hours</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 rounded-lg flex items-center justify-center">
                <FiMapPin className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-1">
                  Basti Amina Abad, Kharian
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">Punjab, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

      

        {/* Working Hours */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Working Hours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-300 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FiClock className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-bold text-lg">Regular Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm sm:text-base">Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FiGlobe className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-bold text-lg">Contact Methods</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiMessageSquare className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600 text-sm sm:text-base">Email response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiUsers className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600 text-sm sm:text-base">Available for collaborations</span>
                </div>
                <div className="flex items-center gap-3">
                  <AiOutlineHeart className="w-5 h-5 text-red-500" />
                  <span className="text-gray-600 text-sm sm:text-base">Passionate about helping creators</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Find Us</h2>
          <div className="bg-white border border-gray-300 rounded-xl overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-300">
              <h3 className="font-bold text-lg mb-2">Our Location</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Basti Amina Abad, near Ideal Science Academy & Ideal Degree College, 
                Kharian, Punjab 50700, Pakistan
              </p>
            </div>
            <div className="h-64 sm:h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.9802249039103!2d71.18138437390715!3d30.066101317547258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393ad7f9b41ec373%3A0x66c11abdddd2132b!2sIdeal%20Science%20Academy%20%26%20Ideal%20Degree%20College!5e0!3m2!1sen!2s!4v1766116060665!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Basti Amina Abad, near Ideal Science Academy & Ideal Degree College"
                className="filter grayscale"
              />
            </div>
            <div className="p-4 sm:p-6 border-t border-gray-300 bg-gray-50">
              <a
                href="https://maps.google.com/?q=Ideal+Science+Academy+%26+Ideal+Degree+College,Kharian,Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-400 hover:border-black text-black hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base"
              >
                <FiMapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let's Connect</h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Whether you have questions about TagCraft, want to collaborate, or just want to say hello, 
            we're always happy to connect with fellow developers and creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sirajabid641@gmail.com"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              <FiMail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="tel:+923287303593"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-gray-400 hover:border-black text-black hover:bg-gray-100 font-bold rounded-lg transition-all duration-200"
            >
              <FiPhone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}