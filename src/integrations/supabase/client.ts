// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pbwbqcimguchbnazshxm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBid2JxY2ltZ3VjaGJuYXpzaHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNjQzMTIsImV4cCI6MjA1Mjg0MDMxMn0.d0KNrbHI-B43Bh9gipaKMAPn4HUc4KYYEXvLob4ahYM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);