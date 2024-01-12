<script setup lang="ts">
interface IOptions {
  width?: number;
  height?: number;
}

interface IProps {
  src: string;
  alt: string;
  options: IOptions;
}

defineProps<IProps>();
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :style="{
      '--container-image-width': options.width?.toString() + 'px',
      '--container-image-height': options.height?.toString() + 'px',
    }"
    class="image"
  />
</template>

<style scoped lang="scss">
.image {
  --container-image-width: 24px;
  --container-image-height: 24px;

  width: var(--container-image-width);
  height: var(--container-image-height);
}
</style>
