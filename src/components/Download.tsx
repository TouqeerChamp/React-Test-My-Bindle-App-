import React from 'react';

const Download: React.FC = () => {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-[#F8F9FA] dark:bg-slate-900">
      {/* Section width barha kar 1400px kar di */}
      <div className="max-w-[1400px] mx-auto bg-[#FF5349] rounded-[40px] flex flex-col lg:flex-row items-end relative overflow-hidden shadow-2xl px-10 pt-10 lg:px-20 lg:pt-16 h-auto lg:h-[480px]">

        {/* Left Side: Your Heading & Paragraph (Kept Same) */}
        <div className="w-full lg:w-[55%] z-20 text-white space-y-1 pb-12 lg:pb-24 self-center">
          <h2 className="text-[40px] md:text-[62px] font-bold leading-[1.0] tracking-tighter w-full text-white">
            Join the Fun – Download <br className="hidden md:block" /> MyBindle Now!
          </h2>

          <p className="text-[16px] md:text-[18px] text-white opacity-90 leading-tight max-w-[320px] pt-4 pb-6">
            Your Social Network, Your Way. Download MyBindle Now and Be a Part of a Community That's Always Evolving!
          </p>

          <div className="flex flex-row gap-4 pt-2">
            <img
              src="./App Store.png"
              alt="App Store"
              className="h-14 md:h-16 cursor-pointer hover:scale-105 transition-transform"
            />
            <img
              src="./Play Store.png"
              alt="Play Store"
              className="h-14 md:h-16 cursor-pointer hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Right Side: Correctly Sized Large Images */}
        <div className="w-full lg:w-[45%] flex flex-row justify-end items-end gap-3 md:gap-5 -mb-4">

          {/* Back Phone */}
          <div className="flex justify-center items-end translate-y-6">
            <img
              src="./Body1.png"
              alt="Mockup 1"
              className="w-full max-w-[220px] md:max-w-[310px] h-auto rounded-t-[35px] shadow-2xl mb-9"
            />
          </div>

          {/* Front Phone */}
          <div className="flex justify-center items-end translate-y-4">
            <img
              src="./Body2.png"
              alt="Mockup 2"
              className="w-full max-w-[280px] md:max-w-[390px] h-auto rounded-t-[35px] shadow-2xl mb-7"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Download;