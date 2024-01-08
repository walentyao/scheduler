<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavigationFooter from '@/widgets/NavigationFooter/components/NavigationFooter.vue';

const route = useRoute();
</script>

<template>
  <div class="app-layout">
    <div class="app-layout__page">
      <RouterView v-slot="{ Component }">
        <Transition name="slide-fade">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <Transition name="slide-fade-nav">
      <div
        class="app-layout__navigation"
        v-if="route.meta.navigation"
      >
        <NavigationFooter />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.app-layout {
  --height-footer: 70px;
  position: relative;
  height: 100vh;

  display: flex;
  flex-direction: column;

  &__page {
    flex: 1;
    margin-bottom: var(--height-footer);
  }

  &__navigation {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    width: 100%;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-nav-enter-active {
  transition: all 0.3s ease-in;
}

.slide-fade-nav-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-nav-enter-from,
.slide-fade-nav-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
