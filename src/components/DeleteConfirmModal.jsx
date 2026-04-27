import React from 'react';
import { Trash2, X, AlertTriangle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, loading, questionText }) => {
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-dark-700 border border-dark-500 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 text-center">
              {/* Warning icon */}
              <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Delete Question?</h3>
              <p className="text-gray-400 text-sm mb-2">This action cannot be undone.</p>
              {questionText && (
                <p className="text-gray-500 text-xs font-mono bg-dark-800 px-3 py-2 rounded-lg mt-3 truncate border border-dark-500">
                  "{questionText}"
                </p>
              )}

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={onClose}
                  disabled={loading}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-dark-800 border border-dark-500 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:border-gray-500 transition-all"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  disabled={loading}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-500/20 border border-red-500/40 rounded-xl text-sm font-bold text-red-400 hover:bg-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Trash2 className="w-4 h-4" />
                  )}
                  {loading ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeleteConfirmModal;
