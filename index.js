import {supabase} from "./conexion.js"

const { data, error } = await supabase.auth.signUp({
    email: 'lamifip241@raotus.com',
    password: 'example-password',
  })
  