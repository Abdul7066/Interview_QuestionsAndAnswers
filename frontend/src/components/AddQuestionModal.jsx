import React, { useState, useEffect } from 'react';
import { X, Send, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createQuestion, updateQuestion } from '../api/questionApi';

const AddQuestionModal = ({ isOpen, onClose, onSuccess, editData = null }) => {
  const [formData, setFormData] = useState({
    type: 'frontend',
    category: 'react',
    question: '',
    answer: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const isEditMode = !!editData;

  // Category options based on type
  const categoryOptions = {
    frontend: [
      { value: 'react', label: 'React.js' },
      { value: 'html', label: 'HTML' },
      { value: 'css', label: 'CSS' },
    ],
    backend: [
      { value: 'javascript', label: 'JavaScript' },
      { value: 'nodejs', label: 'Node.js' },
      { value: 'express', label: 'Express.js' },
      { value: 'mongodb', label: 'MongoDB' },
    ],
  };

  // Pre-fill form if editing
  useEffect(() => {
    if (editData) {
      setFormData({
        type: editData.type || 'frontend',
        category: editData.category || 'react',
        question: editData.question || '',
        answer: editData.answer || '',
      });
    } else {
      setFormData({
        type: 'frontend',
        category: 'react',
        question: '',
        answer: '',
      });
    }
    setError('');
    setSuccess('');
  }, [editData, isOpen]);

  // Reset category when type changes (only in create mode)
  useEffect(() => {
    if (!isEditMode) {
      const firstCat = categoryOptions[formData.type]?.[0]?.value || '';
      setFormData((prev) => ({ ...prev, category: firstCat }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.type, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!formData.question.trim()) {
      setError('Please enter a question');
      return;
    }
    if (!formData.answer.trim()) {
      setError('Please enter an answer');
      return;
    }

    setLoading(true);
    try {
      if (isEditMode) {
        await updateQuestion(editData._id, formData);
        setSuccess('Question updated successfully!');
      } else {
        await createQuestion(formData);
        setSuccess('Question added successfully!');
      }

      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 1200);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-dark-700 border border-dark-500 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header gradient */}
            <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 p-5 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-white">
                    {isEditMode ? '✏️ Edit Question' : '➕ Add New Question'}
                  </h2>
                  <p className="text-white/70 text-sm mt-0.5">
                    {isEditMode ? 'Update the question and answer' : 'Add to your interview prep collection'}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-white/20 backdrop-blur-sm p-2 rounded-xl hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Type & Category row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                    Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-dark-800 border border-dark-500 rounded-xl text-gray-200 text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="frontend">🎨 Frontend</option>
                    <option value="backend">⚙️ Backend</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-dark-800 border border-dark-500 rounded-xl text-gray-200 text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors appearance-none cursor-pointer"
                  >
                    {categoryOptions[formData.type]?.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Question input */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                  Question
                </label>
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. What is the difference between useState and useReducer?"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-500 rounded-xl text-gray-200 text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
                />
              </div>

              {/* Answer input */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                  Answer
                  <span className="ml-2 text-gray-600 normal-case tracking-normal font-normal">
                    (supports **bold** and `code` markdown)
                  </span>
                </label>
                <textarea
                  name="answer"
                  value={formData.answer}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write a detailed answer here. You can use **bold**, `code`, and \n for line breaks..."
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-500 rounded-xl text-gray-200 text-sm placeholder:text-gray-600 focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none font-mono"
                />
              </div>

              {/* Error / Success messages */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{success}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading || success}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  loading || success
                    ? 'bg-dark-600 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:-translate-y-0.5'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {isEditMode ? 'Updating...' : 'Adding...'}
                  </>
                ) : success ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Done!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {isEditMode ? 'Update Question' : 'Add Question'}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddQuestionModal;
