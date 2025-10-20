
import { createBrowserClient } from "@supabase/ssr"


export const BrowserClient = createBrowserClient(
 process.env.NEXT_PUBLIC_SUPABASE_URL,
 process.env.NEXT_PUBLIC_SUPABASE_KEY
)