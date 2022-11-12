<template>
  <div class="album-cover">
    <ALink class="cover" href="111" :title="albumName">
      <img :src="url" alt="封面" />
      <div class="cover-mask"></div>
      <i
        class="cover-play-icon bg-icon-all"
        title="播放"
        @click="onPlayIconClick"
      ></i>
    </ALink>
    <ALink href="122">
      <span class="cover-name text-ellipsis">{{ albumName }}</span>
    </ALink>
    <p class="cover-artists text-ellipsis">
      <template v-for="(artist, index) in props.item.artists" :key="artist.id">
        <template v-if="index % 2 === 1"> &nbsp;/&nbsp; </template>
        <ALink href="122">
          <span class="">{{ artist.name }}</span>
        </ALink>
      </template>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ALink from './ALink.vue';

export interface IAlbumCoverProps {
  item: {
    name: string;
    id: number;
    img: string;
    artists: {
      name: string;
      id: number;
    }[];
  };
}

interface IEmits {
  (e: 'play-icon-click'): void;
  (e: 'cover-click'): void;
}

const props = defineProps<IAlbumCoverProps>();
const emits = defineEmits<IEmits>();

const url = computed(() => {
  return props.item.img + '?param=100y100';
});

const albumName = computed(() => props.item.name);

function onPlayIconClick() {
  console.log(`[AlbumCover] onPlayIconClick`);
}
</script>

<style lang="scss" scoped>
.album-cover {
  width: 118px;
  height: 150px;
  background: url(@/assets/imgs/discover_recommend.png) no-repeat -260px 100px;
  .cover {
    position: relative;
    margin-bottom: 7px;

    &:hover .cover-play-icon {
      display: block;
    }
  }
  .cover-play-icon {
    display: none;
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 22px;
    height: 22px;
    background-position: 0 -85px;
  }

  .cover-mask {
    width: 118px;
    height: 100px;
    background-position: 0 -570px;
  }
  .cover-name {
    display: inline-block;
    width: 110px;
  }
  .cover-artists {
    width: 110px;
    span {
      color: #666;
    }
  }
  span {
    line-height: 18px;
  }
}
</style>
