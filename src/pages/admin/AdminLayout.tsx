import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/lib/theme';
import { LayoutDashboard, BookOpen, FolderOpen, Route, HelpCircle, Users, Award, BarChart3, Settings, Menu, Sun, Moon, ChevronLeft } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Categories', href: '/admin/categories', icon: FolderOpen },
  { label: 'Lessons', href: '/admin/lessons', icon: BookOpen },
  { label: 'Learning Paths', href: '/admin/paths', icon: Route },
  { label: 'Quizzes', href: '/admin/quizzes', icon: HelpCircle },
  { label: 'Users', href: '/admin/users', icon: Users },
  { label: 'Certificates', href: '/admin/certificates', icon: Award },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 flex items-center gap-2 font-serif text-lg font-bold">
        <BookOpen className="w-5 h-5 text-primary" /> Admin
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {navItems.map(item => {
          const active = location.pathname === item.href || (item.href !== '/admin' && location.pathname.startsWith(item.href));
          return (
            <Link key={item.href} to={item.href} onClick={onNavigate}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}>
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4">
        <Link to="/dashboard">
          <Button variant="outline" size="sm" className="w-full"><ChevronLeft className="w-3 h-3 mr-1" /> Back to App</Button>
        </Link>
      </div>
    </div>
  );
}

export default function AdminLayout() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-60 border-r border-border bg-card flex-col shrink-0">
        <SidebarContent />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-border flex items-center justify-between px-4 bg-card/50 backdrop-blur-sm">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon"><Menu className="w-5 h-5" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-60 p-0">
              <SidebarContent onNavigate={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
          <div />
          <Button variant="ghost" size="icon" onClick={toggle} className="rounded-full">
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>
        </header>
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
