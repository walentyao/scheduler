<script setup lang="ts">
import type { Component } from 'vue';

interface IProps {
  icon: Component;
  path: string;
  isActive: boolean;
}

const props = defineProps<IProps>();
</script>

<template>
  <router-link
    :to="path"
    class="link"
  >
    <component
      :is="icon"
      class="link__icon"
      :class="{ link__icon_active: isActive }"
    />
  </router-link>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 30px;
    height: 30px;
    transition: all 0.3s ease;
    fill: #abcef5;

    &_active {
      fill: #006ee9;
    }
  }
}
</style>
