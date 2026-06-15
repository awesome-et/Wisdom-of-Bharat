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

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          navigate('/auth/login?error=oauth', { replace: true });
          return;
        }
      }

      const start = Date.now();
      while (!cancelled && Date.now() - start < 5000) {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session) {
          navigate('/library', { replace: true });
          return;
        }

        await new Promise((resolve) => setTimeout(resolve, 250));
      }

      if (!cancelled) {
        navigate('/auth/login?error=session', { replace: true });
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
