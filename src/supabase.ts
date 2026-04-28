import { createClient } from '@supabase/supabase-js';

// User provided credentials as fallbacks
// @ts-ignore
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vewqldnybzcatyqpikuw.supabase.co';
// @ts-ignore
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_yQnP_ZEdi2XjpNGWy_0rbw_koaxnbjx';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: false
    },
    // Fix for "Cannot set property fetch of #<Window>" error in some environments
    global: {
      fetch: (url, options) => fetch(url, options)
    }
  }
);
