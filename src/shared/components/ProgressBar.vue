<script setup lang="ts">
interface IStyleProgress {
  backColor: string;
  lineColor: string;
}

interface IProps {
  styleProgress: IStyleProgress;
  percentages: number;
}

const props = defineProps<IProps>();
</script>

<template>
  <div
    class="progress-bar"
    :style="{
      '--color-back': styleProgress.backColor,
      '--color-line': styleProgress.lineColor,
      '--percentages-line': percentages.toString() + '%',
    }"
  >
    <div class="progress-bar__line"></div>
    <div class="progress-bar__percentages">{{ percentages }}%</div>
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  --color-back: var(--color-blue);
  --color-line: white;
  --percentages-line: 80%;

  background: var(--color-back);
  height: 20px;
  border-radius: 10px;

  position: relative;

  &__line {
    background: var(--color-line);
    width: var(--percentages-line);
    height: 100%;
    border-radius: 10px;
  }

  &__percentages {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
