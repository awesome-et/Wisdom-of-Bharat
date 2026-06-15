# Supabase Setup Guide - Wisdom of Bharat

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Choose a region closest to you
5. Set a strong database password

## 2. Get Your API Keys

1. Go to Project Settings → API
2. Copy **Project URL** and paste it as `VITE_SUPABASE_URL` in `.env.local`
3. Copy **anon public** key and paste it as `VITE_SUPABASE_ANON_KEY` in `.env.local`
4. Create `.env.local` file (copy from `.env.example`)

## 3. Create Database Tables

Go to SQL Editor in your Supabase dashboard and run these SQL queries:

### Create profiles table
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own profile" 
  ON profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" 
  ON profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);
```

### Create user_progress table
```sql
CREATE TABLE user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id INTEGER NOT NULL,
  completed BOOLEAN DEFAULT false,
  score INTEGER,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, lesson_id)
);

-- Enable RLS
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own progress" 
  ON user_progress FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own progress" 
  ON user_progress FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" 
  ON user_progress FOR UPDATE 
  USING (auth.uid() = user_id);
```

## 4. Configure Google OAuth (Optional)

1. Go to Authentication → Providers
2. Click "Google"
3. Go to [Google Cloud Console](https://console.cloud.google.com/)
4. Create a new project or select existing
5. Enable Google+ API
6. Go to Credentials → Create OAuth 2.0 Client ID
7. Set **Authorized JavaScript origins** to your app URL
8. Set **Authorized redirect URIs** to `https://your-project.supabase.co/auth/v1/callback`
9. Copy Client ID and Client Secret to Supabase Google provider settings

## 5. Configure Auth Redirect URLs

Go to Authentication → URL Configuration and add:
- **Redirect URLs**: 
  - `http://localhost:5173/auth/callback` (development)
  - `https://your-domain.com/auth/callback` (production)

## 6. Update Landing Page (Optional)

Update the Landing page to redirect auth buttons to `/auth/login`:
- "Log in" button → onClick: navigate to `/auth/login?mode=login`
- "Sign up" button → onClick: navigate to `/auth/login?mode=signup`

## 7. Test the Setup

1. Copy `.env.example` to `.env.local`
2. Add your Supabase credentials
3. Run `npm run dev`
4. Try signing up with email/password
5. Try signing in with Google (if configured)

## Troubleshooting

### "Missing environment variables"
- Make sure `.env.local` exists with correct credentials
- Restart dev server after creating `.env.local`

### "Email already registered"
- Each email can only be used once. Use a different email for testing.

### "Google sign-in not working"
- Verify redirect URLs are correct in Google Cloud Console
- Check that Google provider is enabled in Supabase

### Database query errors
- Make sure tables were created successfully
- Check RLS policies are correct
- Verify user role has permission to access tables

## Security Notes

- Never commit `.env.local` to git
- Use strong passwords for Supabase
- Keep API keys secret
- Enable CORS properly for your domains
- Monitor API usage in Supabase dashboard
