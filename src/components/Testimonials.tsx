import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
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
        ease: "easeOut" as any
      }
    }
  };

  return (
    <section className="w-full py-20 bg-[#F8F9FA] dark:bg-slate-900 px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#1A293C] dark:text-white mb-16"
        >
          What Our Users Say
        </motion.h2>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {/* Testimonial Card Factory */}
          {[
            { name: "Emily R", loc: "USA", text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!" },
            { name: "Amit K", loc: "India", text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online." },
            { name: "Sophie M", loc: "UK", text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!" },
            { name: "Javier L", loc: "Spain", text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand." },
            { name: "Lucas T", loc: "Brazil", text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!" },
            { name: "Nora S", loc: "Canada", text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense." }
          ].map((user, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              /* 🌟 Added Hover Effects Below:
                 - hover:-translate-y-2 (Upar uthne ke liye)
                 - hover:shadow-2xl (Gahri shadow ke liye)
                 - hover:border-[#FF5349]/30 (Halka red border)
              */
              className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:border-[#FF5349]/30"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-4 text-[#FFB800]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                  "{user.text}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#FF5349]">
                  <img src={`https://i.pravatar.cc/150?u=${user.name}`} alt={user.name} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A293C]">{user.name}</h4>
                  <p className="text-xs text-gray-400 font-semibold">{user.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <button
            className="px-10 py-3 border-2 border-[#FF5349] text-[#FF5349] font-bold rounded-xl hover:bg-[#FF5349] hover:text-white transition-all duration-300 active:scale-95"
            aria-label="See more testimonials"
          >
            See More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;