import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { isSupabaseConfigured, supabase } from './supabase';
import type { Session, User as SupabaseUser } from '@supabase/supabase-js';

export type AuthUser = {
  id: string;
  email: string;
  fullName: string | null;
  avatarUrl: string | null;
  bio: string | null;
};

export type AuthContextValue = {
  user: AuthUser | null;
  session: Session | null;
  isLoading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<AuthUser>) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function fetchUserProfile(userId: string): Promise<AuthUser | null> {
<<<<<<< Updated upstream
  if (!supabase) return null;
=======
  if (!supabase) {
    return null;
  }
>>>>>>> Stashed changes

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.warn('Failed to fetch profile:', error);
    return null;
  }

  if (!data) return null;

  return {
    id: data.id,
    email: data.email,
    fullName: data.full_name,
    avatarUrl: data.avatar_url,
    bio: data.bio,
  };
}

async function createOrUpdateProfile(supabaseUser: SupabaseUser): Promise<AuthUser> {
  if (!supabase) {
    throw new Error('Supabase is not configured');
  }

  const { id, email, user_metadata } = supabaseUser;

  const { data: existingProfile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();

  if (!existingProfile) {
    // Create new profile
    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          id,
          email: email!,
          full_name: user_metadata?.full_name || user_metadata?.name || null,
          avatar_url: user_metadata?.avatar_url || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Failed to create profile:', error);
      throw error;
    }

    return {
      id: data.id,
      email: data.email,
      fullName: data.full_name,
      avatarUrl: data.avatar_url,
      bio: data.bio,
    };
  }

  return {
    id: existingProfile.id,
    email: existingProfile.email,
    fullName: existingProfile.full_name,
    avatarUrl: existingProfile.avatar_url,
    bio: existingProfile.bio,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth session
  useEffect(() => {
    const client = supabase;

    if (!isSupabaseConfigured || !client) {
      setIsLoading(false);
      return;
    }

    const initializeAuth = async () => {
      try {
        const {
          data: { session: currentSession },
        } = await client.auth.getSession();

        setSession(currentSession);

        if (currentSession?.user) {
          const profile = await createOrUpdateProfile(currentSession.user);
          setUser(profile);
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth state changes
<<<<<<< Updated upstream
    if (!client) return;
=======
    if (!client) {
      return;
    }
>>>>>>> Stashed changes

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange(async (event, currentSession) => {
      setSession(currentSession);

      if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        if (currentSession?.user) {
          const profile = await createOrUpdateProfile(currentSession.user);
          setUser(profile);
        }
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
<<<<<<< Updated upstream
    if (!supabase) throw new Error('Supabase is not configured');
=======
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }
>>>>>>> Stashed changes

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) throw error;
  };

  const signIn = async (email: string, password: string) => {
<<<<<<< Updated upstream
    if (!supabase) throw new Error('Supabase is not configured');
=======
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }
>>>>>>> Stashed changes

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
  };

  const signInWithGoogle = async () => {
<<<<<<< Updated upstream
    if (!supabase) throw new Error('Supabase is not configured');
=======
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }
>>>>>>> Stashed changes

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;
  };

  const signOut = async () => {
<<<<<<< Updated upstream
    if (!supabase) throw new Error('Supabase is not configured');
=======
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }
>>>>>>> Stashed changes

    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
  };

  const updateProfile = async (updates: Partial<AuthUser>) => {
<<<<<<< Updated upstream
    if (!supabase) throw new Error('Supabase is not configured');
=======
    if (!supabase) {
      throw new Error('Supabase is not configured');
    }
>>>>>>> Stashed changes

    if (!user) throw new Error('No user logged in');

    const { error } = await supabase.from('profiles').update({
      full_name: updates.fullName,
      avatar_url: updates.avatarUrl,
      bio: updates.bio,
    });

    if (error) throw error;

    setUser((prev) =>
      prev
        ? {
            ...prev,
            ...updates,
          }
        : null
    );
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      session,
      isLoading,
      signUp,
      signIn,
      signInWithGoogle,
      signOut,
      updateProfile,
    }),
    [user, session, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// For backward compatibility
export function useAuthForRedirect() {
  const { signIn, isLoading, user } = useAuth();

  return {
    loginWithRedirect: async (options?: { redirectUrl?: string; initialView?: 'signup' | 'login' }) => {
      if (options?.redirectUrl) {
        window.location.assign(options.redirectUrl);
      }
    },
    user,
    isLoading,
    logout: async () => {
      // Will be called in AuthGuard
    },
  };
}
