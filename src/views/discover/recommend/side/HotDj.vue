<template>
  <div class="recommend-hot-dj">
    <SideTitle title="热门主播" />
    <ALink
      v-for="djInfo in djInfoList"
      :key="djInfo.id"
      href="dj"
      class="dj-info"
    >
      <img :src="djInfo.avatar" />
      <span>{{ djInfo.name }}</span>
    </ALink>
  </div>
</template>

<script setup lang="ts">
import { getHotDj } from '@/apis/dj';
import ALink from '@/components/ALink.vue';
import { reactive } from 'vue';
import SideTitle from './SideTitle.vue';

interface IDjInfo {
  name: string;
  avatar: string;
  id: number;
}

const djInfoList = reactive<IDjInfo[]>([]);

init();

async function init() {
  const { code, data } = await getHotDj(5);
  if (code !== 200) {
    console.error('获取热门电台主播接口失败 code: ', code);
    return;
  }
  data.list.forEach(({ nickName, id, avatarUrl }) => {
    djInfoList.push({
      name: nickName,
      avatar: avatarUrl,
      id,
    });
  });
}
</script>

<style lang="scss" scoped>
.recommend-hot-dj {
  margin: 20px;
  .dj-info {
    width: 210px;
    height: 50px;
    display: flex;
    align-items: center;

    &:first-of-type {
      margin-top: 20px;
    }
    img {
      width: 40px;
      height: 40px;
      margin-right: 14px;
      box-sizing: border-box;
      border: 1px solid #ccc;
    }
  }
}
</style>
