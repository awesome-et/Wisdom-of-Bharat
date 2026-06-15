import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local');
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
