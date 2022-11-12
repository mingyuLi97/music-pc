<template>
  <div class="new-album">
    <MainTitle
      title="新碟上架"
      @click-title="onClickTitle"
      @click-more="onClickMore"
    />
    <div class="new-album-container">
      <div class="inner">
        <button @click="onPrevClick"></button>
        <Swiper class="roller" :loop="true" @swiper="onSwiper">
          <swiper-slide
            v-for="(albumList, index) in albumListArr"
            :key="index"
            class="roller-item"
          >
            <AlbumCover v-for="item in albumList" :key="item.id" :item="item" />
          </swiper-slide>
        </Swiper>
        <button @click="onNextClick"></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import apis from '@/apis';
import AlbumCover from '@/components/AlbumCover.vue';
import type { IAlbumCoverProps } from '@/components/AlbumCover.vue';
import MainTitle from './MainTitle.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { reactive } from 'vue';
import type { Swiper as SwiperType } from 'swiper/types';

const albumListArr = reactive<IAlbumCoverProps['item'][][]>([]);
let swiperInstance = reactive<SwiperType>(null as any);

init();

function onClickTitle() {}
function onClickMore() {}

async function init() {
  const { code, albums } = await apis.discover.recommend.getNewestAlbum();
  if (code !== 200) {
    console.error('最新专辑接口错误 code: ', code);
    return;
  }
  const temp: IAlbumCoverProps['item'][] = [];
  for (let i = 0; i < albums.length; i++) {
    const album = albums[i];
    temp.push({
      name: album.name,
      id: album.id,
      img: album.picUrl,
      artists: album.artists.map((item) => ({ name: item.name, id: item.id })),
    });
    if ((i + 1) % 5 === 0) {
      albumListArr.push(temp.slice());
      temp.length = 0;
    }
  }
  console.log(`[NewestAlbum] `, albums);
}

function onSwiper(swiper: SwiperType) {
  swiperInstance = swiper;
}

function onPrevClick() {
  swiperInstance.slidePrev(1000);
}
function onNextClick() {
  swiperInstance.slideNext(1000);
}
</script>

<style lang="scss" scoped>
.new-album-container {
  position: relative;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
  background: #f5f5f5;
  .inner {
    display: flex;
    align-items: center;
    height: 184px;
    border: 1px solid #fff;
    .roller {
      flex: 1;
      display: flex;
    }
    // 运行时的 swiper-slide 上没有 data-v-xxxx ，会丢失选择器
    &:deep(.roller-item) {
      display: flex;
      justify-content: space-between;
    }

    button {
      flex-shrink: 0;
      width: 17px;
      height: 17px;
      cursor: pointer;
      background: url(@/assets/imgs/discover_recommend.png) no-repeat center;
      &:first-of-type {
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }
      &:last-of-type {
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }
  }
}
</style>
