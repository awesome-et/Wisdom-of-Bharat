import { useState } from 'react';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/lib/auth-supabase';
import { AuthForm } from '@/components/AuthForm';
import { BookOpen } from 'lucide-react';
import { isSupabaseConfigured, supabaseConfigSource } from '@/lib/supabase';

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [searchParams] = useSearchParams();
  const { user, isLoading } = useAuth();
  const authError = searchParams.get('error');

  const errorMessage =
    authError === 'config'
      ? 'Supabase is not configured in this deployment. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in V0 project settings, then redeploy.'
      : authError === 'oauth'
      ? 'OAuth sign-in failed. Verify Supabase Google provider and exact redirect URLs for this environment.'
      : authError === 'session'
      ? 'OAuth completed but session was not created. This usually means callback URL mismatch or blocked third-party cookies.'
      : null;

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
        {!isSupabaseConfigured && (
          <p className="mt-3 text-xs text-destructive">
            Supabase config missing in this deployment (source: {supabaseConfigSource}).
          </p>
        )}
        {errorMessage && (
          <p className="mt-3 text-xs text-destructive">
            {errorMessage}
          </p>
        )}
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
