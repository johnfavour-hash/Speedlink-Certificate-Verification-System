
import React from 'react';
import { Logo } from './icons';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center">
      <div className="transform scale-150 mb-10 animate-pulse">
        <Logo />
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-[#312e81] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-[#ef4444] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-[#312e81] rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
