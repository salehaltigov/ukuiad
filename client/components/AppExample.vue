<template>
  <div class="app-example">
    <client-only>
      <Vue3Lottie
        :animation-data="RocketJSON"
        :height="600"
        :width="600"
      />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import RocketJSON from 'images/animation_rocket.json'
</script>

