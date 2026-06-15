import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';
import { useAuth } from '@/lib/auth-supabase'; // Connect to your custom provider

export default function AuthCallback() {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth(); // Read your global user state

  useEffect(() => {
    let cancelled = false;

    const finalizeOAuth = async () => {
      if (!isSupabaseConfigured || !supabase) {
        navigate('/auth/login?error=config', { replace: true });
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const oauthError = params.get('error') || params.get('error_description');

      if (oauthError) {
        navigate('/auth/login?error=oauth', { replace: true });
        return;
      }

      if (code) {
        try {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
          // The exchange succeeded! The auth-supabase.tsx listener will now 
          // automatically pick up the session change in the background.
        } catch (err) {
          console.error('PKCE code exchange error:', err);
          if (!cancelled) navigate('/auth/login?error=oauth', { replace: true });
          return;
        }
      }
    };

    finalizeOAuth();

    return () => {
      cancelled = true;
    };
  }, [navigate]);

  // CRUCIAL MISSING BLOCK: Watch your global auth context state. 
  // Once the user profile is ready, instantly route away.
  useEffect(() => {
    if (!isLoading) {
      if (user) {
        // Redirect to your main landing layout route
        navigate('/', { replace: true }); 
      } else {
        // If loading finished but no user structure exists, timeout back to login
        navigate('/auth/login?error=session', { replace: true });
      }
    }
  }, [user, isLoading, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
        <p className="text-muted-foreground">Completing sign in...</p>
      </div>
    </div>
  );
}