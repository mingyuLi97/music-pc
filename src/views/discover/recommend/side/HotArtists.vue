<template>
  <div class="recommend-hot-artists">
    <SideTitle title="热门歌手">
      <span class="pointer">查看全部></span>
    </SideTitle>
    <ALink
      href="info.id"
      v-for="info in artistInfoList"
      :key="info.id"
      class="art-container"
    >
      <img class="art-avatar" :src="info.avatar" />
      <div class="art-info flex">
        <b>{{ info.name }}</b>
        <p class="text-ellipsis">{{ info.desc }}</p>
      </div>
    </ALink>
  </div>
</template>

<script setup lang="ts">
import ALink from '@/components/ALink.vue';
import SideTitle from './SideTitle.vue';
import { getHotArtist } from '@/apis/artist';
import { reactive } from 'vue';

interface IArtistInfo {
  name: string;
  id: number;
  desc: string;
  avatar: string;
}

const artistInfoList = reactive<IArtistInfo[]>([]);
init();

async function init() {
  const { code, artists } = await getHotArtist(5);
  if (code !== 200) {
    console.error('获取热门歌手接口错误 code: ', code);
    return;
  }

  artists.forEach(({ name, id, picUrl, alias }) => {
    artistInfoList.push({
      name,
      id,
      desc: alias.join(','),
      avatar: picUrl,
    });
  });
}
</script>

<style lang="scss" scoped>
.recommend-hot-artists {
  margin: 20px;
  .art-container {
    display: flex;
    box-sizing: border-box;
    background: #fafafa;
    margin-top: 18px;
    &:hover {
      text-decoration: none;
      background: #ffffff;
    }
  }

  .art-avatar {
    width: 62px;
    height: 62px;
  }
  .art-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 14px;
    border: 1px solid #e9e9e9;
    b {
      font-size: 14px;
    }
    p {
      width: 120px;
      color: #666;
    }
  }
}
</style>
