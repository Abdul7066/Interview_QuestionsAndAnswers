import React, { useState } from 'react';
import { Code, Server, ArrowRight, Search, Zap, Target, TrendingUp, Terminal, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import AddQuestionModal from './AddQuestionModal';

const InterviewGuideHome = ({ onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const guides = [
    {
      id: 'react',
      title: 'React.js',
      subtitle: 'Frontend Interview Guide',
      description: 'Master React concepts from basics to advanced. Covers hooks, lifecycle, Redux, and performance optimization.',
      icon: Code,
      gradient: 'from-cyan-500 to-blue-600',
      glowColor: 'rgba(0, 212, 255, 0.15)',
      borderColor: 'border-cyan-500/30',
      textColor: 'text-cyan-400',
      questions: 20,
      topics: ['Hooks', 'Redux', 'JSX', 'Virtual DOM', 'Components', 'State'],
      difficulty: 'Beginner → Advanced'
    },
    {
      id: 'backend',
      title: 'Backend',
      subtitle: 'Full-Stack Interview Guide',
      description: 'Complete backend development coverage including JavaScript, Node.js, Express.js, and MongoDB.',
      icon: Server,
      gradient: 'from-purple-500 to-pink-600',
      glowColor: 'rgba(168, 85, 247, 0.15)',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      questions: 75,
      topics: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'APIs', 'Async'],
      difficulty: 'Beginner → Expert'
    }
  ];

  const features = [
    { icon: Search, title: 'Smart Search', description: 'Find any question instantly', color: 'text-cyan-400' },
    { icon: Zap, title: 'Interactive Q&A', description: 'Click to reveal detailed answers', color: 'text-yellow-400' },
    { icon: Target, title: 'Category Filter', description: 'Focus on specific technologies', color: 'text-green-400' },
    { icon: TrendingUp, title: 'PDF Export', description: 'Download all Q&A as clean PDF', color: 'text-pink-400' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-900">
      {/* ===== HERO SECTION ===== */}
      <div className="relative overflow-hidden grid-bg">
        {/* Gradient orbs */}
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
          {/* Terminal-style badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-dark-700 border border-dark-500 rounded-full px-4 py-2 mb-8"
          >
            <Terminal className="w-4 h-4 text-accent-cyan" />
            <span className="font-mono text-sm text-gray-400">~/interview-prep</span>
            <span className="text-accent-green font-mono text-sm">ready</span>
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight"
          >
            <span className="text-white">Ace Your </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink">
              Tech Interview
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Curated questions & expert answers for
            <span className="text-accent-cyan font-semibold"> Frontend</span> &
            <span className="text-accent-purple font-semibold"> Backend</span> developers
          </motion.p>

          {/* Stats pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-4"
          >
            {[
              { label: '100+ Questions', icon: '📚' },
              { label: '6+ Technologies', icon: '⚡' },
              { label: 'Free & Open', icon: '🔓' },
              { label: 'PDF Export', icon: '📄' }
            ].map((pill, i) => (
              <div key={i} className="flex items-center gap-2 bg-dark-700/80 border border-dark-500 px-4 py-2 rounded-lg text-sm">
                <span>{pill.icon}</span>
                <span className="text-gray-300 font-medium">{pill.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== GUIDE CARDS + ADD QUESTION CARD ===== */}
      <div className="flex-grow max-w-6xl mx-auto px-6 -mt-20 relative z-10 w-full">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            const isHovered = hoveredCard === guide.id;

            return (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                onMouseEnter={() => setHoveredCard(guide.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onNavigate(guide.id)}
                className="cursor-pointer group"
              >
                <div className={`relative bg-dark-700 rounded-2xl border ${guide.borderColor} overflow-hidden transition-all duration-500 ${
                  isHovered ? 'border-opacity-80 shadow-2xl' : 'border-opacity-30'
                }`}
                  style={isHovered ? { boxShadow: `0 0 40px ${guide.glowColor}` } : {}}
                >
                  {/* Card gradient header */}
                  <div className={`bg-gradient-to-r ${guide.gradient} p-6 relative`}>
                    <motion.div
                      animate={isHovered ? { scale: 1.3, rotate: 20 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full"
                    />
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <Icon className="w-8 h-8 text-white" />
                          <h2 className="text-2xl font-black text-white">{guide.title}</h2>
                        </div>
                        <p className="text-white/70 text-sm font-medium">{guide.subtitle}</p>
                      </div>
                      <motion.div
                        animate={isHovered ? { x: 5 } : { x: 0 }}
                        className="bg-white/20 backdrop-blur-sm p-3 rounded-xl"
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">{guide.description}</p>

                    {/* Stats row */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-dark-800 rounded-xl p-3 text-center border border-dark-500">
                        <div className={`text-2xl font-black ${guide.textColor}`}>{guide.questions}</div>
                        <div className="text-xs text-gray-500 mt-0.5 font-medium">Questions</div>
                      </div>
                      <div className="bg-dark-800 rounded-xl p-3 text-center border border-dark-500">
                        <div className={`text-sm font-bold ${guide.textColor}`}>{guide.difficulty}</div>
                        <div className="text-xs text-gray-500 mt-0.5 font-medium">Level</div>
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.map((topic, idx) => (
                        <span key={idx} className="px-3 py-1 bg-dark-800 border border-dark-500 rounded-lg text-xs text-gray-400 font-mono">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* ===== ADD QUESTION CARD ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onMouseEnter={() => setHoveredCard('add')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setShowAddModal(true)}
            className="cursor-pointer group"
          >
            <div className={`relative bg-dark-700 rounded-2xl border border-emerald-500/30 overflow-hidden transition-all duration-500 h-full flex flex-col ${
              hoveredCard === 'add' ? 'border-opacity-80 shadow-2xl' : 'border-opacity-30'
            }`}
              style={hoveredCard === 'add' ? { boxShadow: '0 0 40px rgba(16, 185, 129, 0.15)' } : {}}
            >
              {/* Card gradient header */}
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-6 relative">
                <motion.div
                  animate={hoveredCard === 'add' ? { scale: 1.3, rotate: 20 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full"
                />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <Plus className="w-8 h-8 text-white" />
                      <h2 className="text-2xl font-black text-white">Add New</h2>
                    </div>
                    <p className="text-white/70 text-sm font-medium">Contribute a Question</p>
                  </div>
                  <motion.div
                    animate={hoveredCard === 'add' ? { rotate: 90 } : { rotate: 0 }}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-xl"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    Add your own interview questions & answers. Choose frontend or backend, pick a category, and contribute.
                  </p>

                  {/* Visual tags */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-dark-800 rounded-xl p-3 text-center border border-dark-500">
                      <div className="text-lg font-black text-emerald-400">🎨</div>
                      <div className="text-xs text-gray-500 mt-0.5 font-medium">Frontend</div>
                    </div>
                    <div className="bg-dark-800 rounded-xl p-3 text-center border border-dark-500">
                      <div className="text-lg font-black text-emerald-400">⚙️</div>
                      <div className="text-xs text-gray-500 mt-0.5 font-medium">Backend</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'MongoDB'].map((topic, idx) => (
                    <span key={idx} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs text-emerald-400 font-mono">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== FEATURES ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-2">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">Developers</span>
            </h2>
            <p className="text-gray-500">Everything you need to crush your next technical interview</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-dark-700 border border-dark-500 rounded-xl p-6 text-center group hover:border-dark-500/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-dark-800 border border-dark-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===== HOW TO ADD QUESTIONS TIP ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-dark-700 border border-accent-cyan/20 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-cyan/5 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-accent-cyan" />
                <span className="font-mono text-sm text-accent-cyan font-semibold">{'// ADD NEW QUESTIONS (DATABASE)'}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Want to contribute new questions?</h3>
              <p className="text-gray-400 mb-4 max-w-2xl">
                Use the <span className="text-emerald-400 font-semibold">"Add New"</span> card above to open the contribution modal. Questions will be saved directly to your MongoDB database.
              </p>
              <div className="bg-dark-900 rounded-xl p-4 font-mono text-sm overflow-x-auto border border-dark-500">
                <p className="text-gray-500">{'// Add to Database (Real-time):'}</p>
                <p className="text-accent-green">1. Click the "Add New" card</p>
                <p className="text-accent-green">2. Fill the form (Markdown supported for answers)</p>
                <p className="text-accent-green">3. Submit to save to MongoDB Database</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== STATS BANNER ===== */}
      <div className="border-t border-b border-dark-500 bg-dark-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: '100+', label: 'Questions', color: 'text-accent-cyan' },
              { value: '6+', label: 'Technologies', color: 'text-accent-purple' },
              { value: '100%', label: 'Free Access', color: 'text-accent-green' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: 'spring' }}
              >
                <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Add Question Modal */}
      <AddQuestionModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSuccess={() => setShowAddModal(false)}
      />
    </div>
  );
};

export default InterviewGuideHome;