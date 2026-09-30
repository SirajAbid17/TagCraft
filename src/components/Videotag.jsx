import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
  FiSearch, 
  FiCopy, 
  FiCheck, 
  FiTrash2, 
  FiTrendingUp, 
  FiChevronUp,
  FiClock,
  FiZap,
  FiHelpCircle,
  FiHash
} from "react-icons/fi";
import { 
  AiOutlineFire, 
  AiOutlineHistory,
  AiOutlineRocket
} from "react-icons/ai";
import { 
  BsStars, 
  BsLightbulb,
  BsClipboard
} from "react-icons/bs";
import { 
  RiRobot2Line,
  RiFlashlightLine
} from "react-icons/ri";
import MainContentSections from "./MainContentSections";


export default function Videotag() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const api_url = `${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    const savedHistory = localStorage.getItem("tagSearchHistory");
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch {
        console.error("Error loading history");
      }
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tagSearchHistory", JSON.stringify(history));
  }, [history]);

 
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      return toast.warning("⚠️ Please enter a keyword");
    }

    setLoading(true);

    try {
      const newHistory = [
        searchTerm,
        ...history.filter((h) => h !== searchTerm),
      ].slice(0, 10);
      setHistory(newHistory);

      const prompt = `Generate at least 50 popular and trending hashtags for "${searchTerm}". Return ONLY a JSON array of strings like ["tag1","tag2",...].`;

      const response = await fetch(api_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.8, maxOutputTokens: 2000 },
        }),
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const rawText = await response.text();
      let data;
      try {
        data = JSON.parse(rawText);
      } catch {
        console.error("Invalid JSON:", rawText);
        toast.error("❌response error. Try again.");
        setLoading(false);
        return;
      }

      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
      let parsedTags = [];
      try {
        const cleanReply = aiReply.replace(/```json|```/g, "").trim();
        parsedTags = JSON.parse(cleanReply);
      } catch {
        const tagMatches = aiReply.match(/#?\b[\w]+\b/g) || [];
        parsedTags = [
          ...new Set(tagMatches.map((t) => t.replace("", "").toLowerCase())),
        ];
      }

      if (parsedTags.length < 50) {
        const needed = 50 - parsedTags.length;
        parsedTags = [...parsedTags, ...parsedTags.slice(0, needed)];
      } else if (parsedTags.length > 100) {
        parsedTags = parsedTags.slice(0, 100);
      }

      setTags(parsedTags);
      setSelectedCategory(searchTerm.toLowerCase());

      setTimeout(() => {
        const resultsSection = document.getElementById("results-section");
        resultsSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      toast.success(`✅ Generated ${parsedTags.length} tags for "${searchTerm}"`);
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to fetch  tags. Check your connection.");
    } finally {
      setLoading(false);
      inputRef.current?.blur();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(category);
    setTimeout(handleSearch, 100);
  };

  const handleCopyTags = () => {
    if (!tags.length) return toast.warning("⚠️ No tags to copy");
    const tagsText = tags.map((t) => `${t}`).join(" ");
    navigator.clipboard
      .writeText(tagsText)
      .then(() => toast.success(`✅ Copied ${tags.length} tags`));
  };

  const handleCopyTag = (tag, e) => {
    navigator.clipboard.writeText(`${tag}`).then(() => {
      const original = e.target.textContent;
      e.target.textContent = "✅ Copied!";
      e.target.style.color = "#059669";
      setTimeout(() => {
        e.target.textContent = original;
        e.target.style.color = "";
      }, 1000);
    });
  };

  const handleClearHistory = () => {
    if (window.confirm("Clear all history?")) {
      setHistory([]);
      localStorage.removeItem("tagSearchHistory");
      toast.info("✅ History cleared");
    }
  };

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const popularCategories = [
    "funny",
    "comedy",
    "cricket",
    "gaming",
    "music",
    "cooking",
    "travel",
    "fashion",
    "fitness",
    "education",
    "technology",
    "vlog",
    "tutorial",
    "review",
    "unboxing",
    "prank",
    "challenge",
  ];

  if (!isOpen) return null;

  return (
    <div className="min-h-screen mt-16 bg-white text-black">
      <ToastContainer 
        position="top-right" 
        autoClose={2000} 
        theme="light"
      />
     
      <header className="top-0 z-30 bg-white border-b border-gray-300 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter a keyword (e.g., funny, gaming, travel)..."
                className="w-full px-5 py-3 sm:py-4 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all duration-200 placeholder-gray-500"
                disabled={loading}
              />
              {loading && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
                </div>
              )}
            </div>
            <button
              onClick={handleSearch}
              disabled={loading || !searchTerm.trim()}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-gray-800 text-white font-bold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-black"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Generating...
                </>
              ) : (
                <>
                  <FiSearch className="w-5 h-5" />
                  Generate Tags
                </>
              )}
            </button>
          </div>

          {/* History */}
          {history.length > 0 && !isScrolled && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-black font-semibold flex items-center gap-2">
                  <AiOutlineHistory className="text-lg" />
                  Search History
                </h3>
                <button
                  onClick={handleClearHistory}
                  className="text-gray-600 hover:text-red-600 text-sm transition-colors duration-200 font-medium px-3 py-1 hover:bg-red-50 rounded-lg flex items-center gap-1 border border-gray-300 hover:border-red-300"
                >
                  <FiTrash2 className="w-4 h-4" />
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                {history.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCategoryClick(item)}
                    className="px-4 py-2 text-sm bg-gray-100 text-black hover:bg-gray-200 hover:text-black border border-gray-300 hover:border-black rounded-lg transition-all duration-200 whitespace-nowrap font-medium flex items-center gap-1"
                  >
                    <FiClock className="w-3 h-3" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Categories */}
          {!isScrolled && (
            <div className="mb-2">
              <h3 className="text-black font-semibold mb-3 flex items-center gap-2">
                <AiOutlineFire className="text-lg" />
                Popular Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1 border rounded-lg ${
                      selectedCategory === cat
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300 hover:border-black hover:bg-gray-100"
                    }`}
                  >
                    <FiTrendingUp className="w-3 h-3" />
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

    
      <main id="results-section" className="w-full min-h-screen pb-24 bg-white">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-black mb-6"></div>
            <p className="text-xl font-semibold text-black mb-2 flex items-center gap-2">
             
              Tags is generating   "{searchTerm}"...
            </p>
            <p className="text-gray-600">This may take a few seconds</p>
          </div>
        ) : tags.length > 0 ? (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-black text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                    
                      {tags.length} Generated Tags for "{searchTerm}"
                    </h2>
                    <p className="text-gray-600 flex items-center gap-1">
                      <FiHash className="w-4 h-4" />
                      Click on any tag to copy it individually
                    </p>
                  </div>
                  <button
                    onClick={handleCopyTags}
                    className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 border border-black"
                  >
                    <BsClipboard className="w-5 h-5" />
                    Copy All Tags
                  </button>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                  {tags.map((tag, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => handleCopyTag(tag, e)}
                      className="bg-white hover:bg-gray-100 border border-gray-300 p-4 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-2 group hover:shadow-md"
                    >
                     
                      <span className="text-black font-medium truncate group-hover:font-semibold">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[70vh] w-full px-4">
            <div className="text-center max-w-2xl mx-auto">
              <div className="mb-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black flex items-center justify-center gap-3 mt-20 py-2">
                  Tag Generator
                </h2>
                <p className="text-gray-700 text-lg sm:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
                  Enter any keyword and get at least 50 optimized, trending
                  hashtags instantly! Perfect for YouTube, Instagram, TikTok and
                  more.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {popularCategories.slice(0, 5).map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCategoryClick(cat)}
                    className="px-6 py-3 bg-white hover:bg-black hover:text-white text-black rounded-lg transition-all duration-200 font-medium border border-gray-300 hover:border-black flex items-center gap-2 hover:shadow-md"
                  >
                  
                    Try "{cat}"
                  </button>
                ))}
              </div>
            
            </div>
          </div>
        )}
      </main>

      {/* Scroll to Top */}
      {isScrolled && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-28 right-4 sm:right-6 p-3 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-200 z-40 flex items-center justify-center border border-black shadow-lg hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <FiChevronUp className="w-6 h-6" />
        </button>
      )}
      <MainContentSections/>
    </div>
  );
}