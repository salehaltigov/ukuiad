<template>
  <VApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VApp>
</template>

<script setup lang="ts">
useHead({
  title: 'РГЭУ (РИНХ)',
  link: [
    {
      rel: 'icon',
      href: '/static/favicon.ico',
    },
  ],
})
</script>
