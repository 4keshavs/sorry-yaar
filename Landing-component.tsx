import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePageStore } from '@/store/pageStore';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export const Landing: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { goToPage } = usePageStore();

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating Particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: particle.delay,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="text-center z-10 px-4">
        {/* Pulsing Code Brackets */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-8 text-cyan-400 font-bold drop-shadow-2xl"
        >
          &lt; &gt;
        </motion.div>

        {/* Gradient Title */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
          I'm Sorry
        </h1>

        <p className="text-xl text-gray-400 mb-8 max-w-lg">
          A special message for someone special
        </p>

        {/* CS Statement */}
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.5)' }}
          className="bg-slate-800/50 border-2 border-cyan-400 rounded-lg p-8 mb-12 max-w-2xl mx-auto backdrop-blur-sm"
        >
          <p className="text-lg text-cyan-300 font-mono">
            💻 Since you're a computer science student, so this is my CS way 💻
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            "Because love is the ultimate algorithm, and I'd like to debug our relationship together."
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.8)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => goToPage(2)}
          className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold rounded-lg hover:shadow-xl transition-all text-lg"
        >
          Enter ➜
        </motion.button>
      </div>
    </motion.div>
  );
};
