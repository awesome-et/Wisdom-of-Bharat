import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
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
              className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${location.pathname === l.href ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'
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
              {/* Desktop Profile Dropdown View */}
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm text-primary-foreground font-bold cursor-pointer hover:shadow-md transition-shadow focus:outline-none">
                      {initials}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 z-50 bg-card border border-border shadow-md">
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-medium text-foreground">{getUserDisplayName()}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="focus:bg-muted focus:text-foreground cursor-pointer">
                      <Link to="/profile" className="flex items-center w-full px-2 py-1.5 text-sm">
                        <User className="w-4 h-4 mr-2" /> Profile & Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        // If already processing a sign out, ignore additional clicks
                        if (isSigningOut) return;
                        handleSignOut();
                      }}
                      className={`focus:bg-destructive/10 focus:text-destructive cursor-pointer text-destructive flex items-center w-full px-2 py-1.5 text-sm ${isSigningOut ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''
                        }`}
                    >
                      {isSigningOut ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <LogOut className="w-4 h-4 mr-2" />
                      )}
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile Navigation Sheet Drawer */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>

                {/* FIX: We use explicit, non-variable solid color utilities (bg-white dark:bg-neutral-950)
                  to completely block background bleed-through, combined with an explicit opaque border.
                */}
                <SheetContent
                  side="right"
                  className="w-72 z-50 bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 text-foreground"
                >
                  <div className="flex flex-col gap-5 mt-8">
                    {links.map(l => (
                      <Link
                        key={l.href}
                        to={l.href}
                        onClick={() => setOpen(false)}
                        className="text-lg font-medium py-2 text-foreground hover:text-primary transition-colors block border-b border-border/40"
                      >
                        {l.label}
                      </Link>
                    ))}

                    {/* User Profile Info Card Container */}
                    <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-xl mt-2 shadow-sm">
                      <p className="text-sm font-semibold text-foreground tracking-tight">{getUserDisplayName()}</p>
                      <p className="text-xs text-muted-foreground truncate mt-0.5">{user.email}</p>
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                      <Link to="/profile" onClick={() => setOpen(false)} className="w-full">
                        <Button variant="outline" className="w-full justify-start h-11 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-800">
                          <User className="w-4 h-4 mr-2 text-muted-foreground" /> Profile & Settings
                        </Button>
                      </Link>

                      <Button
                        variant="destructive"
                        className={`w-full justify-start h-11 shadow-sm transition-all ${isSigningOut ? 'opacity-50 pointer-events-none' : ''
                          }`}
                        onClick={() => {
                          if (isSigningOut) return;
                          handleSignOut();
                        }}
                      >
                        {isSigningOut ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <LogOut className="w-4 h-4 mr-2" />
                        )}
                        Sign out
                      </Button>
                    </div>
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