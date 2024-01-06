<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <div class="app-layout__page">
      <RouterView />
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
</style>
