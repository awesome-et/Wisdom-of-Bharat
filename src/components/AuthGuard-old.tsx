import { useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { Skeleton } from '@/components/ui/skeleton';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading, loginWithRedirect } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      loginWithRedirect({ redirectUrl: window.location.href });
    }
  }, [isLoading, user, loginWithRedirect]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="space-y-4 w-full max-w-md px-4">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-4 w-64 mx-auto" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
