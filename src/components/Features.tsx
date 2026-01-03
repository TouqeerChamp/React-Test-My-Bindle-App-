import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full pt-[180px] pb-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-6 text-[#1A293C] dark:text-white"
        >
          Features That Keep You Hooked!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-center font-bold mb-16 text-[#525252] dark:text-gray-300"
        >
          Meet, Chat, Share – Anytime, Anywhere!
        </motion.p>

        {/* 3-column grid for features with interactive hover effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "🔥 Seamless Connections", desc: "Stay in touch with friends, family, and like-minded people with just a tap." },
            { title: "📸 Share Your Story", desc: "Upload photos, videos, and updates to let the world know what's happening in your life." },
            { title: "💬 Real-Time Chat", desc: "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging." },
            { title: "🔒 Privacy First", desc: "Your data, your control. We prioritize your privacy with world-class security." },
            { title: "🌎 Discover & Explore", desc: "Find trending content, join communities, and follow pages that match your interests." },
            { title: "💼 Grow Your Business", desc: "Use our platform to market your brand, connect with customers, and build meaningful relationships." }
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-[24px] shadow-lg p-8 text-center
                         border border-transparent transition-all duration-300
                         hover:shadow-2xl hover:-translate-y-2 hover:border-[#FF5349]/20
                         cursor-default group"
            >
              <h3 className="text-2xl font-bold text-[#1A293C] mb-4 group-hover:text-[#FF5349] transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;