<template>
  <div class="hot-recommend">
    <MainTitle
      title="热门推荐"
      @click-title="onClickTitle"
      @click-more="onClickMore"
    >
    </MainTitle>
    <div class="playlist-grid">
      <div
        v-for="(item, index) in playlistArr"
        :key="index"
        class="playlist-grid-item"
      >
        <PlaylistCover
          :img="item.picUrl"
          :play-count="item.playCount"
          @cover-click="goPlaylistDetail(item)"
          @play-icon-click="playPlaylist(item)"
        />
        <a
          href="javascript:;"
          class="playlist-name"
          @click="goPlaylistDetail(item)"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainTitle from './MainTitle.vue';
import PlaylistCover from '@/components/PlaylistCover.vue';
import apis from '@/apis';
import { reactive } from 'vue';
import type { PersonalizedPlaylistItem } from '@/types/apis/discover/recommend';

const playlistArr = reactive<PersonalizedPlaylistItem[]>([]);

initData();

async function initData() {
  const { result } = await apis.discover.recommend.getRecommendPlaylist(8);
  playlistArr.push(...result);
}
function onClickTitle() {}
function onClickMore() {}

function goPlaylistDetail(item: PersonalizedPlaylistItem) {
  console.log(`[HotRecommend] goPlaylistDetail`, item.id);
}

function playPlaylist(item: PersonalizedPlaylistItem) {
  console.log(`[HotRecommend] playPlaylist`, item.id);
}
</script>

<style lang="scss" scoped>
.playlist-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0 10px 0;
  .playlist-grid-item {
    // flex: 25%;
    height: 204px;
    width: 140px;
  }
  .playlist-name {
    color: #000;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
