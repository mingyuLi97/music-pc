<template>
  <TopBar />
  <RouterView />
</template>

<script setup lang="ts">
import TopBar from './components/top-bar/TopBar.vue';
import { RouterLink, RouterView } from 'vue-router';

import { getHomepage } from '@/apis';

getHomepage().then(console.log);
</script>

<style scoped></style>
