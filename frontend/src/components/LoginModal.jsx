import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, User, Eye, EyeOff, Terminal, Loader2 } from 'lucide-react';
import { adminLogin } from '../api/questionApi';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { token, user } = await adminLogin({ username, password });
      localStorage.setItem('admin_token', token);
      localStorage.setItem('admin_user', JSON.stringify(user));
      onLoginSuccess();
      onClose();
      setUsername('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-md pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 rounded-2xl blur-xl" />

              {/* Card */}
              <div className="relative bg-dark-800 border border-dark-500 rounded-2xl overflow-hidden">
                {/* Header stripe */}
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-5 relative">
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-black text-white">Admin Login</h2>
                        <p className="text-white/70 text-xs font-mono">Restricted access</p>
                      </div>
                    </div>
                    <button
                      onClick={handleClose}
                      className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Terminal label */}
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                    <span className="font-mono text-xs text-gray-500">
                      authenticate --scope admin
                    </span>
                  </div>

                  {/* Error banner */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm font-mono"
                      >
                        ✗ {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Username */}
                  <div>
                    <label className="block text-xs text-gray-500 font-mono mb-1.5 uppercase tracking-wider">
                      Username
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input
                        id="admin-username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="admin"
                        required
                        autoComplete="username"
                        className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-500 rounded-xl text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-accent-cyan/60 focus:shadow-[0_0_12px_rgba(0,212,255,0.1)] transition-all font-mono text-sm"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-xs text-gray-500 font-mono mb-1.5 uppercase tracking-wider">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input
                        id="admin-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        autoComplete="current-password"
                        className="w-full pl-10 pr-10 py-3 bg-dark-700 border border-dark-500 rounded-xl text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-accent-cyan/60 focus:shadow-[0_0_12px_rgba(0,212,255,0.1)] transition-all font-mono text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    id="admin-login-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Authenticating...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        Login as Admin
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
