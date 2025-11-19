
import React, { useState } from 'react';
import { DashboardView, Certificate, Student, Page } from '../types';
import { 
  Logo, CertificateIcon, UsersIcon, ProfileIcon, LogoutIcon, 
  SearchIcon, ArrowUpRightIcon, CloudIcon, FilePlusIcon, ImportIcon,
  FilterListIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon, BookOpenIcon, CheckCircleIcon, ClockIcon
} from '../components/icons';
import StatCard from '../components/StatCard';
import Illustration from '../components/Illustration';
import VerifiedCertificate from '../components/VerifiedCertificate';

interface DashboardPageProps {
  onLogout: () => void;
}

// Updated mock data to match the dashboard screenshot
const dashboardCertificates: Certificate[] = [
    { id: '1', studentName: 'Anna Mitchell', course: 'Full Stack Web Development', issueDate: '2025-04-15', verificationCode: 'ABC123XYZ', certificateNo: 'SHSL/25/FS/0110', status: 'Verified' },
    { id: '2', studentName: 'John Doe', course: 'Cybersecurity', issueDate: '2025-04-16', verificationCode: 'QWE456RTY', certificateNo: 'SHSL/25/CY/0204', status: 'Verified' },
    { id: '3', studentName: 'Jane Smith', course: 'Data Analytics', issueDate: '2025-04-16', verificationCode: 'DFG789HJK', certificateNo: 'SHSL/25/DA/0351', status: 'Verified' },
    { id: '4', studentName: 'John Doe', course: 'Digital Marketing', issueDate: '2025-04-16', verificationCode: 'CVB159NM', certificateNo: 'SHSL/25/DM/0422', status: 'Verified' },
    { id: '5', studentName: 'Duke Peter', course: 'Multimedia', issueDate: '2025-04-13', verificationCode: 'XKS928QP', certificateNo: 'SHSL/25/MM/0518', status: 'Verified' },
];

// Mock data specifically for the Certificates Page screenshot
const certificatesPageData: any[] = [
    { name: 'John Prince', course: 'Full Stack Web Dev.', certificateId: 'SHSL/25/FS/0110', date: '2025-12-10' },
    { name: 'Sarah Connor', course: 'Cybersecurity', certificateId: 'SHSL/25/CY/0112', date: '2025-12-11' },
    { name: 'Kyle Reese', course: 'Data Analytics', certificateId: 'SHSL/25/DA/0113', date: '2025-12-12' },
    { name: 'Ellen Ripley', course: 'UI/UX Design', certificateId: 'SHSL/25/UX/0114', date: '2025-12-13' },
    { name: 'Neo Anderson', course: 'Full Stack Web Dev.', certificateId: 'SHSL/25/FS/0115', date: '2025-12-14' },
    { name: 'Trinity Moss', course: 'Cybersecurity', certificateId: 'SHSL/25/CY/0116', date: '2025-12-15' },
    { name: 'Morpheus Lawrence', course: 'Cloud Networking', certificateId: 'SHSL/25/CN/0117', date: '2025-12-16' },
    { name: 'Agent Smith', course: 'Data Analytics', certificateId: 'SHSL/25/DA/0118', date: '2025-12-17' },
];

const mockStudents: Student[] = [
    { id: '1', name: 'Anna Mitchell', email: 'anna@example.com', joinDate: '2023-01-10', courses: 3 },
    { id: '2', name: 'John Doe', email: 'john@example.com', joinDate: '2023-02-20', courses: 2 },
];

