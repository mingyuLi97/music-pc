<template>
  <div class="playlist-cover" @click="emits('cover-click')">
    <a href="javascript:;" class="cover-mask"> </a>
    <img :src="props.img" alt="" />
    <div class="playlist-cover__info">
      <span>{{ count }}</span>
      <i @click="emits('play-icon-click')"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { numWithUnit } from '@/utils';
import { computed } from 'vue';

interface IProps {
  playCount: number;
  img: string;
}

interface IEmits {
  (e: 'play-icon-click'): void;
  (e: 'cover-click'): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();

const count = computed(() => {
  return numWithUnit(props.playCount);
});
</script>

<style lang="scss" scoped>
.playlist-cover {
  width: 140px;
  height: 140px;
  position: relative;

  .cover-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: url(@/assets/imgs/coverall.png) no-repeat;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 27px;
    padding: 0 10px;
    color: #ccc;
    background: url(@/assets/imgs/coverall.png) no-repeat 0 -537px;

    span {
      font-size: 14px;
      &::before {
        content: '';
        display: inline-block;
        width: 14px;
        height: 11px;
        background: url(@/assets/imgs/iconall.png) no-repeat 0 -24px;
        margin-right: 5px;
      }
    }

    i {
      width: 16px;
      height: 17px;
      background: url(@/assets/imgs/iconall.png) no-repeat;
      cursor: pointer;
    }
  }
}
</style>
