<script setup lang="ts">
import NavigationLink from './NavigationLink.vue';
import type { Component } from 'vue';
import { CalendarDaysIcon, HomeIcon, UserIcon } from '@heroicons/vue/24/solid';
import { useRouter } from 'vue-router';

interface ILink {
  icon: Component;
  path: string;
}

const navigationLinks: ILink[] = [
  {
    icon: CalendarDaysIcon,
    path: '/calendar',
  },
  {
    icon: HomeIcon,
    path: '/',
  },
  {
    icon: UserIcon,
    path: '/profile',
  },
];

const router = useRouter();
</script>

<template>
  <footer class="navigation">
    <nav class="navigation__list">
      <NavigationLink
        v-for="link in navigationLinks"
        :path="link.path"
        :icon="link.icon"
        :is-active="link.path === router.currentRoute.value.path"
      />
    </nav>
  </footer>
</template>

<style scoped lang="scss">
.navigation {
  height: var(--height-footer);
  padding: 20px 40px;
  background: white;
  box-shadow: 0 0 10px 3px rgba(232, 232, 232, 0.8);

  &__list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
