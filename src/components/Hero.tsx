import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[1000px] bg-[#FF5349] flex items-center">

      {/* Logo - Top Center */}
      <div className="absolute top-[50px] left-1/2 -translate-x-1/2 z-50">
        <img
          src="https://c.animaapp.com/mjwquqmqYt5wjp/img/group-12.png"
          alt="MyBindle Logo"
          className="w-[318px]"
        />
      </div>

      {/* Left Content Area */}
      <div className="relative z-10 text-white ml-[70px] max-w-[850px]">
        <h1 className="text-[85px] font-bold leading-[110px] tracking-tighter">
          Stay Connected <br /> Stay Social <br /> Stay You!
        </h1>
        <p className="mt-8 text-[18px] opacity-90 leading-[30px] max-w-[600px]">
          A place where friendships grow, communities thrive, and moments turn into unforgettable experiences...
        </p>
        <button
          className="mt-12 px-14 py-5 bg-white text-[#FF5349] text-[22px] font-bold rounded-[20px] shadow-2xl hover:scale-105 transition-transform active:scale-95"
          aria-label="Get Started"
        >
          Get Started
        </button>
      </div>

      {/* 📱 Phone Mockup - Positioning adjusted to pop out of the bottom */}
      <div className="absolute top-[280px] left-[850px] z-20">
        <img
          src="https://c.animaapp.com/mjwquqmqYt5wjp/img/group-1.png"
          alt="Phone"
          className="w-[450px] h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.4)]"
        />
      </div>

      {/* 🏷️ Top Badge */}
      <div className="absolute top-[325px] left-[720px] z-30 bg-white px-7 py-6 rounded-[10px] shadow-2xl flex items-center gap-3">
        <span className="text-2xl">🔥</span>
        <span className="text-[#1A293C] font-bold text-[24px]">Seamless Connections</span>
      </div>

      {/* 🏷️ Bottom Badge - Niche wale section ke upar float karega */}
      <div className="absolute top-[850px] left-[1000px] z-40 bg-white px-7 py-6 rounded-[10px] shadow-2xl flex items-center gap-3">
        <span className="text-2xl">🌎</span>
        <span className="text-[#1A293C] font-bold text-[24px]">Discover & Explore</span>
      </div>

    </section>
  );
};

export default Hero;