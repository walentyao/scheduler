<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <div class="app-layout__page">
      <RouterView v-slot="{ Component }">
        <Transition name="slide-fade">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <div class="app-layout__navigation">
      <RouterView name="navigation" />
    </div>
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
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
