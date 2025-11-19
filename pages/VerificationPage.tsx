
import React, { useState, useEffect, useRef } from 'react';
import { Page, Certificate } from '../types';
import { 
  CheckCircleIcon, MegaphoneIcon, CloudIcon, BarChartIcon, VideoIcon, 
  ShieldIcon, SignalIcon, DesktopIcon, CodeIcon, Logo 
} from '../components/icons';
import Illustration from '../components/Illustration';
import VerifiedCertificate from '../components/VerifiedCertificate';
import { Header } from '../components/Header';

const mockCertificates: Certificate[] = [
    { 
      id: '1', 
      studentName: 'John Doe', 
      course: 'Cybersecurity', 
      issueDate: '12th December, 2025', 
      verificationCode: 'ABC123XYZ', 
      certificateNo: 'SHSL/25/CY/0110',
      status: 'Verified' 
    },
    { 
      id: '2', 
      studentName: 'Jane Smith', 
      course: 'UI/UX Design Fundamentals', 
      issueDate: '15th November, 2025', 
      verificationCode: 'QWE456RTY', 
      certificateNo: 'SHSL/25/UX/0204',
      status: 'Verified' 
    },
];

// Scroll Reveal Component
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out transform ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface VerificationPageProps {
  onNavigate: (page: Page) => void;
}

