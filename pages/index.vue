<template>
    <div>
        index page

        <Button variant="destructive" @click="onLogout">Logout</Button>

        <h1>user <span>{{ userStore.user }}</span></h1>
    </div>
</template>

<script setup>
    import { useUserStore } from '@/store/user';
    import { Button } from '@/components/ui/button';
    import { supabase } from '@/shared/supabase';

    definePageMeta({
        middleware: "auth"
    })

    const userStore = useUserStore()

    const onLogout = async () => {
        const {error} = await supabase.auth.signOut()
        window.location.reload()
        if(error){
            console.log(error)
        }
        userStore.user = null
    }
</script>