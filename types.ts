
export enum Page {
  Login,
  Signup,
  Verification,
  Dashboard,
}

export enum DashboardView {
  Dashboard = 'Dashboard',
  Certifications = 'Certifications',
  Admins = 'Admins',
  Students = 'Students',
  Profile = 'Profile',
}

export interface Certificate {
  id: string;
  studentName: string;
  course: string;
  issueDate: string;
  verificationCode: string;
  certificateNo: string;
  status: 'Verified' | 'Pending';
}

export interface Student {
    id: string;
    name: string;
    email: string;
    joinDate: string;
    courses: number;
}
