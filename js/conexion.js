import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = 'https://boyvjnqpvtpyaobjftjj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJveXZqbnFwdnRweWFvYmpmdGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1MTA5MzUsImV4cCI6MTk5NzA4NjkzNX0.zWtH0lov4xHl-znwYQ7xaGp5yVt32oFnWj6kyjv8JVA'
export const supabase = createClient(supabaseUrl, supabaseKey)
console.log("Conectado\n")