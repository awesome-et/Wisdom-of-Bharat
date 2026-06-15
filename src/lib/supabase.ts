import { createClient } from '@supabase/supabase-js';

const env = globalThis as typeof globalThis & {
  import?: { meta?: { env?: Record<string, string | undefined> } };
  process?: { env?: Record<string, string | undefined> };
};

const supabaseUrl =
  env.import?.meta?.env?.VITE_SUPABASE_URL ??
  env.process?.env?.NEXT_PUBLIC_SUPABASE_URL ??
  env.process?.env?.VITE_SUPABASE_URL;

const supabaseAnonKey =
  env.import?.meta?.env?.VITE_SUPABASE_ANON_KEY ??
  env.process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  env.process?.env?.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  const missing = [
    !supabaseUrl ? 'SUPABASE_URL' : null,
    !supabaseAnonKey ? 'SUPABASE_ANON_KEY' : null,
  ].filter(Boolean).join(' and ');

  throw new Error(
    `Missing Supabase environment variables (${missing}). Set VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY for Vite or NEXT_PUBLIC_SUPABASE_URL/NEXT_PUBLIC_SUPABASE_ANON_KEY for Next.js/V0.`
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
