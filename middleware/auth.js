import { supabase } from "@/shared/supabase"

export default defineNuxtRouteMiddleware(async (to, from) => {
    const {data: {session}} = await supabase.auth.getSession()
    if(!session){
        return navigateTo("/auth/launch")
    }
})
