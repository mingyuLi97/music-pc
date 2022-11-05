<template>
  <div class="top-bar-search">
    <div class="search-container">
      <i></i>
      <input
        type="text"
        placeholder="音乐/视频/电台/用户"
        v-model="searchValue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchValue = ref('');
</script>

<style lang="scss" scoped>
.top-bar-search {
  width: 158px;
  height: 100%;
  margin-left: 40px;
  display: flex;
  align-items: center;
}
.search-container {
  width: 100%;
  height: 32px;
  border-radius: 32px;
  background-color: #fff;
  display: flex;
  align-items: center;
  overflow: hidden;
  i {
    display: block;
    width: 32px;
    height: 32px;
    background: url(@/assets/imgs/topbar.png) no-repeat 0 -99px;
  }
  input {
    outline: 0;
    border: 0;
    line-height: 16px;
    height: 16px;
    width: 75%;
  }
}
</style>
