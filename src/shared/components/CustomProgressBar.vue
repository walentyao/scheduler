<script setup lang="ts">
import { computed, ref, watch } from 'vue';

interface IStyleProgress {
  backColor: string;
  lineColor: string;
  percentagesColor?: string;
}

interface IProps {
  styleProgress: IStyleProgress;
  percentages: number;
}

const props = defineProps<IProps>();

const refToTextPercentages = ref<HTMLSpanElement>();

const leftShiftFromLine = computed(() => {
  return refToTextPercentages.value?.offsetWidth ?? 0;
});

watch(leftShiftFromLine, () => {
  console.log(leftShiftFromLine);
});

// TODO изучить момент с тем, как пропсы обновляют компонент
</script>

<template>
  <div
    class="progress-bar"
    :style="{
      '--color-back': styleProgress.backColor,
      '--color-line': styleProgress.lineColor,
      '--color-percentages': styleProgress.percentagesColor,
      '--percentages-line': percentages.toString() + '%',
    }"
  >
    <div class="progress-bar__line"></div>
    <div class="progress-bar__percentages">
      <span
        class="progress-bar__percentages_text"
        ref="refToTextPercentages"
        >{{ percentages }}
        <small>%</small>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  --color-back: var(--color-blue);
  --color-line: white;
  --percentages-line: 80%;
  --color-percentages: white;

  background: var(--color-back);
  height: 20px;
  border-radius: 10px;

  overflow: hidden;

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
    color: var(--color-percentages);
    width: 100%;
    height: 100%;

    &_text {
      position: relative;
      left: 13px;
      font-size: 13px;
      text-align: center;
    }
  }
}
</style>
