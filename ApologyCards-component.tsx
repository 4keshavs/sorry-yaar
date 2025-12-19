import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Card {
  id: number;
  title: string;
  code: string;
  message: string;
}

const cardsData: Card[] = [
  {
    id: 1,
    title: 'I Realized My Mistake',
    code: `// TODO: Stop being an idiot
// Priority: CRITICAL
// Assigned to: Me`,
    message: 'I know I messed up, and I\'m working on a patch update for myself. You deserve so much better than how I acted. 🔧',
  },
  {
    id: 2,
    title: 'Every Moment Missing You',
    code: `git commit -m "I'm truly sorry"
git push origin my-heart`,
    message: 'Every moment without talking to you feels like an infinite loop I can\'t break out of. I miss our conversations so much.',
  },
  {
    id: 3,
    title: 'You\'re My Exception',
    code: `while(alive) {
  miss_you();
  think_about_you();
}`,
    message: 'You\'re the only exception in my error-free code of life. Without you, nothing compiles the way it should. 💕',
  },
  {
    id: 4,
    title: 'Promise to Be Better',
    code: `try {
  hurt_you();
} catch (mistake) {
  apologize(deeply);
  promise(toBeBetter);
}`,
    message: 'I caught my mistake, and I promise to handle it better next time. Please give me the chance to prove it.',
  },
  {
    id: 5,
    title: 'Missing You Constantly',
    code: `console.log("I miss you");
console.log("Every single day");
console.log("More than you know");`,
    message: 'My days don\'t compile properly without you in them. You bring meaning to everything I do.',
  },
  {
    id: 6,
    title: 'You\'re My True Condition',
    code: `if (you.forgive(me)) {
  happiness = true;
  smile = restored;
  heart = complete;
}`,
    message: 'You\'re the only condition that makes my life return true. Without your forgiveness, I\'m stuck in an endless error state. ❤️',
  },
  {
    id: 7,
    title: 'Bug Report: My Heart',
    code: `// Bug Report #001
// Issue: Brain wasn't connected
// to heart
// Status: Fixing immediately`,
    message: 'I\'ve identified the issue and I\'m deploying a fix immediately! I should have thought about your feelings first.',
  },
  {
    id: 8,
    title: 'Give Me One More Chance',
    code: `import { SecondChance } from 'please';
import { Forgiveness } from 'hope';
await SecondChance.request();`,
    message: 'I\'m hoping you\'ll give me one more chance to make things right. I\'ll do whatever it takes.',
  },
  {
    id: 9,
    title: 'You\'re My Only Export',
    code: `function myHeart() {
  return "only beats for you";
}
export default myHeart;`,
    message: 'You\'re not just in my thoughts, you\'re in every line of my code. My heart has been exported only to you. 💗',
  },
  {
    id: 10,
    title: 'Final Commit: I Promise',
    code: `// Final commit message:
// "I promise to be better"
//
// Signed-off-by: Someone who
// truly cares about you ❤️`,
    message: 'I\'ll debug every flaw in myself if it means seeing your smile again. You mean everything to me, Shreya.',
  },
];

export const ApologyCards: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 to-black py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Why You Should Forgive Me
          </h2>
          <p className="text-gray-400 text-lg">10 reasons + a few more in my heart...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card) => (
            <motion.div
              key={card.id}
              layout
              className="bg-slate-800/30 border-2 border-cyan-400 rounded-lg overflow-hidden backdrop-blur-sm cursor-pointer hover:border-pink-500 transition-all"
              onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
            >
              <motion.div
                className="p-5 flex justify-between items-center hover:bg-cyan-400/10 transition-colors"
                layout
              >
                <h3 className="text-lg font-bold text-cyan-300">{card.title}</h3>
                <motion.div
                  animate={{ rotate: expandedId === card.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-pink-500" size={24} />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {expandedId === card.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t-2 border-cyan-400">
                      <pre className="p-5 bg-slate-900/50 text-green-400 font-mono text-sm overflow-x-auto border-b-2 border-cyan-400 whitespace-pre-wrap">
                        {card.code}
                      </pre>
                      <p className="p-5 text-gray-300 leading-relaxed">{card.message}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
