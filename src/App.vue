<template>
  <TopBar />
  <SubNav />
  <BannerList />
  <main class="page_main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import TopBar from './components/top-bar/TopBar.vue';
import SubNav from './components/sub-nav/SubNav.vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import { getHomepage } from '@/apis';
import BannerList from './components/BannerList.vue';

const route = useRoute();
const router = useRouter();
// router.beforeEach((to, from, next) => {
//   console.log(`[App] to,`, from, to);
//   next();
// });

getHomepage().then(console.log);
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.page_main {
  width: $page-main-width;
  margin: 0 auto;
  background-color: pink;
}
</style>
