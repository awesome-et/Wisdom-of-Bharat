import { createClient } from '@supabase/supabase-js';

declare const process:
  | {
      env: Record<string, string | undefined>;
    }
  | undefined;

const viteEnv = import.meta.env as Record<string, string | undefined>;
const nextPublicSupabaseUrl = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_SUPABASE_URL : undefined;
const nextPublicSupabaseAnonKey = typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : undefined;

const supabaseUrl =
  viteEnv.VITE_SUPABASE_URL ??
  nextPublicSupabaseUrl;

const supabaseAnonKey =
  viteEnv.VITE_SUPABASE_ANON_KEY ??
  nextPublicSupabaseAnonKey;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
export const supabaseConfigSource = viteEnv.VITE_SUPABASE_URL ? 'vite' : nextPublicSupabaseUrl ? 'next-public' : 'missing';

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
