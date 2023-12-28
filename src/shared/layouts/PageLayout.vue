<script setup lang="ts"></script>

<template>
  <div class="page-layout">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  margin-bottom: var(--height-footer);

  height: 100%;
  overflow: auto;
}
</style>
