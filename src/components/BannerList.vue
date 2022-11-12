<template>
  <div v-show="isShow" class="banner" :style="bannerBgStyle">
    <div class="main-container">
      <div class="banner-imgs">
        <TransitionGroup name="fade" tag="ul">
          <a
            v-for="(item, index) in bannerList"
            :key="item.imageUrl"
            v-show="index === activeIndex"
            href="javascript:;"
            class="banner-item"
          >
            <img :src="item.imageUrl" alt="" />
          </a>
        </TransitionGroup>

        <ul class="pagination">
          <li
            v-for="(item, index) in bannerList"
            :key="index"
            :class="{ active: index === activeIndex }"
            @click="resetAutoLoop(index)"
          >
            <i></i>
          </li>
        </ul>
      </div>
      <div class="download">
        <button @click="router.push('/download')">下载客户端</button>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import apis from '@/apis';
import { computed, reactive, ref } from 'vue';

const isShow = ref(false);
const bannerList = reactive<any[]>([]);
let loopTimer: number = 0;
const activeIndex = ref(0);

const bannerBgStyle = computed(() => {
  const item = bannerList[activeIndex.value];
  if (item) {
    return {
      backgroundImage: `url(${item.imageUrl}?imageView&blur=40x20)`,
    };
  }
  return {};
});

initBannerList();

router.afterEach(({ fullPath }) => {
  if (fullPath === '/' || fullPath.startsWith('/discover/recommend')) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
});

async function initBannerList() {
  const { banners } = await apis.other.getBanner();
  bannerList.push(...banners);
  // 将背景预先加载，减少第一次切换时背景闪烁
  banners.forEach(({ imageUrl }) => {
    new Image().src = `${imageUrl}?imageView&blur=40x20`;
  });
  resetAutoLoop(0);
}

function resetAutoLoop(idx: number) {
  activeIndex.value = idx;
  loopTimer && clearInterval(loopTimer);
  loopTimer = setInterval(function () {
    activeIndex.value = (activeIndex.value + 1) % bannerList.length;
  }, 3000);
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
$banner-height: 271px;
.banner {
  width: 100%;
  position: relative;
  height: $banner-height;
  background-size: 6000px;
  background-position: center center;
  transition: all 1s ease 0s;
}
.main-container {
  width: $page-main-width;
  height: $banner-height;
  margin: 0 auto;
  display: flex;

  .download {
    flex: 1;
    background: url(@/assets/imgs/download.png);
    button {
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
      opacity: 0;
      cursor: pointer;
    }
    p {
      margin: 5px auto;
      text-align: center;
      color: #8d8d8d;
      font-size: 12px;
    }
  }
}
.banner-imgs {
  flex-basis: 730px;
  position: relative;
  overflow: hidden;
}

.banner-item {
  display: block;
  width: 100%;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.pagination {
  position: absolute;
  bottom: 6px;
  display: flex;
  justify-content: center;
  width: 100%;
  li {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin: 0 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &.active {
      i {
        background-color: #c20c0c;
      }
    }
  }
  i {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: #ffffff;
  }
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
