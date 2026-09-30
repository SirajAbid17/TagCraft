import React, { useState } from "react";
import { 
  FiZap, FiVideo, FiMonitor, FiCpu,
  FiLink, FiScissors, FiPlayCircle, FiDownload,
  FiClock, FiUser, FiTrendingUp, FiHeart,
  FiInstagram, FiYoutube, FiBookOpen, FiBriefcase,
  FiChevronDown, FiHelpCircle,
  FiCheck
} from "react-icons/fi";
import { AiOutlineRocket } from "react-icons/ai";

export default function MainContentSections() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Features Data
  const features = [
    {
      icon: <FiZap className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Quick Processing",
      subtitle: "Lightning fast tag generation",
      description: "Get instant results for your content optimization needs"
    },
    {
      icon: <FiVideo className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "High Quality Tags",
      subtitle: "AI-powered relevant suggestions",
      description: "Receive optimized tags that boost visibility"
    },
    {
      icon: <FiMonitor className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Clean Interface",
      subtitle: "User-friendly and intuitive",
      description: "Streamlined design for smooth experience"
    },
    {
      icon: <FiCpu className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "AI Powered",
      subtitle: "Advanced AI algorithms",
      description: "Smart tag generation that understands context"
    }
  ];

  // How It Works Steps
  const steps = [
    {
      icon: <FiLink className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Enter Keyword",
      description: "Type keyword or select from categories",
      step: "01"
    },
    {
      icon: <FiScissors className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "AI Processing",
      description: "AI analyzes and generates tags instantly",
      step: "02"
    },
    {
      icon: <FiPlayCircle className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Review Tags",
      description: "Browse through 50+ optimized suggestions",
      step: "03"
    },
    {
      icon: <FiDownload className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Copy & Use",
      description: "Copy tags to use in your content",
      step: "04"
    }
  ];

  // Why Choose Us Points
  const benefits = [
    { icon: <FiClock />, text: "Save hours of manual research" },
    { icon: <FiUser />, text: "Beginner-friendly interface" },
    { icon: <FiTrendingUp />, text: "Boost SEO and visibility" },
    { icon: <FiHeart />, text: "Loved by creators worldwide" }
  ];

  // Use Cases
  const useCases = [
    { icon: <FiInstagram />, title: "Social Media" },
    { icon: <FiYoutube />, title: "YouTube Videos" },
    { icon: <FiBookOpen />, title: "Blog Articles" },
    { icon: <FiBriefcase />, title: "Business Content" },
    { icon: <FiYoutube />, title: "Tutorials" },
    { icon: <FiInstagram />, title: "Product Reviews" },
    { icon: <FiVideo />, title: "Video Content" },
    { icon: <FiUser />, title: "Personal Branding" },
  ];

  // FAQs
  const faqs = [
    {
      question: "What content does TagCraft support?",
      answer: "TagCraft supports all digital content: videos, blogs, social media, podcasts, and more. AI understands various formats."
    },
    {
      question: "How many tags can I generate?",
      answer: "Generate 50+ relevant tags per search. AI provides effective tags for better visibility across platforms."
    },
    {
      question: "Is there a daily usage limit?",
      answer: "No daily limit. Use TagCraft as much as needed for content creation. Completely free!"
    },
    {
      question: "Do you store my search data?",
      answer: "Only local search history on your device. No personal data or search terms sent to servers."
    },
    {
      question: "Can I use tags for commercial projects?",
      answer: "Yes, all generated tags are yours to use for any purpose including commercial projects and business promotions."
    }
  ];

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white mt-[-170px] text-black">
      {/* Features Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3">
              Powerful Features for Your Workflow
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Everything you need to create perfect tags instantly
            </p>
          </div>

        {/* Features Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
  {features.map((feature, index) => (
    <div 
      key={index}
      className="bg-white rounded-lg p-4 sm:p-5 md:p-6 border border-gray-300 hover:border-black transition-all duration-200"
    >
      {/* Icon Container */}
      <div className="mb-3 p-3 sm:p-4 bg-gray-100 rounded-lg w-fit mx-auto flex items-center justify-center">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2 text-center">
        {feature.title}
      </h3>

      {/* Subtitle */}
      <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base text-center">
        {feature.subtitle}
      </p>

      {/* Description */}
      <p className="text-gray-600 text-xs sm:text-sm text-center">
        {feature.description}
      </p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3">
              How TagCraft Works
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Effortless tag generation made simple
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting Line - Desktop only */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-300"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6 border border-gray-300 hover:border-black transition-all duration-200 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="relative">
                        <div className="p-3 sm:p-4 bg-gray-100 rounded-lg">
                          <div className="text-black">
                            {step.icon}
                          </div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
                Why Choose TagCraft?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 md:mb-6">
                Choose TagCraft for fast, hassle-free AI tag generation that saves you time and enhances your content strategy.
              </p>
              <p className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base">
                TagCraft makes tag generation a breeze — quick, easy, and effective for everyone.
              </p>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center text-black">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="bg-gray-50 rounded-lg p-5 sm:p-6 md:p-8 border border-gray-300 mt-6 sm:mt-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
                Join the TagCraft Community
              </h3>
              <p className="text-gray-600 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                Our platform empowers you to effortlessly generate and optimize tags for your content.
              </p>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold">
                    <FiCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1 text-sm sm:text-base">Instant Results</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Get 50+ relevant tags in seconds</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold">
                    <FiCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1 text-sm sm:text-base">Smart AI</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Powered by advanced AI algorithms</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold">
                    <FiCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1 text-sm sm:text-base">Multi-Platform</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Optimized for all social platforms</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3">
              Explore Use Cases
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Perfect for various content creation needs
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-3 sm:p-4 border border-gray-300 hover:border-black transition-all duration-200 text-center"
              >
                <div className="mb-2 p-2 sm:p-3 rounded-lg bg-gray-100 w-fit mx-auto">
                  <div className="text-black">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-black text-xs sm:text-sm">
                  {useCase.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
              <FiHelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Got questions? We've got answers about TagCraft.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden transition-all duration-200 hover:border-black"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-3 sm:px-4 md:px-6 py-3 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-black text-sm sm:text-base pr-3 sm:pr-4">
                    {faq.question}
                  </span>
                  <FiChevronDown 
                    className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {openFaqIndex === index && (
                  <div className="px-3 sm:px-4 md:px-6 py-3 bg-gray-50 border-t border-gray-300">
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}