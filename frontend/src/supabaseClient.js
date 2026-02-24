import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hcqqppspsvotqviupzsp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjcXFwcHNwc3ZvdHF2aXVwenNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NjIzNzYsImV4cCI6MjA4NjEzODM3Nn0.HUWr0duKmwWHCaB2F-oJHKOVNkfWKMXLFjlX4zER0KU';

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
