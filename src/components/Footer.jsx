import React from 'react';
import logoImg from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white mt-20 pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-8 mb-12">
          {/* Brand Block */}
          <div className="w-full sm:w-[40%] flex flex-col gap-4">
            <a className="hover:opacity-80 transition-opacity">
              <img src={logoImg} alt="Dev Stack Logo" className="h-8 w-auto object-contain" />
            </a>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm mt-2">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 mt-2 text-xs text-gray-600 font-medium">
              <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
            </div>
          </div>
          
          {/* Product Links */}
          <div className="w-[45%] sm:w-auto">
            <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-4">Product</h3>
            <ul className="flex flex-col gap-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="w-[45%] sm:w-auto">
            <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-4">Company</h3>
            <ul className="flex flex-col gap-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Legal Links */}
          <div className="w-[45%] sm:w-auto mt-6 sm:mt-0">
            <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-4">Legal</h3>
            <ul className="flex flex-col gap-3 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 border-t border-gray-100">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
