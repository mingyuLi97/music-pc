<template>
  <div class="recommend-side">
    <UserCard />
    <HotArtists />
    <HotDj />
  </div>
</template>

<script setup lang="ts">
import HotArtists from './HotArtists.vue';
import HotDj from './HotDj.vue';
import UserCard from './UserCard.vue';
</script>

<style lang="scss" scoped>
.recommend-side {
  box-sizing: border-box;
  flex: 1;
  width: 252px;
  border: 1px solid #ccc;
  border-left: none;
}
</style>
