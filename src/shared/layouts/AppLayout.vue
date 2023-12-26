<script setup lang="ts"></script>

<template>
  <div class="app-layout">
    <RouterView />
    <RouterView name="navigation" />
  </div>
</template>

<style lang="scss">
.app-layout {
  --height-footer: 70px;
  position: relative;
}
</style>
