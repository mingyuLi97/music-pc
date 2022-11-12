<template>
  <a href="javascript:;" class="a-link" @click="handelClick">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import router from '@/router';
import type { RouteLocationRaw } from 'vue-router';
const props = defineProps<{ href: RouteLocationRaw }>();

function handelClick() {
  router.push(props.href);
}
</script>

<style lang="scss" scoped>
.a-link {
  display: inline-block;
  cursor: pointer;
  color: #000;
  &:hover {
    text-decoration: underline;
  }
}
</style>
