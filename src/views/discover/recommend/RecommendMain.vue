<template>
  <div class="recommend-main">
    <HotRecommend />
    recommend-main
  </div>
</template>

<script setup lang="ts">
import HotRecommend from './main/HotRecommend.vue';

import RecommendTitle from './RecommendTitle.vue';

function onClickTitle() {
  console.log(`[RecommendMain] onClickTitle`);
}

function onClickMore() {
  console.log(`[RecommendMain] onClickMore`);
}
</script>

<style lang="scss" scoped>
.recommend-main {
  width: 730px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
