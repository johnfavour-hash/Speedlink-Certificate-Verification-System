
import React from 'react';

const Illustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 500 400" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#C084FC', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7E22CE', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="gradScreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#F3E8FF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* --- Background Elements (Floating Items) --- */}

      {/* Orange Book (Left) */}
      <g transform="translate(50, 130) rotate(-25)">
        <rect x="0" y="0" width="80" height="100" rx="2" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
        <rect x="5" y="0" width="10" height="100" fill="#F59E0B" />
        <rect x="25" y="20" width="45" height="25" fill="white" rx="1" opacity="0.8" />
      </g>

      {/* Checklist/Paper (Right) */}
      <g transform="translate(380, 160) rotate(15)">
        <rect x="0" y="0" width="80" height="110" rx="2" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" filter="url(#dropShadow)" />
        {/* Lines */}
        <line x1="20" y1="20" x2="60" y2="20" stroke="#D1D5DB" strokeWidth="2" />
        <line x1="20" y1="35" x2="60" y2="35" stroke="#D1D5DB" strokeWidth="2" />
        <line x1="20" y1="50" x2="50" y2="50" stroke="#D1D5DB" strokeWidth="2" />
        <line x1="20" y1="65" x2="60" y2="65" stroke="#D1D5DB" strokeWidth="2" />
        {/* Checkmarks */}
        <circle cx="10" cy="20" r="3" fill="#F59E0B" />
        <circle cx="10" cy="35" r="3" fill="#F59E0B" />
        <circle cx="10" cy="50" r="3" fill="#F59E0B" />
      </g>

      {/* Lightbulb (Right Top) */}
      <g transform="translate(340, 80) rotate(15)">
        <path d="M30 0 C13.4 0 0 13.4 0 30 C0 38 4 45 10 50 L15 65 H45 L50 50 C56 45 60 38 60 30 C60 13.4 46.6 0 30 0 Z" fill="#FBBF24" />
        {/* Filament */}
        <path d="M20 15 Q30 5 40 15" stroke="#FFF" strokeWidth="3" fill="none" opacity="0.5" />
        {/* Base */}
        <rect x="18" y="62" width="24" height="6" fill="#9CA3AF" />
        <rect x="18" y="69" width="24" height="6" fill="#9CA3AF" />
        <path d="M22 75 H38 L35 82 H25 Z" fill="#6B7280" />
      </g>

      {/* --- Main Laptop --- */}
      <g transform="translate(120, 150)">
         {/* Screen Base */}
         <rect x="0" y="0" width="240" height="160" rx="10" fill="#A855F7" />
         <rect x="5" y="5" width="230" height="150" rx="5" fill="white" />
         
         {/* Screen Content: Certificate */}
         <g transform="translate(25, 20)">
             {/* Cert Border */}
             <rect x="0" y="0" width="180" height="110" rx="2" fill="white" stroke="#E9D5FF" strokeWidth="2" />
             {/* Text Header */}
             <text x="90" y="20" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#6B21A8" textAnchor="middle">CERTIFICATE</text>
             <text x="90" y="32" fontFamily="sans-serif" fontSize="6" fill="#A855F7" textAnchor="middle">OF EXCELLENCE</text>
             {/* Lines */}
             <line x1="40" y1="50" x2="140" y2="50" stroke="#CBD5E1" strokeWidth="2" />
             <line x1="40" y1="60" x2="140" y2="60" stroke="#CBD5E1" strokeWidth="2" />
             <line x1="40" y1="75" x2="90" y2="75" stroke="#CBD5E1" strokeWidth="2" />
             <line x1="100" y1="75" x2="140" y2="75" stroke="#CBD5E1" strokeWidth="2" />
             
             {/* Gold Seal */}
             <g transform="translate(140, 80)">
                <circle cx="0" cy="0" r="12" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />
                <path d="M0 0 L-3 14 L0 12 L3 14 Z" fill="#D97706" transform="translate(0, 0) rotate(0)" />
                <path d="M0 0 L-3 14 L0 12 L3 14 Z" fill="#D97706" transform="translate(0, 0) rotate(120)" />
                <path d="M0 0 L-3 14 L0 12 L3 14 Z" fill="#D97706" transform="translate(0, 0) rotate(240)" />
             </g>
         </g>

         {/* Laptop Bottom/Keyboard */}
         <path d="M -20 160 L 260 160 L 250 180 L -10 180 Z" fill="url(#gradPurple)" />
         <rect x="80" y="165" width="80" height="10" rx="1" fill="#9333EA" opacity="0.6" />
      </g>

      {/* Graduation Cap (Floating Top) */}
      <g transform="translate(160, 50) rotate(-10)">
         <path d="M0 30 L80 0 L160 30 L80 60 Z" fill="#A855F7" /> {/* Top diamond */}
         <path d="M160 30 L160 50 L80 80 L80 60 Z" fill="#7E22CE" /> {/* Side dark */}
         <path d="M0 30 L0 50 L80 80 L80 60 Z" fill="#9333EA" />   {/* Side light */}
         {/* Tassel */}
         <circle cx="80" cy="30" r="3" fill="#FBBF24" />
         <path d="M80 30 Q70 50 65 70" stroke="#FBBF24" strokeWidth="3" fill="none" />
         <rect x="60" y="70" width="10" height="15" fill="#FBBF24" />
      </g>

      {/* Magnifying Glass (Floating Left Bottom) */}
      <g transform="translate(60, 250) rotate(-15)">
         <circle cx="30" cy="30" r="25" stroke="#9333EA" strokeWidth="6" fill="none" />
         <circle cx="30" cy="30" r="25" fill="white" opacity="0.3" />
         <line x1="48" y1="48" x2="75" y2="75" stroke="#7E22CE" strokeWidth="8" strokeLinecap="round" />
         {/* Reflection */}
         <path d="M15 20 Q20 10 35 15" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
      </g>

    </svg>
  );
};

export default Illustration;
