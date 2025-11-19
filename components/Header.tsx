
import React, { useState } from 'react';
import { Page } from '../types';
import { Logo, SearchIcon, LockIcon, CheckCircleIcon } from './icons';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage?: Page;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAuthPage = currentPage === Page.Login || currentPage === Page.Signup;
  const isLandingPage = currentPage === Page.Verification;

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white py-4 shadow-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => onNavigate(Page.Verification)}>
           <Logo />
        </div>

        {/* Desktop Nav - Only show on Landing Page */}
        {isLandingPage && (
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-600">
            {['Explore', 'Individual Training', 'Corporate Training'].map((item) => (
              <button key={item} className="flex items-center hover:text-gray-900">
                {item} <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            ))}
            <button className="hover:text-gray-900">Certification</button>
            <button className="hover:text-gray-900">Blog</button>
            <button onClick={() => handleScroll('about-us')} className="hover:text-gray-900">About us</button>
            <button onClick={() => handleScroll('contact-us')} className="hover:text-gray-900">Contact us</button>
          </nav>
        )}

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-600 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
           {isMenuOpen ? (
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
           ) : (
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
           )}
        </button>

        {/* Right Side Actions (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-gray-900"><SearchIcon className="w-6 h-6" /></button>
          {isAuthPage ? (
             <button onClick={() => onNavigate(Page.Verification)} className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition">
               <CheckCircleIcon className="w-4 h-4 mr-2" />
               <span className="text-sm font-medium">Verify Certificate</span>
             </button>
          ) : (
             <button onClick={() => onNavigate(Page.Login)} className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition">
               <LockIcon className="w-4 h-4 mr-2" />
               <span className="text-sm font-medium">Login/Signup</span>
             </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 animate-fade-in-down max-h-[calc(100vh-5rem)] overflow-y-auto">
            {/* Only show links on Landing Page */}
            {isLandingPage && (
                <>
                    {['Explore', 'Individual Training', 'Corporate Training', 'Certification', 'Blog'].map((item) => (
                        <button key={item} className="text-left text-gray-600 font-medium py-2 border-b border-gray-50 hover:text-indigo-600">{item}</button>
                    ))}
                    <button onClick={() => handleScroll('about-us')} className="text-left text-gray-600 font-medium py-2 border-b border-gray-50 hover:text-indigo-600">About us</button>
                    <button onClick={() => handleScroll('contact-us')} className="text-left text-gray-600 font-medium py-2 border-b border-gray-50 hover:text-indigo-600">Contact us</button>
                </>
            )}
             <div className="flex flex-col space-y-4 pt-4">
                {isAuthPage ? (
                    <button onClick={() => onNavigate(Page.Verification)} className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                        <CheckCircleIcon className="w-4 h-4 mr-2" /> Verify Certificate
                    </button>
                ) : (
                    <button onClick={() => onNavigate(Page.Login)} className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                        <LockIcon className="w-4 h-4 mr-2" /> Login/Signup
                    </button>
                )}
             </div>
        </div>
      )}
    </header>
  );
};
