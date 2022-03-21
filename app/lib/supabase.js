import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ksuqpgnqmkkfhhqkdzuk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdXFwZ25xbWtrZmhocWtkenVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc3NjQ3NjYsImV4cCI6MTk2MzM0MDc2Nn0.o6ofzvD9WGEYj4jtHeooxUNDeaNbE1NBpFwALJIETOI'
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function loginWithGoogle(){
    const { user, session, error } = await supabase.auth.signIn({
        provider: 'google'
      })
    return {user,session,error}
}

export async function logout(){
    const { error } = await supabase.auth.signOut()
    window.location.reload()
}