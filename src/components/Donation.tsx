import React from 'react';

const Donation: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-12 bg-[#F8F9FA] dark:bg-[#0f172a]">
      {/* Container Wrapper */}
      <div className="max-w-[1400px] mx-auto bg-[#FF5349] rounded-[40px] flex flex-col lg:flex-row items-end relative overflow-hidden shadow-2xl px-6 pt-6 md:px-16 md:pt-10">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-[60%] z-20 text-white space-y-3 md:space-y-5 pb-8 md:pb-20 self-start lg:mt-6">
          <h2 className="text-[36px] md:text-[60px] font-semibold leading-[1.1] tracking-tight w-full lg:max-w-[700px]">
            Be the Reason <br className="hidden md:block" /> Someone Smiles Today!
          </h2>
          
          <p className="text-[15px] md:text-[16px] opacity-85 leading-snug md:leading-relaxed w-full lg:max-w-[650px] font-normal">
            Your generosity can change lives every donation brings hope, support, and a brighter future. Give today and make a difference!
          </p>
          
          <button 
            className="bg-white text-[#FF5349] px-7 py-2.5 rounded-[12px] md:rounded-[15px] text-[15px] md:text-[18px] font-bold shadow-md hover:bg-[#1A293C] hover:text-white transition-all duration-300 active:scale-95 mt-2"
            aria-label="Donate Now"
          >
            Donate Now
          </button>
        </div>

        {/* Right Side: Images */}
        <div className="w-full lg:w-[40%] flex flex-row justify-center lg:justify-end items-end gap-2 md:gap-5 mt-4 lg:mt-0">
          {/* 💳 Image 1 (Payment Methods) */}
          <div className="flex justify-center items-end translate-y-1 md:translate-y-2">
            <img 
              src="./bg-1.png" 
              alt="Payment Methods" 
              className="w-full max-w-[160px] md:max-w-[280px] h-auto rounded-t-[20px] md:rounded-t-[25px] shadow-2xl mb-1" 
            />
          </div>

          {/* 💎 Image 2 (Heart Gems) */}
          <div className="flex justify-center items-end translate-y-1 md:translate-y-2">
            <img 
              src="./bg-2.png" 
              alt="Thank You Message" 
              className="w-full max-w-[190px] md:max-w-[320px] h-auto rounded-t-[20px] md:rounded-t-[25px] shadow-2xl" 
            />
          </div>
        </div> {/* Right Side Div Closed */}

      </div> {/* Main Red Box Div Closed */}
    </section> /* Section Closed */
  );
};

export default Donation;