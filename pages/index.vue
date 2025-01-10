<template>
    <div>
        index page
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: ['auth']
    })
</script>