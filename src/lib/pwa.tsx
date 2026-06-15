import { useEffect, useState } from 'react';

type InstallPromptEvent = Event & {
  prompt?: () => Promise<void>;
  userChoice?: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

export function usePWAInstall() {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as InstallPromptEvent);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA installed');
      setIsInstalled(true);
      setInstallPrompt(null);
      setIsInstallable(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const requestInstall = async () => {
    if (!installPrompt) return false;

    try {
      const prompt = installPrompt;
      await prompt.prompt?.();
      let userChoice: { outcome: 'accepted' | 'dismissed' };
      
      if (prompt.userChoice) {
        userChoice = await prompt.userChoice;
      } else {
        userChoice = { outcome: 'dismissed' };
      }
      
      const { outcome } = userChoice;
      
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setInstallPrompt(null);
        return true;
      }
    } catch (err) {
      console.error('Failed to show install prompt:', err);
    }
    return false;
  };

  return {
    installPrompt,
    isInstallable,
    isInstalled,
    requestInstall,
  };
}

export function usePWAOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export function usePWAUpdate() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    const handleControllerChange = () => {
      setUpdateAvailable(false);
      window.location.reload();
    };

    const handleServiceWorkerUpdate = async (reg: ServiceWorkerRegistration) => {
      const onStateChange = () => {
        if (reg.waiting?.state === 'installed') {
          setUpdateAvailable(true);
          setRegistration(reg);
          navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange);
        }
      };

      reg.addEventListener('updatefound', () => {
        if (reg.installing) {
          reg.installing.addEventListener('statechange', onStateChange);
        }
      });

      // Check for updates
      reg.update().catch(() => {
        // Silently ignore update check errors
      });
    };

    navigator.serviceWorker.ready.then((reg) => {
      handleServiceWorkerUpdate(reg);
      
      // Periodically check for updates
      setInterval(() => {
        reg.update().catch(() => {
          // Silently ignore
        });
      }, 60000); // Every 60 seconds
    });

    return () => {
      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange);
    };
  }, []);

  const acceptUpdate = () => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      setUpdateAvailable(false);
    }
  };

  return {
    updateAvailable,
    acceptUpdate,
  };
}
