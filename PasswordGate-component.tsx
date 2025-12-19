import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageStore } from '@/store/pageStore';
import { Eye, EyeOff } from 'lucide-react';

export const PasswordGate: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const { goToPage } = usePageStore();

  const hints = [
    '🔓 Wrong password! Think of someone special 😉',
    '❌ Nope! Is it someone whose name starts with S? 🤔',
    '🚫 Getting closer? Think of her name... 💫',
    '🔒 Come on! You know her! ✨',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === 'shreya') {
      goToPage(3);
      setError('');
    } else {
      setError(hints[Math.min(attempts, hints.length - 1)]);
      setAttempts(attempts + 1);
      setPassword('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-black flex items-center justify-center p-4"
    >
      <motion.div
        whileHover={{ boxShadow: '0 0 50px rgba(0,212,255,0.3)' }}
        className="bg-slate-800/30 border-2 border-cyan-400 rounded-xl p-12 w-full max-w-md backdrop-blur-xl"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Access Required</h2>
        <p className="text-gray-400 mb-8">Enter the secret code to continue...</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <label className="block text-sm text-gray-400 mb-3 font-mono">
              username / secret key:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900/50 border-2 border-cyan-400 rounded-lg text-white font-mono focus:outline-none focus:border-pink-500 focus:shadow-lg transition-all"
                placeholder="Enter password"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="mb-6 p-4 bg-red-500/20 border-l-4 border-red-500 rounded text-red-400 font-mono text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Unlock 🔓
          </motion.button>
        </form>

        <p className="mt-8 text-center text-xs text-gray-500">
          💡 Hint: Think of someone special... 💭
        </p>
      </motion.div>
    </motion.div>
  );
};
