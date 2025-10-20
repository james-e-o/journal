import { createClient } from '@supabase/supabase-js'
import { createServerClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY



export const supabase = createClient(supabaseUrl, supabaseKey)