import React from 'react';

const Connection: React.FC = () => {
  return (
    <section className="relative w-full py-28 bg-[#F8F9FA] dark:bg-slate-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col lg:flex-row items-center gap-10">

        {/* 📱 CONNECTION VISUALS - Fixed Circle & Phone Scaling */}
        <div className="relative w-full lg:w-1/2 h-[650px] flex justify-center items-center">

          {/* 🔴 Red Decorative Circle - Position fixed to be visible */}
          <div className="absolute w-[500px] h-[500px] bg-[#FF5349] rounded-full z-0 left-[1%] opacity-100"></div>

          {/* 📱 Left Phone - Size reduced to 260px (smaller than right phone) */}
          <div className="absolute z-10 -rotate-[15deg] left-0 translate-y-2 ml-5 mb-25">
            <img
              src="https://c.animaapp.com/mjwquqmqYt5wjp/img/group-1.png"
              alt="Phone Left"
              className="w-[240px] drop-shadow-2xl"
            />
          </div>

          {/* 📱 Right Phone - Main focus, larger size */}
          <div className="absolute z-20 rotate-[20deg] left-[220px] -translate-y-8 mt-25">
            <img
              src="https://c.animaapp.com/mjwquqmqYt5wjp/img/group-1.png"
              alt="Phone Right"
              className="w-[340px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.3)] border-[6px] border-white/10 rounded-[45px]"
            />
          </div>

        </div>

        {/* Right Column: Actual Interactive Buttons */}
        <div className="w-full lg:w-1/2 space-y-10 z-30">
          <div className="space-y-4 text-left">
            <h2 className="text-[58px] font-extrabold text-[#1A293C] dark:text-white leading-[1.1] tracking-tight">
              Where Every Click <br /> Sparks a Connection!
            </h2>
            <p className="text-[19px] text-gray-500 dark:text-gray-300 leading-relaxed max-w-[500px]">
              A small act of kindness today can create a lifetime of impact for someone in need.
            </p>
          </div>

          {/* Feature Buttons */}
          <div className="flex flex-col gap-5">
            {[
              { icon: '📹', title: 'Short Videos & Reels', desc: 'Share engaging, bite-sized content that keeps everyone entertained.' },
              { icon: '🔔', title: 'Smart Notifications', desc: 'Stay updated on what matters without the noise.' },
              { icon: '👥', title: 'Interest-Based Communities', desc: 'Join groups and discussions that match your passion.' }
            ].map((item, index) => (
              <button
                key={index}
                className="group w-full text-left bg-white dark:bg-gray-800 p-7 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                           flex items-start gap-6 border border-gray-100 dark:border-gray-700
                           hover:border-[#FF5349] hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300 cursor-pointer outline-none"
                aria-label={item.title}
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <div>
                  <h4 className="text-[22px] font-bold text-[#1A293C] dark:text-white mb-1 group-hover:text-[#FF5349] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-[16px] leading-snug">
                    {item.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Connection;