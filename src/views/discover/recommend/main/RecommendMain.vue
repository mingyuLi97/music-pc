<template>
  <div class="recommend-main">
    <HotRecommend />
    <NewestAlbum />
    recommend-main
  </div>
</template>

<script setup lang="ts">
import HotRecommend from './HotRecommend.vue';
import NewestAlbum from './NewestAlbum.vue';

import RecommendTitle from '../RecommendTitle.vue';

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
  border: 1px solid #d3d3d3;
}
</style>
