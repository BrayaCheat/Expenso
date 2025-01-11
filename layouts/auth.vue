<template>
   <div class="max-w-[430px] w-[430px] h-screen flex flex-col mx-auto">
         <nav v-if="isShowNavBar" class="p-6 border-none">
            <Button variant="ghost" @click="onGoBack">
               <component :is="ChevronLeft"/>
               Back
            </Button>
         </nav>
        <slot/>
        <Toaster/>
   </div>
</template>

<script setup>
   import { Toaster } from '@/components/ui/sonner'
   import { ChevronLeft } from 'lucide-vue-next';
   import { Button } from '@/components/ui/button';

   const route = useRoute()
   const router = useRouter()

   const isShowNavBar = computed(() => route.path === '/auth/login' || route.path === '/auth/register')

   const onGoBack = () => {
      router.go(-1)
   }
</script>