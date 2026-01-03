import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from './components/Hero';
import Features from './components/Features';
import Connection from './components/Connection';
import Download from './components/Download';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Donation from './components/Donation';
import ThemeToggle from './components/ThemeToggle';

// How to Install component (since it wasn't requested as a separate component, keeping inline)
const HowToInstall: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#F8F9FA] dark:bg-slate-900">
      <div className="container mx-auto px-8 text-center">

        {/* Header */}
        <h2 className="text-[52px] font-bold text-[#1A293C] dark:text-white mb-4">How to Install Our App</h2>
        <p className="text-[18px] text-gray-500 dark:text-gray-300 max-w-[800px] mx-auto mb-16">
          Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
        </p>

        {/* 🏁 Step Tracker (01 - 02 - 03) */}
        <div className="relative flex justify-center items-center max-w-[900px] mx-auto mb-12">
          {/* Connecting Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 dark:bg-gray-700 -z-0"></div>

          <div className="relative z-10 flex justify-between w-full">
            {/* Step 01 */}
            <div className="bg-[#F8F9FA] dark:bg-[#0f172a] px-6">
              <span className="text-[40px] font-bold text-[#FF5349] dark:text-[#FF5349]">01</span>
            </div>
            {/* Step 02 */}
            <div className="bg-[#F8F9FA] dark:bg-[#0f172a] px-6">
              <span className="text-[40px] font-bold text-gray-900 dark:text-gray-300">02</span>
            </div>
            {/* Step 03 */}
            <div className="bg-[#F8F9FA] dark:bg-[#0f172a] px-6">
              <span className="text-[40px] font-bold text-gray-900 dark:text-gray-300">03</span>
            </div>
          </div>
        </div>

        {/* 📋 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">

          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[20px] shadow-sm border border-gray-50 dark:border-gray-700
                          hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <h4 className="text-[24px] font-bold text-[#1A293C] dark:text-white mb-3 group-hover:text-[#FF5349]">Download</h4>
            <p className="text-black dark:text-gray-200">Open Play Store or App Store</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[20px] shadow-sm border border-gray-50 dark:border-gray-700
                          hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <h4 className="text-[24px] font-bold text-[#1A293C] dark:text-white mb-3 group-hover:text-[#FF5349]">Install App</h4>
            <p className="text-black dark:text-gray-200">The app will install automatically.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[20px] shadow-sm border border-gray-100 dark:border-gray-700
                          hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <h4 className="text-[24px] font-bold text-[#1A293C] dark:text-white mb-3 group-hover:text-[#FF5349]">Ready to Use</h4>
            <p className="text-black dark:text-gray-200">Sign up or log in to start exploring!</p>
          </div>

        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MyBindle — Stay Connected</title>
        <meta name="description" content="MyBindle is a social platform to stay connected with friends, family, and like-minded people. Share moments, discover content, and grow your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Helmet>
      <div className="w-full min-h-screen bg-white dark:bg-slate-900 font-sans">
        <ThemeToggle />
        <Hero />
        <Features />
        <Connection />
        <HowToInstall />
        <Donation />
        <Testimonials />
        <Download />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;