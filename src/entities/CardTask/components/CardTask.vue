<script setup lang="ts">
import CustomProgressBar from '@/shared/components/CustomProgressBar.vue';
import { type Component, ref } from 'vue';

interface IProps {
  days: string;
  image?: Component;
  taskComplete: number;
}

const proc = ref(30);
</script>

<template>
  <div class="card-task">
    <div class="card-task__date">
      <span>10 дней</span>
    </div>
    <div class="card-task__title">
      <img
        src="/iconui.svg"
        class="card-task__icon"
        alt="ui"
      />
      <span class="card-task__text">UI Design</span>
    </div>

    <CustomProgressBar
      :percentages="proc"
      :style-progress="{
        backColor: 'rgba(197,197,197,0.4)',
        lineColor: '#ffffff',
        percentagesColor: 'var(--color-blue)',
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.card-task {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px;
  background: #006ee9;
  border-radius: 20px;
  color: white;

  width: 130px;
  height: 190px;

  &__date {
    display: flex;
    justify-content: flex-end;
    color: black;

    span {
      padding: 5px;
      border-radius: 10px;

      background: white;

      font-size: 12px;
    }
  }

  &__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 7px;
  }
}

.progress {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  font-size: 12px;

  &__title {
    color: white;
  }

  &__value {
    display: flex;
    justify-content: flex-end;
  }
}

.progressBar {
  height: 4px;
  border-radius: 4px;
  background: #004797;

  &__line {
    height: 4px;
    border-radius: 4px;
    width: 80%;
    background: white;
  }
}
</style>
