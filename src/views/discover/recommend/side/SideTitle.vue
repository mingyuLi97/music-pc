<template>
  <div class="recommend-side-title">
    <h3>{{ props.title }}</h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
}
const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.recommend-side-title {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  height: 23px;
  h3 {
    color: #333;
    font-weight: bold;
  }
  span {
    color: #666;
  }
}
</style>
