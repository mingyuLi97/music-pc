<template>
  <div class="recommend-main">
    <RecommendTitle
      title="热门推荐"
      @click-title="onClickTitle"
      @click-more="onClickMore"
    >
      123
    </RecommendTitle>
    recommend-main
  </div>
</template>

<script setup lang="ts">
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
