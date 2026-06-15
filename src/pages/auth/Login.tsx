import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth-supabase';
import { AuthForm } from '@/components/AuthForm';
import { BookOpen } from 'lucide-react';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // Redirect to library if already logged in
  if (user) {
    return <Navigate to="/library" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold">
            Wisdom Of <span className="text-primary">Bharat</span>
          </h1>
        </div>
        <p className="text-muted-foreground">Learn timeless wisdom from Indian epics</p>
      </div>

      <AuthForm
        mode={mode}
        onSwitchMode={() => setMode(mode === 'login' ? 'signup' : 'login')}
        onSuccess={() => {
          // Redirect to library or dashboard after successful login
          window.location.href = '/library';
        }}
      />

      <p className="mt-8 text-center text-xs text-muted-foreground max-w-md">
        By signing in, you agree to our Terms of Service and Privacy Policy. We'll never share your data with third parties.
      </p>
    </div>
  );
}
