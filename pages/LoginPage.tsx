
import React from 'react';
import { Page } from '../types';
import { Header } from '../components/Header';

interface LoginPageProps {
  onLogin: () => void;
  onNavigate: (page: Page) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Responsive Header - Fixed */}
      <Header onNavigate={onNavigate} currentPage={Page.Login} />

      {/* Main Content - Added top padding for fixed header */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 pt-24">
        <div className="w-full max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
              Welcome, Log into your account
            </h1>

            <div className="bg-white p-10 rounded-sm shadow-sm">
                <p className="text-center text-gray-600 text-sm mb-8">
                  It is our great pleasure to have<br/>you on board!
                </p>

                <form onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                    <div className="mb-4">
                    <input
                        className="appearance-none border border-gray-200 rounded-sm w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:border-indigo-500 bg-white placeholder-gray-400 text-sm"
                        id="email"
                        type="email"
                        placeholder="Enter Email Address"
                        defaultValue="admin@speedlink.com"
                    />
                    </div>
                    <div className="mb-6">
                    <input
                        className="appearance-none border border-gray-200 rounded-sm w-full py-3 px-4 text-gray-600 mb-3 leading-tight focus:outline-none focus:border-indigo-500 bg-white placeholder-gray-400 text-sm"
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        defaultValue="password"
                    />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                    <button
                        className="bg-[#3730a3] hover:bg-indigo-800 text-white font-medium py-3 px-4 rounded-sm w-full focus:outline-none focus:shadow-outline transition duration-300 text-sm"
                        type="submit"
                    >
                        Login
                    </button>
                    </div>
                </form>
                
                <p className="text-center text-gray-600 text-xs">
                    Already have an account?{' '}
                    <button onClick={() => onNavigate(Page.Signup)} className="font-bold text-[#3730a3] hover:underline">
                    Sign up
                    </button>
                </p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