const VerificationPage: React.FC<VerificationPageProps> = ({ onNavigate }) => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState<'valid' | 'invalid' | null>(null);
  const [verifiedCertificate, setVerifiedCertificate] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;
    setLoading(true);
    setResult(null);
    setVerifiedCertificate(null);

    setTimeout(() => {
      const found = mockCertificates.find(c => c.verificationCode.toLowerCase() === code.toLowerCase());
      if (found) {
        setResult('valid');
        setVerifiedCertificate(found);
      } else {
        setResult('invalid');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans overflow-x-hidden">
      {/* Responsive Header - Fixed */}
      <Header onNavigate={onNavigate} currentPage={Page.Verification} />

      {/* Hero Section - Added top padding to account for fixed header */}
      <main className="flex-grow flex flex-col pt-24">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between py-8 md:py-24">
          
          {/* Left Content */}
          <Reveal className="md:w-5/12 mb-12 md:mb-0 pr-0 md:pr-8 w-full z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#312e81] leading-tight mb-4 text-center md:text-left">
              Verify Certificates Instantly
            </h1>
            <p className="text-xl text-gray-500 mb-8 font-normal text-center md:text-left">
              Issued by: Speedlink Hi-Tech Solutions
            </p>
            
            <form onSubmit={handleVerify} className="flex items-center w-full max-w-md mb-8 shadow-sm mx-auto md:mx-0 transition-transform hover:scale-[1.01] duration-300">
              <input
                type="text"
                placeholder="Enter Certificate ID"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-grow px-4 py-3 border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#ef4444] text-white px-6 py-3 rounded-r-md font-medium hover:bg-red-600 transition whitespace-nowrap"
              >
                {loading ? 'Verifying...' : 'Verify Now'}
              </button>
            </form>

            {/* Inline Verification Result */}
            {result === 'valid' && verifiedCertificate && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md animate-fade-in-down mx-auto md:mx-0 shadow-md">
                    <div className="flex items-center mb-4">
                         <div className="bg-green-500 rounded-md p-1 mr-3 shadow-sm">
                            <CheckCircleIcon className="w-4 h-4 text-white" />
                        </div>
                        <span className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-md shadow-sm">Verified Certificate</span>
                    </div>
                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-bold text-gray-900">Student Name:</span> {verifiedCertificate.studentName}</p>
                        <p><span className="font-bold text-gray-900">Course Name:</span> {verifiedCertificate.course}</p>
                        <p><span className="font-bold text-gray-900">Date Issued:</span> {verifiedCertificate.issueDate}</p>
                    </div>
                </div>
            )}

            {result === 'invalid' && (
                 <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md animate-fade-in-down mx-auto md:mx-0 shadow-md">
                    <div className="flex items-center mb-2">
                        <svg className="w-6 h-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <h3 className="text-lg font-bold text-red-700">Certificate Not Found</h3>
                    </div>
                    <p className="text-gray-600">The verification code you entered is invalid. Please check the code and try again.</p>
                </div>
            )}

          </Reveal>

          {/* Right Illustration / Certificate */}
          <div className="md:w-7/12 w-full flex justify-center md:justify-end pl-0 md:pl-4">
            {verifiedCertificate ? (
                <div className="w-full flex justify-center md:justify-end animate-fade-in-up">
                     <VerifiedCertificate certificate={verifiedCertificate} />
                </div>
            ) : (
                <Reveal delay={200} className="w-full flex justify-center md:justify-end">
                    <Illustration className="w-full max-w-lg h-auto" />
                </Reveal>
            )}
          </div>
        </div>

        {/* Course Section */}
        <section className="bg-[#3730a3] py-16">
            <div className="container mx-auto px-4 md:px-8">
            <Reveal>
                <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-12">
                    Kickstart Your Tech Career Today
                </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { Icon: MegaphoneIcon, label: 'Digital Marketing' },
                    { Icon: CloudIcon, label: 'Cloud Networking' },
                    { Icon: BarChartIcon, label: 'Data Analytics' },
                    { Icon: VideoIcon, label: 'Multimedia & Broadcasting Solutions' },
                    { Icon: ShieldIcon, label: 'Cybersecurity' },
                    { Icon: SignalIcon, label: 'Fibre Optics Engineering' },
                    { Icon: DesktopIcon, label: 'UI/UX Design' },
                    { Icon: CodeIcon, label: 'Full Stack Development' },
                ].map((course, index) => (
                    <Reveal key={index} delay={index * 100} className="h-full">
                        <div className="bg-white rounded-lg p-6 flex items-center shadow-sm min-h-[80px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group h-full">
                            <course.Icon className="w-8 h-8 text-blue-500 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-gray-700 font-medium text-sm">{course.label}</span>
                        </div>
                    </Reveal>
                ))}
            </div>
            </div>
        </section>

        {/* About Us Section */}
        <section id="about-us" className="bg-gray-50 py-20 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#312e81] mb-8">About Speedlink</h2>
                </Reveal>
                <Reveal delay={150}>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Speedlink Hi-Tech Solutions Limited is a world-class IT training institute and software development company. We are committed to redefining the IT industry in Nigeria and Africa at large by providing professional, practical, and project-based training.
                    </p>
                </Reveal>
                <Reveal delay={300}>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our training programs are designed to equip individuals and corporate organizations with cutting-edge technical skills required to thrive in today's digital economy. With a team of seasoned professionals and state-of-the-art facilities, we ensure our students receive the mentorship and hands-on experience needed to excel in their careers. We are your partner in progress for Software Engineering, Data Science, Cyber Security, and Digital Literacy.
                    </p>
                </Reveal>
            </div>
        </section>

      </main>

      {/* Footer / Contact Us */}
      <footer id="contact-us" className="bg-[#111827] text-gray-300 py-16">
          <div className="container mx-auto px-4 md:px-8">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  
                  {/* Company Info */}
                  <div className="space-y-6">
                      <div className="flex items-center gap-3">
                         {/* Light Logo for Dark Footer */}
                         <Logo className="bg-white p-2 rounded-sm" />
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                          Empowering the next generation of tech leaders through world-class training and innovative solutions.
                      </p>
                      <div className="flex space-x-4 pt-2">
                          <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110"><span className="sr-only">Facebook</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                          <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110"><span className="sr-only">Twitter</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
                          <a href="#" className="text-gray-400 hover:text-white transition transform hover:scale-110"><span className="sr-only">LinkedIn</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg></a>
                      </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                      <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
                      <ul className="space-y-3">
                          {['About us', 'Corporate Training', 'Individual Training', 'Certification', 'Blog'].map((item) => (
                              <li key={item}>
                                  <a href="#" className="text-gray-400 hover:text-white transition text-sm">{item}</a>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Contact Us */}
                  <div id="contact-us-content">
                      <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
                      <ul className="space-y-4">
                          <li className="flex items-start">
                              <div className="bg-gray-800 p-2 rounded-full mr-3 mt-0.5">
                                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                              </div>
                              <span className="text-sm text-gray-400">
                                  Plot 10, Speedlink Avenue, <br/>
                                  Off Ikeja City Mall, Alausa, <br/>
                                  Lagos, Nigeria.
                              </span>
                          </li>
                          <li className="flex items-center">
                               <div className="bg-gray-800 p-2 rounded-full mr-3">
                                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                               </div>
                              <span className="text-sm text-gray-400">+234 800 123 4567</span>
                          </li>
                          <li className="flex items-center">
                               <div className="bg-gray-800 p-2 rounded-full mr-3">
                                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                               </div>
                              <span className="text-sm text-gray-400">info@speedlinkng.com</span>
                          </li>
                      </ul>
                  </div>

              </div>
              
              <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                  <p className="text-gray-500 text-sm">
                      &copy; {new Date().getFullYear()} Speedlink Hi-Tech Solutions Limited. All rights reserved.
                  </p>
              </div>
            </Reveal>
          </div>
      </footer>
    </div>
  );
};

export default VerificationPage;
