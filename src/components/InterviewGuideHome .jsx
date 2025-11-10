import React, { useState } from 'react';
import { Code, Server, BookOpen, Sparkles, ArrowRight, Search, Zap, Target, TrendingUp } from 'lucide-react';

const InterviewGuideHome = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const guides = [
    {
      id: 'react',
      title: 'React.js Interview Guide',
      description: 'Master React concepts from basics to advanced. Covers hooks, lifecycle, Redux, and performance optimization.',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      questions: 20,
      topics: ['Hooks', 'Redux', 'JSX', 'Virtual DOM', 'Components', 'State Management'],
      difficulty: 'Beginner to Advanced'
    },
    {
      id: 'backend',
      title: 'Backend Interview Guide',
      description: 'Complete backend development coverage including JavaScript, Node.js, Express.js, and MongoDB fundamentals.',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      questions: 85,
      topics: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'APIs', 'Async/Await'],
      difficulty: 'Beginner to Expert'
    }
  ];

  const features = [
    {
      icon: Search,
      title: 'Search & Filter',
      description: 'Quickly find specific questions with powerful search'
    },
    {
      icon: Zap,
      title: 'Interactive Learning',
      description: 'Expandable Q&A format for better retention'
    },
    {
      icon: Target,
      title: 'Topic-wise Navigation',
      description: 'Filter by categories to focus on specific areas'
    },
    {
      icon: TrendingUp,
      title: 'Real Interview Questions',
      description: 'Curated from actual technical interviews'
    }
  ];

  const handleNavigate = (guideId) => {
    if (onNavigate) {
      onNavigate(guideId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMTIgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 animate-pulse" />
            <BookOpen className="w-10 h-10" />
            <Sparkles className="w-8 h-8 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ace Your Technical Interview
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Comprehensive interview preparation guides for Frontend & Backend developers
          </p>
          
          <p className="text-lg text-blue-200 mb-8">
            100+ curated questions • Real interview scenarios • Expert explanations
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Updated for 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>Free Access</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span>No Sign-up Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Guide Cards */}
      <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guides.map((guide) => {
            const Icon = guide.icon;
            const isHovered = hoveredCard === guide.id;
            
            return (
              <div
                key={guide.id}
                onMouseEnter={() => setHoveredCard(guide.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ${
                  isHovered ? 'scale-105 shadow-2xl' : 'scale-100'
                }`}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${guide.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative z-10">
                    <Icon className="w-12 h-12 mb-4" />
                    <h2 className="text-3xl font-bold mb-2">{guide.title}</h2>
                    <p className="text-white/90">{guide.description}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                      <div className="text-3xl font-bold text-gray-800">{guide.questions}</div>
                      <div className="text-sm text-gray-600 mt-1">Questions</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                      <div className="text-lg font-bold text-gray-800">{guide.difficulty}</div>
                      <div className="text-sm text-gray-600 mt-1">Level</div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                      Topics Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-gradient-to-r ${guide.bgGradient} text-gray-700 rounded-full text-sm font-medium`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleNavigate(guide.id)}
                    className={`w-full bg-gradient-to-r ${guide.color} text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transform transition-all duration-200 hover:scale-105`}
                  >
                    Start Learning
                    <ArrowRight className={`w-5 h-5 transition-transform duration-200 ${
                      isHovered ? 'translate-x-1' : ''
                    }`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Guides?</h2>
          <p className="text-lg text-gray-600">Everything you need to succeed in technical interviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100 text-lg">Interview Questions</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">6+</div>
              <div className="text-blue-100 text-lg">Technology Topics</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-blue-100 text-lg">Free & Open Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-600 mb-4">
          💡 <strong>Pro Tip:</strong> Practice explaining your answers out loud to build confidence
        </p>
        <p className="text-sm text-gray-500">
          These guides are regularly updated with the latest interview trends and questions
        </p>
      </div>
    </div>
  );
};

export default InterviewGuideHome;