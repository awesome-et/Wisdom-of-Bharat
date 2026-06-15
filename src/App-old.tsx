import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/lib/theme';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import AuthGuard from '@/components/AuthGuard';
import Landing from '@/pages/Landing';
import Dashboard from '@/pages/Dashboard';
import Library from '@/pages/Library';
import Lesson from '@/pages/Lesson';
import Paths from '@/pages/Paths';
import LearningPath from '@/pages/LearningPath';
import Achievements from '@/pages/Achievements';
import Profile from '@/pages/Profile';
import AdminLayout from '@/pages/admin/AdminLayout';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminLessons from '@/pages/admin/AdminLessons';
import AdminPlaceholder from '@/pages/admin/AdminPlaceholder';
import { PWAUpdatePrompt } from '@/components/PWAUpdatePrompt';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <Navbar />
      {children}
    </AuthGuard>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          
          <Route path="/library" element={<AppLayout><Library /></AppLayout>} />
          <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
          <Route path="/lesson/:id" element={<AppLayout><Lesson /></AppLayout>} />
         {/* <Route path="/paths" element={<AppLayout><Paths /></AppLayout>} />
          <Route path="/paths/:id" element={<AppLayout><LearningPath /></AppLayout>} />
          <Route path="/achievements" element={<AppLayout><Achievements /></AppLayout>} />
          <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} /> */}

          {/* Admin routes */}
          <Route path="/admin" element={<AuthGuard><AdminLayout /></AuthGuard>}>
            <Route index element={<AdminDashboard />} />
            <Route path="lessons" element={<AdminLessons />} />
            <Route path="categories" element={<AdminPlaceholder />} />
            <Route path="paths" element={<AdminPlaceholder />} />
            <Route path="quizzes" element={<AdminPlaceholder />} />
            <Route path="users" element={<AdminPlaceholder />} />
            <Route path="certificates" element={<AdminPlaceholder />} />
            <Route path="analytics" element={<AdminPlaceholder />} />
            <Route path="settings" element={<AdminPlaceholder />} />
          </Route>
        </Routes>
        <Toaster />
        <PWAUpdatePrompt />
      </BrowserRouter>
    </ThemeProvider>
  );
}
