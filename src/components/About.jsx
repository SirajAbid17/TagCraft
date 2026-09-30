import React from 'react';
import { 
  FiZap, 
  FiUsers, 
  FiTarget, 
  FiCode,
  FiGlobe,
  FiShield,
  FiTrendingUp,
  FiAward,
  FiCheckCircle
} from 'react-icons/fi';
import { AiOutlineRocket } from 'react-icons/ai';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black pt-3">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="text-black">TagCraft</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6">
              Where <span className="font-semibold">Siraj Abid</span> and <span className="font-semibold">Saifullah Gujjar</span> united to create something amazing
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              A collaborative project born from passion, innovation, and the desire to solve real-world problems
            </p>
          </div>

          {/* Founders Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Meet The Creators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {/* Founder 1 */}
              <div className="bg-white border border-gray-300 rounded-xl p-6 sm:p-8 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold">
                    <img src="https://media.licdn.com/dms/image/v2/D4E03AQHkrJPQOFjKug/profile-displayphoto-scale_400_400/B4EZs_RFTkGoAg-/0/1766293002989?e=1769040000&v=beta&t=ZEhnZONRi5VyJ3tH5n73DTkQPcKyLaXyAi9vGkruOe4" className='rounded-full' alt="" />
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Siraj Abid</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Full-Stack Engineer | MERN & MEAN Expert
                </p>
                <p className="text-gray-600 text-sm">
                  Bringing expertise in modern web technologies, scalable architectures, and clean code practices
                </p>
              </div>

              {/* Founder 2 */}
              <div className="bg-white border border-gray-300 rounded-xl p-6 sm:p-8 text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold"><img  
                  className='rounded-full' src="https://scontent.flyp3-1.fna.fbcdn.net/v/t39.30808-1/429667112_366911092963736_7709511776159575034_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=epPWsnb73mMQ7kNvwGucBG2&_nc_oc=AdkW4fjY0lXNkIrr9_qg_ebyxDkskRKo3yWXMAIypAnZ4MXZpQ_C8TDl-mL-7DeLQ2A&_nc_zt=24&_nc_ht=scontent.flyp3-1.fna&_nc_gid=4X5rmsK0OFB39jPwX1riDQ&oh=00_AfpqFVCo3oPw4cXH8I5jF-EF8DDecEOe0XD6dHdJkYoBMQ&oe=695C5DFC"  alt="" /></span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Saifullah Gujjar</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Full-Stack Developer | Problem Solver
                </p>
                <p className="text-gray-600 text-sm">
                  Contributing innovative solutions, backend expertise, and a passion for creating impactful applications
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Our Story</h2>
            <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 sm:p-8">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                TagCraft began as a simple idea between two passionate developers who wanted to create a tool that would make content creators' lives easier. 
                We noticed how challenging it was for creators to find the right hashtags for their content across different platforms.
              </p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Combining Siraj's expertise in MERN/MEAN stacks and Saifullah's problem-solving skills, we set out to build an AI-powered tag generator 
                that's not only efficient but also intelligent enough to understand context and generate relevant hashtags.
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                What started as a side project quickly grew into a full-fledged application that we're proud to share with the world.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Our Mission</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-300 rounded-xl p-5 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FiZap className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Speed & Efficiency</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Generate tags instantly without wasting time
                </p>
              </div>

              <div className="bg-white border border-gray-300 rounded-xl p-5 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FiTarget className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Accuracy</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  AI-powered relevant tag suggestions
                </p>
              </div>

              <div className="bg-white border border-gray-300 rounded-xl p-5 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Accessibility</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Free tool for all content creators
                </p>
              </div>

              <div className="bg-white border border-gray-300 rounded-xl p-5 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FiGlobe className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
                </div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Global Reach</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Support for multiple platforms and languages
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Technology Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: "React.js", color: "bg-blue-50" },
                { name: "Next.js", color: "bg-gray-50" },
                { name: "Node.js", color: "bg-green-50" },
                { name: "Express.js", color: "bg-gray-50" },
                { name: "MongoDB", color: "bg-green-50" },
                { name: "Tailwind CSS", color: "bg-blue-50" },
                { name: "AI Integration", color: "bg-purple-50" },
                { name: "Vercel", color: "bg-gray-50" },
              ].map((tech, index) => (
                <div key={index} className="bg-white border border-gray-300 rounded-lg p-4 text-center">
                  <span className="font-medium text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Why Choose TagCraft?</h2>
            <div className="space-y-4">
              {[
                "Built by developers who understand creators' needs",
                "Completely free with no hidden charges",
                "Generates 50+ relevant tags per search",
                "AI-powered for maximum relevance",
                "Simple, clean, and intuitive interface",
                "No account required to start using",
                "Continuous improvements and updates",
                "Responsive design for all devices"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm sm:text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Boost Your Content?</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Join thousands of content creators who trust TagCraft for their hashtag needs
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              <AiOutlineRocket className="w-5 h-5" />
              Start Generating Tags Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}