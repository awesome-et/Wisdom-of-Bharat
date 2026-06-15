import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const navigate = useNavigate();

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

      try {
        if (code) {
          // 1. Exchange the PKCE code for a session
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
          if (exchangeError) throw exchangeError;
        }

        // 2. Immediately read the newly established session directly
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError || !session) throw sessionError || new Error('No session established');

        // 3. Force navigation directly now that the session is active in storage
        if (!cancelled) {
          navigate('/', { replace: true });
        }
      } catch (err) {
        console.error('OAuth callback lifecycle failed:', err);
        if (!cancelled) {
          navigate('/auth/login?error=session', { replace: true });
        }
      }
    };

    finalizeOAuth();

    return () => {
      cancelled = true;
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
        <p className="text-muted-foreground">Completing sign in...</p>
      </div>
    </div>
  );
}