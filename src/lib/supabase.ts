import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  school_name: string;
  school_website: string;
  tier: 'bronze' | 'silver' | 'gold';
  contact_sheet_approved_at: string | null;
  paid_at: string | null;
  created_at: string;
}

export interface ProjectFile {
  id: string;
  customer_id: string;
  type: 'contact_sheet' | 'final_assets';
  filename: string;
  file_path: string;
  created_at: string;
}