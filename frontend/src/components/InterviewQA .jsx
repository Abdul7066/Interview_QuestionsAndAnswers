import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Code, ArrowLeft, Download, Edit2, Trash2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReactToPrint } from 'react-to-print';
import { renderMarkdown } from '../utils/markdownRenderer';
import { getAllQuestions, deleteQuestion } from '../api/questionApi';
import AddQuestionModal from './AddQuestionModal';
import DeleteConfirmModal from './DeleteConfirmModal';
import Footer from './Footer';

const InterviewQA = ({ onBack }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [questionsData, setQuestionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const contentToPrint = useRef(null);

  // Modal states
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Fetch questions from API
  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const data = await getAllQuestions('frontend');
      setQuestionsData(data);
      setError('');
    } catch (err) {
      setError('Failed to load questions. Make sure the backend server is running.');
      // Fallback to static JSON
      try {
        const staticData = require('../data/frontendQuestions.json');
        setQuestionsData(staticData);
      } catch {
        setQuestionsData([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: contentToPrint,
    documentTitle: 'Frontend_Interview_Questions',
  });

  const filteredQuestions = questionsData.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Edit handler
  const handleEdit = (e, item) => {
    e.stopPropagation();
    setEditData(item);
    setShowEditModal(true);
  };

  // Delete handler
  const handleDeleteClick = (e, item) => {
    e.stopPropagation();
    setDeleteTarget(item);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try {
      await deleteQuestion(deleteTarget._id);
      setQuestionsData((prev) => prev.filter((q) => q._id !== deleteTarget._id));
      setShowDeleteModal(false);
      setDeleteTarget(null);
    } catch (err) {
      console.error('Delete failed:', err);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-900">
      {/* ===== HEADER ===== */}
      <div className="relative overflow-hidden border-b border-dark-500">
        <div className="absolute top-[-100px] left-[-50px] w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Back Button */}
          {onBack && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onBack}
              className="mb-6 flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors font-mono text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>cd ~/home</span>
            </motion.button>
          )}

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-black text-white">React.js Interview Guide</h1>
                  <p className="text-sm text-gray-500 font-mono">{questionsData.length} questions • Frontend</p>
                </div>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => handlePrint()}
              className="flex items-center gap-2 px-5 py-2.5 bg-dark-700 border border-dark-500 rounded-xl text-sm font-semibold text-gray-300 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Get PDF
            </motion.button>
          </div>
        </div>
      </div>

      {/* ===== SEARCH ===== */}
      <div className="max-w-4xl mx-auto w-full px-6 py-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 w-4 h-4" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-accent-cyan/50 focus:shadow-[0_0_10px_rgba(0,212,255,0.1)] transition-all font-mono text-sm"
          />
          {searchTerm && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-mono">
              {filteredQuestions.length} found
            </span>
          )}
        </div>
      </div>

      {/* ===== API ERROR BANNER ===== */}
      {error && (
        <div className="max-w-4xl mx-auto w-full px-6">
          <div className="px-4 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400 text-sm mb-4 font-mono">
            ⚠️ {error} — Showing offline data.
          </div>
        </div>
      )}

      {/* ===== LOADING STATE ===== */}
      {loading && (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-accent-cyan mx-auto mb-3" />
            <p className="text-gray-500 font-mono text-sm">Loading questions...</p>
          </div>
        </div>
      )}

      {/* ===== QUESTIONS ===== */}
      {!loading && (
        <div className="flex-grow max-w-4xl mx-auto px-6 pb-12 w-full">
          <div className="space-y-3">
            {filteredQuestions.map((item, index) => (
              <motion.div
                key={item._id || item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.5) }}
                className={`bg-dark-700 rounded-xl border transition-all duration-300 ${
                  expandedId === (item._id || item.id)
                    ? 'border-accent-cyan/40 shadow-[0_0_20px_rgba(0,212,255,0.08)]'
                    : 'border-dark-500 hover:border-dark-500/80'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(item._id || item.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="flex-shrink-0 w-7 h-7 bg-dark-800 border border-dark-500 rounded-lg flex items-center justify-center font-mono text-xs text-accent-cyan font-bold">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-gray-200 text-sm leading-relaxed truncate group-hover:text-white transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                    {/* Edit button */}
                    {item._id && (
                      <div
                        onClick={(e) => handleEdit(e, item)}
                        className="p-1.5 rounded-lg hover:bg-accent-cyan/10 text-gray-600 hover:text-accent-cyan transition-all opacity-0 group-hover:opacity-100"
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                    {/* Delete button */}
                    {item._id && (
                      <div
                        onClick={(e) => handleDeleteClick(e, item)}
                        className="p-1.5 rounded-lg hover:bg-red-500/10 text-gray-600 hover:text-red-400 transition-all opacity-0 group-hover:opacity-100"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <motion.div
                      animate={{ rotate: expandedId === (item._id || item.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className={`w-4 h-4 ${expandedId === (item._id || item.id) ? 'text-accent-cyan' : 'text-gray-600'}`} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === (item._id || item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1">
                        <div className="pl-10 text-sm leading-relaxed border-l-2 border-accent-cyan/20 ml-0.5">
                          {renderMarkdown(item.answer)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredQuestions.length === 0 && !loading && (
            <div className="text-center py-16">
              <p className="text-gray-600 font-mono text-sm">No questions found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      )}

      {/* ===== HIDDEN PRINT LAYOUT ===== */}
      <div className="hidden">
        <div ref={contentToPrint} className="print-container p-8" style={{ fontFamily: 'Inter, sans-serif', background: 'white', color: 'black' }}>
          <div className="text-center mb-8 border-b-2 border-gray-200 pb-4">
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#111' }}>React.js Interview Guide</h1>
            <p style={{ color: '#666', marginTop: '4px' }}>Total Questions: {questionsData.length}</p>
          </div>
          {questionsData.map((item, index) => (
            <div key={item._id || item.id} style={{ marginBottom: '20px', padding: '16px', border: '1px solid #e5e5e5', borderRadius: '8px', pageBreakInside: 'avoid' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: '#111' }}>Q{index + 1}: {item.question}</h3>
              <p style={{ fontSize: '14px', color: '#444', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.answer}</p>
            </div>
          ))}
          <div style={{ marginTop: '32px', paddingTop: '16px', borderTop: '1px solid #e5e5e5', textAlign: 'center', color: '#999', fontSize: '12px' }}>
            Downloaded from InterviewPrep.dev
          </div>
        </div>
      </div>

      <Footer />

      {/* Edit Modal */}
      <AddQuestionModal
        isOpen={showEditModal}
        onClose={() => { setShowEditModal(false); setEditData(null); }}
        editData={editData}
        onSuccess={() => {
          setShowEditModal(false);
          setEditData(null);
          fetchQuestions();
        }}
      />

      {/* Delete Modal */}
      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => { setShowDeleteModal(false); setDeleteTarget(null); }}
        onConfirm={handleDeleteConfirm}
        loading={deleteLoading}
        questionText={deleteTarget?.question}
      />
    </div>
  );
};

export default InterviewQA;