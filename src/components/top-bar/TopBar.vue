<template>
  <div class="top-bar">
    <a href="javascript:;" class="logo"></a>
    <TopBarLinks />
    <TopBarSearch />
    <button class="creator">创作者中心</button>
    <a href="javascript:j" class="login">登录</a>
  </div>
</template>

<script setup lang="ts">
import TopBarLinks from './TopBarLinks.vue';
import TopBarSearch from './TopBarSearch.vue';
</script>

<style lang="scss" scoped>
.top-bar {
  background: #242424;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    display: block;
    width: 176px;
    height: 100%;
    background: url(@/assets/imgs/topbar.png);
  }

  .creator {
    margin: 0 15px;
    width: 90px;
    height: 32px;
    padding: 5;
    border: 1px solid #4f4f4f;
    border-radius: 32px;
    outline: 0;
    color: #ccc;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }

  .login {
    color: #787878;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
