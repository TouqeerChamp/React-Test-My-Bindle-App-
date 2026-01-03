import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-20 bg-[#1A293C] text-white">
      <div className="container mx-auto px-10">

        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-gray-700 pb-16">

          {/* 🚀 Brand & Motto */}
          <div className="space-y-6 max-w-[400px]">
            <img
              src="https://c.animaapp.com/mjwquqmqYt5wjp/img/group-12.png"
              alt="MyBindle Logo"
              className="w-[220px] brightness-0 invert"
            />
            <p className="text-gray-400 text-lg leading-relaxed">
              Stay Connected, Stay Social, Stay You! Joining hands to build the world's most vibrant community for meaningful connections.
            </p>
          </div>

          {/* 🔗 Navigation Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-5">
              <h4 className="font-bold text-xl">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-[#FF5349] cursor-pointer transition-colors">Features</li>
                <li className="hover:text-[#FF5349] cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-[#FF5349] cursor-pointer transition-colors">Business Mode</li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="font-bold text-xl">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-[#FF5349] cursor-pointer transition-colors">Help Center</li>
                <li className="hover:text-[#FF5349] cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-[#FF5349] cursor-pointer transition-colors">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ⚖️ Bottom Copyright Area */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-md">
          <p>© 2026 MyBindle. All rights reserved.</p>
          <div className="flex gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookies Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;