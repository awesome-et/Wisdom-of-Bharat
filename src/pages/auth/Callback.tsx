import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Force immediate navigation to the landing page, bypassing background polling
    navigate('/', { replace: true });
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