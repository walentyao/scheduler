<script setup lang="ts"></script>

<template>
  <div class="page-layout">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  justify-content: center;

  overflow: auto;
}
</style>
