import { createClient } from '@supabase/supabase-js';

declare const process:
  | {
    env: Record<string, string | undefined>;
  }
  | undefined;

const viteEnv = import.meta.env as Record<string, string | undefined>;
const runtimeEnv = typeof process !== 'undefined' ? process.env : undefined;

function pickFirst(...values: Array<string | undefined>) {
  for (const value of values) {
    if (typeof value === 'string' && value.trim().length > 0) {
      return value.trim();
    }
  }
  return undefined;
}

// Support common env naming used by Vite, Next.js/V0, and Supabase integrations.
const supabaseUrl = pickFirst(
  viteEnv.VITE_SUPABASE_URL,
  viteEnv.NEXT_PUBLIC_SUPABASE_URL,
  viteEnv.SUPABASE_URL,
  runtimeEnv?.NEXT_PUBLIC_SUPABASE_URL,
  runtimeEnv?.VITE_SUPABASE_URL,
  runtimeEnv?.SUPABASE_URL,
);

const supabaseAnonKey = pickFirst(
  viteEnv.VITE_SUPABASE_ANON_KEY,
  viteEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  viteEnv.SUPABASE_ANON_KEY,
  runtimeEnv?.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  runtimeEnv?.VITE_SUPABASE_ANON_KEY,
  runtimeEnv?.SUPABASE_ANON_KEY,
);

const appBaseUrl = pickFirst(
  viteEnv.VITE_APP_URL,
  viteEnv.NEXT_PUBLIC_APP_URL,
  runtimeEnv?.VITE_APP_URL,
  runtimeEnv?.NEXT_PUBLIC_APP_URL,
);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
export const supabaseConfigSource =
  viteEnv.VITE_SUPABASE_URL ? 'vite' :
    viteEnv.NEXT_PUBLIC_SUPABASE_URL ? 'next-public-vite-env' :
      runtimeEnv?.NEXT_PUBLIC_SUPABASE_URL ? 'next-public-process-env' :
        runtimeEnv?.SUPABASE_URL ? 'supabase-runtime-env' :
          'missing';

export function getAuthCallbackUrl() {
  const base = appBaseUrl || (typeof window !== 'undefined' ? window.location.origin : undefined);
  if (!base) return undefined;
  return `${base.replace(/\/$/, '')}/auth/callback`;
}

export function getSupabaseClient() {
  if (!isSupabaseConfigured) {
    return null;
  }

  return createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      flowType: 'implicit', // Changed from 'pkce' to 'implicit'
      detectSessionInUrl: true,
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}

export const supabase = getSupabaseClient();

// Type definitions for database
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
        };
        Update: {
          full_name?: string | null;
          avatar_url?: string | null;
          bio?: string | null;
        };
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: number;
          completed: boolean;
          score: number | null;
          completed_at: string | null;
        };
        Insert: {
          user_id: string;
          lesson_id: number;
          completed?: boolean;
          score?: number | null;
        };
        Update: {
          completed?: boolean;
          score?: number | null;
          completed_at?: string | null;
        };
      };
    };
  };
};
