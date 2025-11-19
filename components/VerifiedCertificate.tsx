
import React from 'react';
import { Certificate } from '../types';

interface VerifiedCertificateProps {
  certificate: Certificate;
}

const VerifiedCertificate: React.FC<VerifiedCertificateProps> = ({ certificate }) => {
  return (
    <div 
      className="w-full bg-gray-50 shadow-2xl relative overflow-hidden rounded-sm select-none" 
      style={{ maxWidth: '636.48px', aspectRatio: '636.48 / 461.96' }}
    >
      {/* 
        BACKGROUND IMAGE PLACEHOLDER
        Action Required: Place your certificate template image (without the dynamic text) 
        in your public folder and name it 'certificate-bg.png'.
      */}
      <img 
        src="/certificate-bg.png" 
        alt="Certificate Template" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* 
        Dynamic Content Overlay 
        These fields are positioned absolutely to land in the correct "spaces" 
        of your certificate template based on the previous design.
      */}
      <div className="absolute inset-0 w-full h-full font-sans text-gray-900">
          
          {/* Certificate No - Top Right */}
          <div className="absolute top-[12%] right-[11%] text-[8px] sm:text-[10px] md:text-xs font-bold tracking-wide text-gray-800">
             {certificate.certificateNo}
          </div>

          {/* Student Name - Center, approx 38% down */}
          <div className="absolute top-[38%] left-0 w-full text-center px-4 md:px-8">
             <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold text-gray-900 uppercase tracking-wide truncate">
               {certificate.studentName}
             </h2>
          </div>

          {/* Course Name - Center, approx 56% down */}
          <div className="absolute top-[56%] left-0 w-full text-center px-4 md:px-8">
              <h3 className="text-sm sm:text-base md:text-xl font-extrabold text-gray-900 truncate">
                {certificate.course}
              </h3>
          </div>

          {/* Date - Center, approx 69% down */}
          <div className="absolute top-[69%] left-0 w-full text-center pl-2 md:pl-4">
             <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-900">
               {certificate.issueDate}
             </span>
          </div>

          {/* Verify Code - Bottom Center, approx 93% down */}
          <div className="absolute bottom-[7%] left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-900 tracking-widest border-b border-gray-900 px-2">
                {certificate.verificationCode}
              </p>
          </div>

      </div>
    </div>
  );
};

export default VerifiedCertificate;
