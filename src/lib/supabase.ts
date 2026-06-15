import { createClient } from '@supabase/supabase-js';

const viteEnv = import.meta.env as Record<string, string | undefined>;
const nodeEnv = (globalThis as typeof globalThis & {
  process?: { env?: Record<string, string | undefined> };
}).process?.env;

const supabaseUrl =
  viteEnv.VITE_SUPABASE_URL ??
  nodeEnv?.NEXT_PUBLIC_SUPABASE_URL ??
  nodeEnv?.VITE_SUPABASE_URL;

const supabaseAnonKey =
  viteEnv.VITE_SUPABASE_ANON_KEY ??
  nodeEnv?.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  nodeEnv?.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export function getSupabaseClient() {
  if (!isSupabaseConfigured) {
    return null;
  }

  return createClient(supabaseUrl!, supabaseAnonKey!);
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