const mockAdmins = [
    { id: 1, name: 'System Administrator', email: 'admin@speedlink.com', role: 'Super Admin', status: 'Active' },
    { id: 2, name: 'Sarah Connor', email: 'sarah.c@speedlink.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'James Wright', email: 'james.w@speedlink.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Emily Davis', email: 'emily.d@speedlink.com', role: 'Editor', status: 'Active' },
];


const DashboardContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCertificates = dashboardCertificates.filter(cert => 
    cert.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.course.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
            <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-900" />
                </div>
                <input
                    type="text"
                    placeholder="Search for certification, courses, students"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm text-gray-900 shadow-sm"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
                title="Total Verified Certificates" 
                value="1,250" 
                icon={<ArrowUpRightIcon className="w-6 h-6 text-indigo-600" />} 
                color="bg-indigo-100" 
            />
            <StatCard 
                title="Total Students" 
                value="3,200" 
                icon={<ArrowUpRightIcon className="w-6 h-6 text-green-600" />} 
                color="bg-green-100" 
            />
            <StatCard 
                title="Pending Verifications" 
                value="45" 
                icon={<ClockIcon className="w-6 h-6 text-orange-600" />} 
                color="bg-orange-100" 
            />
            <StatCard 
                title="Courses Managed" 
                value="12" 
                icon={<BookOpenIcon className="w-6 h-6 text-blue-600" />} 
                color="bg-blue-100" 
            />
        </div>

        <div>
        <h3 className="text-xl font-bold text-gray-700 mb-4">Recently Verified Certificates</h3>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Course</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Date Verified</th>
                <th className="p-4 text-left text-sm font-semibold text-gray-600">Status</th>
                </tr>
            </thead>
            <tbody>
                {filteredCertificates.length > 0 ? (
                    filteredCertificates.map((cert, index) => (
                    <tr key={cert.id} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="p-4 text-gray-500">{cert.studentName}</td>
                        <td className="p-4 text-gray-500">{cert.course}</td>
                        <td className="p-4 text-gray-500">{cert.issueDate}</td>
                        <td className="p-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                            {cert.status}
                        </span>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4} className="p-6 text-center text-gray-500">No certificates found.</td>
                    </tr>
                )}
            </tbody>
            </table>
        </div>
        </div>
    </div>
  );
};

const CertificationsContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCertificates = certificatesPageData.filter(cert => 
    cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.certificateId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
        {/* Header Row: Title and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-800">Certificates</h2>
            <div className="relative w-full md:w-1/3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input
                    type="text"
                    placeholder="Search for certification, courses, students"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
        </div>

        {/* Actions Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 mb-8">
            <button className="flex items-center justify-center bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-800 transition shadow-sm w-full sm:w-auto">
                <FilePlusIcon className="w-5 h-5 mr-2" />
                Create Certificate
            </button>
            
            <button className="flex items-center justify-center bg-white text-indigo-700 border border-indigo-700 px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-50 transition shadow-sm w-full sm:w-auto">
                <ImportIcon className="w-5 h-5 mr-2" />
                Import CSV File
            </button>
        </div>


        {/* Filter & List Header */}
        <div className="flex flex-wrap justify-between items-center mt-8 gap-4">
            <h3 className="text-2xl font-bold text-gray-600">Recent Certificates</h3>
            <button className="flex items-center text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 font-medium">
                <FilterListIcon className="w-4 h-4 mr-2" />
                Filters
            </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
            <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
                <th className="p-4 w-10">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4" />
                </th>
                <th className="p-4 text-left text-base font-semibold text-gray-600">Name</th>
                <th className="p-4 text-left text-base font-semibold text-gray-600">Course</th>
                <th className="p-4 text-left text-base font-semibold text-gray-600">Certificate ID</th>
                <th className="p-4 text-left text-base font-semibold text-gray-600">Date</th>
                <th className="p-4 text-left text-base font-semibold text-gray-600">Action</th>
            </tr>
            </thead>
            <tbody>
            {filteredCertificates.length > 0 ? (
                filteredCertificates.map((cert, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4" />
                    </td>
                    <td className="p-4 text-gray-600 font-medium">{cert.name}</td>
                    <td className="p-4 text-gray-600">{cert.course}</td>
                    <td className="p-4 text-gray-600">{cert.certificateId}</td>
                    <td className="p-4 text-gray-600">{cert.date}</td>
                    <td className="p-4">
                        <button className="text-indigo-700 hover:text-indigo-900 font-medium">Edit</button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={6} className="p-6 text-center text-gray-500">No certificates found.</td>
                </tr>
            )}
            </tbody>
        </table>
        
        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 bg-white border-t border-gray-100 gap-4">
            <p className="text-sm text-gray-500">Showing <span className="font-medium">{filteredCertificates.length > 0 ? '1-' + Math.min(filteredCertificates.length, 10) : '0'}</span> from <span className="font-medium">999+</span> data</p>
            <div className="flex items-center space-x-2">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-700 text-white text-sm font-medium">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 text-sm font-medium">3</button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
        </div>
    </div>
  );
};

// Reusable component for Admins, Students, and Profile views as they share the same layout in design
const StatsAndVerifyView: React.FC = () => {
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
            const found = dashboardCertificates.find(c => c.verificationCode.toLowerCase() === code.toLowerCase());
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
        <div className="space-y-8">
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 <StatCard 
                    title="Total Certificates Issued" 
                    value="1,250" 
                    icon={<CertificateIcon className="w-6 h-6 text-indigo-600" />} 
                    color="bg-indigo-100" 
                />
                <StatCard 
                    title="Active Students" 
                    value="3,200" 
                    icon={<UsersIcon className="w-6 h-6 text-green-600" />} 
                    color="bg-green-100" 
                />
                <StatCard 
                    title="Pending Verifications" 
                    value="45" 
                    icon={<ClockIcon className="w-6 h-6 text-orange-600" />} 
                    color="bg-orange-100" 
                />
                <StatCard 
                    title="Courses Managed" 
                    value="12" 
                    icon={<BookOpenIcon className="w-6 h-6 text-blue-600" />} 
                    color="bg-blue-100" 
                />
            </div>

            {/* Verification Section */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-5/12">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#312e81] leading-tight mb-4">
                            Verify Certificates Instantly
                        </h1>
                        <p className="text-lg text-gray-500 mb-8">
                            Issued by: Speedlink Hi-Tech Solutions
                        </p>
                        
                        <form onSubmit={handleVerify} className="flex items-center w-full max-w-md mb-8 shadow-sm mx-auto lg:mx-0">
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
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md animate-fade-in">
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
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md animate-fade-in">
                                <div className="flex items-center mb-2">
                                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <h3 className="text-lg font-bold text-red-700">Certificate Not Found</h3>
                                </div>
                                <p className="text-gray-600">The verification code you entered is invalid. Please check the code and try again.</p>
                            </div>
                        )}
                    </div>

                    {/* Right Illustration / Certificate */}
                    <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
                        {verifiedCertificate ? (
                             <VerifiedCertificate certificate={verifiedCertificate} />
                        ) : (
                             <Illustration className="w-full max-w-md h-auto" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// All three views now use the same component as per the provided screenshots
const StudentsContent: React.FC = () => <StatsAndVerifyView />;
const AdminsContent: React.FC = () => <StatsAndVerifyView />;
const ProfileContent: React.FC = () => <StatsAndVerifyView />;

const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout }) => {
  const [activeView, setActiveView] = useState<DashboardView>(DashboardView.Dashboard);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeView) {
      case DashboardView.Dashboard:
        return <DashboardContent />;
      case DashboardView.Certifications:
        return <CertificationsContent />;
      case DashboardView.Students:
        return <StudentsContent />;
      case DashboardView.Admins:
        return <AdminsContent />;
      case DashboardView.Profile:
        return <ProfileContent />;
      default:
        return <DashboardContent />;
    }
  };
  
  const NavItem: React.FC<{ view: DashboardView; icon: React.ReactNode; label: string; }> = ({ view, icon, label }) => {
    const isActive = activeView === view;
    return (
      <div>
        <button
          onClick={() => {setActiveView(view); setSidebarOpen(false);}}
          className={`w-full flex items-center px-6 py-4 transition duration-200 text-sm font-medium ${
            isActive
              ? 'bg-white text-indigo-900'
              : 'text-white hover:bg-indigo-800'
          }`}
        >
          {icon}
          <span className="ml-4">{label}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm z-30 relative flex-shrink-0">
        <div className="px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
             <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-500 focus:outline-none lg:hidden mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <Logo />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-600">
              <SearchIcon className="w-6 h-6" />
            </button>
            <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <ProfileIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
          {/* Sidebar Backdrop */}
          {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              ></div>
          )}

          {/* Sidebar - Reduced width from w-64 to w-56 */}
          <aside className={`bg-[#3730a3] w-56 flex-shrink-0 flex flex-col transition-transform duration-300 ease-in-out transform absolute lg:relative inset-y-0 left-0 z-20 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className="flex-1 py-6 flex flex-col overflow-y-auto">
                <nav className="space-y-1">
                    <NavItem view={DashboardView.Dashboard} icon={<CloudIcon className="w-5 h-5" />} label="Dashboard" />
                    <NavItem view={DashboardView.Certifications} icon={<CertificateIcon className="w-5 h-5" />} label="Certificates" />
                    <NavItem view={DashboardView.Admins} icon={<UsersIcon className="w-5 h-5" />} label="Admins" />
                    <NavItem view={DashboardView.Students} icon={<div className="relative"><div className="absolute -top-1 -right-1 w-2 h-2"></div><UsersIcon className="w-5 h-5" /></div>} label="Students" />
                    <NavItem view={DashboardView.Profile} icon={<ProfileIcon className="w-5 h-5" />} label="Profile" />
                </nav>
            </div>
             <div className="p-6">
                <button
                    onClick={onLogout}
                    className="w-full flex items-center text-indigo-200 hover:text-white transition duration-200"
                >
                    <LogoutIcon className="w-5 h-5" />
                    <span className="ml-4 text-sm font-medium">Logout</span>
                </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-4 md:p-8">
              {renderContent()}
          </main>
      </div>
    </div>
  );
};

export default DashboardPage;
