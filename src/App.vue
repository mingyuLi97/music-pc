<template>
  <TopBar />
  <SubNav />
  <RouterView />
</template>

<script setup lang="ts">
import TopBar from './components/top-bar/TopBar.vue';
import SubNav from './components/sub-nav/SubNav.vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import { getHomepage } from '@/apis';

const route = useRoute();
const router = useRouter();
// router.beforeEach((to, from, next) => {
//   console.log(`[App] to,`, from, to);
//   next();
// });

getHomepage().then(console.log);
</script>

<style scoped></style>
