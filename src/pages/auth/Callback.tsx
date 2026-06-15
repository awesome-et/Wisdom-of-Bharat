import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function AuthCallback() {
  useEffect(() => {
    // 1. Give Supabase 5 seconds to write the session tokens to storage
    const timer = setTimeout(() => {
      // 2. Force a hard browser redirect instead of a client-side navigation.
      // This wipes out the query code parameters and forces your global 
      // AuthProvider to cleanly initialize and pick up the login state.
      window.location.href = '/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
        <p className="text-muted-foreground">Completing sign in...</p>
      </div>
    </div>
  );
}