import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactOption {
  icon: string;
  label: string;
  method: string;
}

const contactOptions: ContactOption[] = [
  { icon: '📞', label: 'Give Me a Call', method: 'call' },
  { icon: '💬', label: 'Send a Message', method: 'message' },
  { icon: '📸', label: 'DM on Instagram', method: 'instagram' },
  { icon: '☕', label: 'Meet For Coffee', method: 'coffee' },
  { icon: '📝', label: 'Write You a Letter', method: 'letter' },
];

const messages: Record<string, string> = {
  'call': '📞 Call me whenever you\'re ready. I\'ll be waiting!',
  'message': '💬 Feel free to message me anytime. I\'m always listening.',
  'instagram': '📸 Slide into my DMs, let\'s talk things through.',
  'coffee': '☕ Let\'s grab coffee and talk face-to-face?',
  'letter': '📝 I\'ll write you something heartfelt. Trust me.',
};

export const ContactPage: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = async (method: string) => {
    setSelected(method);
    setSubmitted(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(messages[method] + '\n\n❤️ Waiting to hear from you...');
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-black flex items-center justify-center p-4"
    >
      <motion.div
        whileHover={{ boxShadow: '0 0 50px rgba(255,0,110,0.3)' }}
        className="bg-slate-800/30 border-2 border-pink-500 rounded-xl p-12 w-full max-w-2xl backdrop-blur-xl"
      >
        <h2 className="text-4xl font-bold text-pink-400 mb-6 text-center">Let's Talk</h2>
        <p className="text-gray-400 text-center mb-12">
          Choose how you'd like to reach out or receive my message
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactOptions.map((option, index) => (
            <motion.button
              key={option.method}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(option.method)}
              disabled={submitted}
              className="relative p-6 border-2 border-cyan-400 rounded-lg text-left hover:border-pink-500 hover:bg-pink-500/10 transition-all disabled:opacity-50 flex items-center gap-4"
            >
              <span className="text-3xl">{option.icon}</span>
              <div className="flex-1">
                <span className="font-bold text-cyan-300 block">{option.label}</span>
              </div>
              
              {selected === option.method && (
                <motion.div
                  layoutId="check"
                  className="text-2xl"
                >
                  ✓
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {submitted && selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-green-500/20 border-l-4 border-green-500 rounded text-green-400 text-center"
          >
            ✓ Message recorded! I'm waiting to hear from you... 💫
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
