<script setup lang="ts">
import { CardTask } from '@/entities/CardTask';
</script>

<template>
  <div class="list-tasks">
    <CardTask />
  </div>
</template>

<style scoped lang="scss">
.list-tasks {
  display: flex;
  flex-direction: row;
  column-gap: 12px;
}
</style>
