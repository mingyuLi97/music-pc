<template>
  <a
    v-for="(item, index) in links"
    :key="index"
    :href="item.href || 'javascript:;'"
    :target="item.target"
    class="link"
    :class="{ active: index === activeIndex }"
    @click="item.onClick"
  >
    <span v-if="item.hot" class="hot" @click.prevent></span>
    {{ item.content }}
  </a>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';

const links = [
  {
    content: '发现音乐',
    onClick() {
      router.push('/discover');
    },
  },
  {
    content: '我的音乐',
    onClick() {
      router.push('/my-music');
    },
  },
  {
    content: '关注',
    onClick() {
      router.push('/friends');
    },
  },
  {
    content: '商城',
    href: 'https://music.163.com/store/product',
    target: '_blank',
  },
  {
    content: '音乐人',
    target: '_blank',
    href: 'https://music.163.com/st/musician',
  },
  {
    content: '下载客户端',
    hot: true,
    onClick() {
      router.push('/download');
    },
  },
];

const activeIndex = ref(0);
router.afterEach((to) => {
  const p = to.fullPath;
  if (p.startsWith('/discover')) {
    activeIndex.value = 0;
  } else if (p.startsWith('/my-music')) {
    activeIndex.value = 1;
  } else if (p.startsWith('/friends')) {
    activeIndex.value = 2;
  }
});
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  display: block;
  color: #ccc;
  font-size: 14px;
  line-height: 70px;
  padding: 0 19px;

  &:hover,
  &.active {
    background-color: #000;
  }

  &.active {
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-bottom: 6px solid #c20c0c;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .hot {
    display: block;
    position: absolute;
    top: 18px;
    right: -8px;
    width: 28px;
    height: 29px;
    background: url(@/assets/imgs/topbar.png) no-repeat -190px 0;
  }
}
</style>
