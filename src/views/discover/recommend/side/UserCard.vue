<template>
  <div v-if="isLogin">已登录</div>
  <div v-else class="not-login-container bg-discover-recommend">
    登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
    <button class="bg-discover-recommend pointer">用户登录</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isLogin = ref(false);
</script>

<style lang="scss" scoped>
.not-login-container {
  box-sizing: border-box;
  height: 124px;
  background-position: 0 0;
  padding: 16px;
  line-height: 22px;
  color: #666;
  button {
    margin: 20px auto 0;
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    background-position: 0 -195px;
  }
}
</style>
