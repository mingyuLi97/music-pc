<template>
  <div class="recommend-container">
    <RecommendMain />
    <RecommendSide />
  </div>
</template>

<script setup lang="ts">
import apis from '@/apis';
import RecommendMain from './main/RecommendMain.vue';
import RecommendSide from './side/RecommendSide.vue';

initData();

async function initData() {
  const res = await apis.discover.recommend.getRecommendPlaylist(8);
  console.log(`[RecommendView] `, res);
}
</script>

<style lang="scss" scoped>
.recommend-container {
  width: 100%;
  display: flex;
  box-sizing: border-box;
}
</style>
