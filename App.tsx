
import React, { useState, useCallback, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import VerificationPage from './pages/VerificationPage';
import DashboardPage from './pages/DashboardPage';
import SplashScreen from './components/SplashScreen';
import { Page } from './types';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<Page>(Page.Verification);
  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
    setCurrentPage(Page.Dashboard);
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setCurrentPage(Page.Login);
  }, []);

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  const renderPage = () => {
    if (isAuthenticated) {
      return <DashboardPage onLogout={handleLogout} />;
    }

    switch (currentPage) {
      case Page.Login:
        return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
      case Page.Signup:
        return <SignupPage onNavigate={navigate} />;
      case Page.Verification:
      default:
        return <VerificationPage onNavigate={navigate} />;
    }
  };

  return <div className="min-h-screen bg-gray-50">{renderPage()}</div>;
};

export default App;
