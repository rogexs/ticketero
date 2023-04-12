import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';


const supabaseUrl = 'https://eeiqwuqxyhyhgdzbzydt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlaXF3dXF4eWh5aGdkemJ6eWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyNDYwNTksImV4cCI6MTk5NjgyMjA1OX0.4mffisYHOJgJcr1UVn5a4utKpMeZhMwSSQ-Gt7CLUUU'
export const supabase = createClient(supabaseUrl, supabaseKey)
console.log("gdfsg")