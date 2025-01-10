<template>
  <div id="launch-screen" class="p-10 flex flex-col justify-center h-screen">
    
    <div>
      <NuxtImg src="" class="border aspect-square w-full h-full shadow "/>
    </div>
    
    <div>
      <h1>{{ intro.head }}</h1>
      <p>{{ intro.body }}</p>
    </div>
    
    <div class="flex flex-col gap-3 pt-20">
      <Button v-for="item, index in buttons" :key="index" :variant="item.variant" @click="item.action">
        {{ item.label }}
      </Button>
    </div>
  </div>
</template>

<script setup>
  import { Button } from '@/components/ui/button';  

  definePageMeta({
    layout: 'auth'
  })

  //state
  const intro = reactive({
    head: 'Expenso',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, odio!'
  })
  const buttons = reactive([
    {
      label: 'Get Started',
      variant: 'default',
      action: () => navigateTo('/auth/register')
    },
    {
      label: 'I Already Have An Account',
      variant: 'outline',
      action: () => alert('ok')
    }
  ])
</script>

<style>

</style>