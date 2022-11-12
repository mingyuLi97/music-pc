<template>
  <div class="recommend-main-title">
    <h2 @click="emits('click-title')">{{ props.title }}</h2>
    <div class="slot">
      <slot></slot>
    </div>
    <span class="more" @click="emits('click-more')">更多</span>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
}

interface IEmits {
  (e: 'click-title'): void;
  (e: 'click-more'): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();
</script>

<style lang="scss" scoped>
.recommend-main-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c10d0c;
  height: 33px;

  & > h2:first-of-type {
    color: #c10d0c;
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    &::before {
      content: '';
      display: inline-flex;
      width: 33px;
      height: 100%;
      background: url(@/assets/imgs/discover_recommend.png) no-repeat -225px -156px;
    }
  }
  .slot {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .more {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    color: #666;
    &:hover {
      text-decoration: underline;
    }
    &::after {
      content: '';
      display: inline-flex;
      width: 12px;
      height: 12px;
      margin: 0 10px 0 4px;
      background: url(@/assets/imgs/discover_recommend.png) no-repeat 0 -240px;
    }
  }
}
</style>
