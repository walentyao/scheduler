<script setup lang="ts">
import { computed, onMounted, onUpdated, ref } from 'vue';

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

const refToLine = ref<HTMLDivElement>(null);
const refToPercentages = ref<HTMLSpanElement>(null);
const leftShiftFromLine = ref<number>(0);
const colorPercentages = ref<string>('');

const updateStateComponent = () => {
  leftShiftFromLine.value = refToLine.value.offsetWidth + 5;
  colorPercentages.value = 'white';

  if (props.percentages > 50) {
    leftShiftFromLine.value -= refToPercentages.value.offsetWidth + 10;
    colorPercentages.value = props.styleProgress.percentagesColor;
  }
};

onMounted(() => {
  updateStateComponent();
});
onUpdated(() => {
  updateStateComponent();
});
</script>

<template>
  <div
    class="progress-bar"
    :style="{
      '--color-back': styleProgress.backColor,
      '--color-line': styleProgress.lineColor,
      '--color-percentages': colorPercentages,
      '--percentages-line': percentages.toString() + '%',
      '--shift-percentages': leftShiftFromLine.toString() + 'px',
    }"
  >
    <div
      class="progress-bar__line"
      ref="refToLine"
    ></div>
    <div class="progress-bar__percentages">
      <span
        class="progress-bar__percentages_text"
        ref="refToPercentages"
        >{{ percentages }}<small>%</small>
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
  --shift-percentages: 0;

  background: var(--color-back);
  height: 20px;
  border-radius: 10px;

  overflow: hidden;

  position: relative;

  &__line {
    transition: width 0.5s linear;
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
      transition: left 0.5s linear;
      left: var(--shift-percentages);
      font-size: 13px;
      text-align: center;
    }
  }
}
</style>
