<script setup lang="ts">
import { CardTask } from '@/entities/CardTask';
</script>

<template>
  <div class="list-tasks">
    <CardTask
      :data="{ title: 'Ui Design', days: '10', image: { src: '/iconui.svg', alt: 'ui' } }"
      :task-complete-progress="70"
    />
    <CardTask
      :data="{ title: 'Ui Design', days: '10', image: { src: '/iconui.svg', alt: 'ui' } }"
      :task-complete-progress="70"
    />
    <CardTask
      :data="{ title: 'Ui Design', days: '10', image: { src: '/iconui.svg', alt: 'ui' } }"
      :task-complete-progress="70"
    />
  </div>
</template>

<style scoped lang="scss">
.list-tasks {
  display: flex;
  flex-direction: row;
  column-gap: 12px;
}
</style>
