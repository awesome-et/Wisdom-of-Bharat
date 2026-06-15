import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Loader2, Save, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ProfilePage() {
  const { user, updateProfile, signOut } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    bio: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || '',
        bio: user.bio || '',
      });
    }
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    try {
      setIsSaving(true);
      setError(null);

      await updateProfile({
        fullName: formData.fullName || undefined,
        bio: formData.bio || undefined,
      });

      toast.success('Profile updated successfully');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update profile';
      setError(message);
      toast.error(message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      await signOut();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Sign out failed';
      setError(message);
      toast.error(message);
    } finally {
      setIsSigningOut(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-serif mb-2">Profile & Settings</h1>
        <p className="text-muted-foreground">Manage your account information</p>
      </div>

      <div className="space-y-6">
        {/* Account Information */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Account Information</h2>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={user.email}
                disabled
                className="mt-1 bg-muted"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Email cannot be changed
              </p>
            </div>

             <div>
              <Label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                disabled
                className="mt-1 bg-muted"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Full Name cannot be changed
              </p>
            </div>

            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive rounded-md flex gap-2">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Security</h2>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your account is protected.
            </p>
            <Button
              variant="outline"
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="w-full"
            >
              {isSigningOut && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Sign Out
            </Button>
          </div>
        </Card>

        {/* Account Info */}
        <Card className="p-6 bg-muted/30">
          <h2 className="text-xl font-bold mb-4">Account Info</h2>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">User ID:</span>
              <p className="font-mono text-xs break-all">{user.id}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Member Since:</span>
              <p>Today</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
