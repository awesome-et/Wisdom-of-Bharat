import { X, RefreshCw } from 'lucide-react';
import { usePWAUpdate } from '@/lib/pwa';
import { Button } from '@/components/ui/button';

export function PWAUpdatePrompt() {
  const { updateAvailable, acceptUpdate } = usePWAUpdate();

  if (!updateAvailable) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-sm bg-card border border-border rounded-lg shadow-lg p-4 animate-in slide-in-from-bottom duration-300 z-40">
      <div className="flex items-start gap-3">
        <RefreshCw className="w-5 h-5 text-primary shrink-0 mt-0.5 animate-spin" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">Update Available</p>
          <p className="text-xs text-muted-foreground mt-1">A new version of Wisdom is ready. Refresh to update.</p>
        </div>
        <Button
          size="sm"
          variant="default"
          onClick={acceptUpdate}
          className="shrink-0"
        >
          Update Now
        </Button>
      </div>
    </div>
  );
}
