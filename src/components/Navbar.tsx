import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useTheme } from '@/lib/theme';
import { useAuth } from '@/lib/auth-supabase';
import { Menu, Sun, Moon, BookOpen, LogOut, User, Loader2 } from 'lucide-react';

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { user, signOut, isLoading } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const links = [
    { label: 'Library', href: '/library' },
  ];

  const getInitials = () => {
    if (!user) return '?';
    if (user.fullName) {
      const names = user.fullName.split(' ');
      return (names[0][0] + (names[1]?.[0] || '')).toUpperCase();
    }
    return user.email[0].toUpperCase();
  };

  const getUserDisplayName = () => {
    return user?.fullName || user?.email || 'User';
  };

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      await signOut();
    } catch (error) {
      console.error('Sign out failed:', error);
    } finally {
      setIsSigningOut(false);
      setOpen(false);
    }
  };

  const initials = getInitials();

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-foreground" />
          </div>
          <span>Wisdom Of <span className="text-primary">Bharat</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                location.pathname === l.href ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} className="rounded-full">
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>

          {!isLoading && user && (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="hidden md:flex">
                  <button className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm text-primary-foreground font-bold cursor-pointer hover:shadow-md transition-shadow">
                    {initials}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{getUserDisplayName()}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="w-4 h-4 mr-2" /> Profile & Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleSignOut} 
                    className={`cursor-pointer text-destructive ${isSigningOut ? 'opacity-50 pointer-events-none' : ''}`}
                  >
                    {isSigningOut && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                    {!isSigningOut && <LogOut className="w-4 h-4 mr-2" />}
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex flex-col gap-4 mt-8">
                    {links.map(l => (
                      <Link 
                        key={l.href} 
                        to={l.href} 
                        onClick={() => setOpen(false)} 
                        className="text-lg font-medium py-2"
                      >
                        {l.label}
                      </Link>
                    ))}
                    <hr className="border-border" />
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-sm font-medium">{getUserDisplayName()}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <Link to="/profile" onClick={() => setOpen(false)}>
                      <Button variant="outline" className="w-full">
                        <User className="w-4 h-4 mr-2" /> Profile
                      </Button>
                    </Link>
                    <Button 
                      variant="destructive" 
                      className="w-full" 
                      onClick={handleSignOut}
                      disabled={isSigningOut}
                    >
                      {isSigningOut && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                      {!isSigningOut && <LogOut className="w-4 h-4 mr-2" />}
                      Sign out
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
