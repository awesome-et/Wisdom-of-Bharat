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
                  <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-muted/80">
                    <Menu className="w-5 h-5 text-foreground" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[320px] sm:w-[380px] p-0 flex flex-col bg-background"
                >
                  {/* Header */}
                  <div className="border-b px-5 py-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                        <BookOpen className="w-5 h-5 text-primary-foreground" />
                      </div>

                      <div className="min-w-0">
                        <h2 className="font-semibold text-lg truncate">
                          Wisdom Of <span className="text-primary">Bharat</span>
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 overflow-y-auto px-5 py-5">

                    {/* Navigation */}
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                        Navigation
                      </p>

                      {links.map((l) => (
                        <Link
                          key={l.href}
                          to={l.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-colors ${location.pathname === l.href
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                            }`}
                        >
                          <BookOpen className="w-5 h-5" />
                          <span>{l.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* User Card */}
                    <div className="mt-8">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                        Account
                      </p>

                      <div className="rounded-xl bg-muted p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                            {initials}
                          </div>

                          <div className="min-w-0">
                            <p className="font-medium truncate">
                              {getUserDisplayName()}
                            </p>

                            <p className="text-sm text-muted-foreground truncate">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t p-4 bg-background space-y-2">

                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="block"
                    >
                      <Button
                        className="w-full h-11"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Profile & Settings
                      </Button>
                    </Link>

                    <Button
                      variant="destructive"
                      className="w-full h-11"
                      disabled={isSigningOut}
                      onClick={handleSignOut}
                    >
                      {isSigningOut ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Signing out...
                        </>
                      ) : (
                        <>
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </>
                      )}
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