<template>
  <ul class="sub-nav">
    <li
      v-for="(item, index) in curRenderItems"
      :key="item.content"
      class="sub-nav-item"
      @click="handleClick(item)"
    >
      <span :class="{ active: index === activeIndex }">{{ item.content }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ISubNavItem, MainRoute } from '@/types';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

let curRenderItems = reactive<ISubNavItem[]>([]);
let curMainRoute: MainRoute | undefined = undefined;
const activeIndex = ref(0);

const discoverViewItems: ISubNavItem[] = [
  { content: '推荐', path: '/discover/recommend' },
  { content: '排行榜', path: '/discover/top-list' },
  { content: '歌单', path: '/discover/play-list' },
  { content: '主播电台', path: '/discover/dj-radio' },
  { content: '歌手', path: '/discover/artist' },
  { content: '歌碟上架', path: '/discover/album' },
];

router.afterEach(({ fullPath }) => {
  if (fullPath === '/' || fullPath.startsWith('/discover')) {
    changeToDiscover(fullPath);
  } else {
    changeToOther();
  }
});

function changeToDiscover(fullPath: string) {
  // 更新 curRenderItems
  if (curMainRoute !== 'discover') {
    curMainRoute = 'discover';
    curRenderItems.length = 0;
    curRenderItems.push(...discoverViewItems);
  }
  // 更新 active
  activeIndex.value = discoverViewItems.findIndex(
    ({ path }) => path === fullPath
  );
}

// 切换到没有子路由的页面
function changeToOther() {
  curRenderItems.length = 0;
  curMainRoute = undefined;
}

function handleClick(item: ISubNavItem) {
  router.push(item.path);
}
</script>

<style lang="scss" scoped>
.sub-nav {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c20c0c;
  min-height: 5px;
  border-bottom: 1px solid #a40011;
  &-item {
    padding: 7px 0;
    margin: 0 17px;
    span {
      display: block;
      height: 20px;
      border-radius: 20px;
      padding: 0 13px;
      color: #fff;
      font-weight: 200;
      font-size: 14px;
      cursor: pointer;
      &.active,
      &:hover {
        background: #9b0909;
      }
    }
  }
}
</style>
